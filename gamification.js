(function () {
    const STORAGE_KEY = 'safirihub_gamification_state';

    const LEVELS = [
        { id: 'backpacker', name: 'Backpacker', emoji: '🎒', minXp: 0 },
        { id: 'explorer', name: 'Explorer', emoji: '🧭', minXp: 100 },
        { id: 'safari-master', name: 'Safari Master', emoji: '🦁', minXp: 300 },
        { id: 'east-africa-legend', name: 'East Africa Legend', emoji: '🌍', minXp: 700 }
    ];

    const BADGES = [
        {
            id: 'first-itinerary',
            title: 'First Steps',
            emoji: '🧳',
            description: 'Confirm your first itinerary.',
            condition: summary => summary.itineraryCount >= 1
        },
        {
            id: 'safari-starter',
            title: 'Safari Starter',
            emoji: '🦁',
            description: 'Plan a safari-inspired trip.',
            condition: summary => summary.hasSafari
        },
        {
            id: 'coastal-explorer',
            title: 'Coastal Explorer',
            emoji: '🏝️',
            description: 'Explore a coastal destination such as Diani or Lamu.',
            condition: summary => summary.hasCoastal
        },
        {
            id: 'budget-scout',
            title: 'Budget Scout',
            emoji: '💸',
            description: 'Keep your plan cost-conscious.',
            condition: summary => summary.totalCost <= 180000
        },
        {
            id: 'multi-stop',
            title: 'Multi-stop Voyager',
            emoji: '🗺️',
            description: 'Plan across more than one destination.',
            condition: summary => summary.destinationCount > 1
        }
    ];

    const defaultState = {
        xp: 0,
        levelId: 'backpacker',
        unlockedBadges: [],
        notifications: [],
        itineraryCount: 0
    };

    let state = loadState();

    function loadState() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return { ...defaultState };
            const parsed = JSON.parse(raw);
            return {
                ...defaultState,
                ...parsed,
                unlockedBadges: Array.isArray(parsed.unlockedBadges) ? parsed.unlockedBadges : [],
                notifications: Array.isArray(parsed.notifications) ? parsed.notifications : []
            };
        } catch (error) {
            console.warn('Gamification state could not be loaded.', error);
            return { ...defaultState };
        }
    }

    function saveState() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }

    function getCurrentLevel(xp) {
        return [...LEVELS].reverse().find(level => xp >= level.minXp) || LEVELS[0];
    }

    function getLevelProgress(xp) {
        const current = getCurrentLevel(xp);
        const currentIndex = LEVELS.findIndex(level => level.id === current.id);
        const nextLevel = LEVELS[currentIndex + 1] || null;

        if (!nextLevel) {
            return { current, nextLevel: null, percent: 100, remaining: 0 };
        }

        const range = nextLevel.minXp - current.minXp;
        const progress = xp - current.minXp;
        const percent = Math.min(100, Math.round((progress / range) * 100));
        return { current, nextLevel, percent, remaining: Math.max(0, nextLevel.minXp - xp) };
    }

    function addNotification(message) {
        state.notifications.unshift(message);
        state.notifications = state.notifications.slice(0, 5);
        saveState();
        renderWidget();
    }

    function getItemTotal(item) {
        const multiplier = item.category && item.category.startsWith('Stay') ? (item.nights || 1) : 1;
        return (item.priceKES || 0) * (travelerCount || 1) * multiplier;
    }

    function summarizeTrip(plan) {
        const destinationNames = [];
        const totalCost = plan.reduce((sum, item) => sum + getItemTotal(item), 0);

        plan.forEach(item => {
            const dest = (item.category || '').split(' · ')[1] || '';
            if (dest) destinationNames.push(dest.toLowerCase());
        });

        const uniqueDestinations = new Set(destinationNames);
        const hasSafari = plan.some(item => /safari|mara|lion|rhino|giraffe|wildlife/i.test(`${item.name} ${item.category}`));
        const hasCoastal = Array.from(uniqueDestinations).some(dest => ['diani', 'lamu', 'coast', 'coastal'].includes(dest));
        const budgetFriendly = totalCost <= 180000;

        return {
            itineraryCount: plan.length,
            destinationCount: uniqueDestinations.size,
            totalCost,
            hasSafari,
            hasCoastal,
            budgetFriendly
        };
    }

    function evaluateBadges(summary) {
        return BADGES.filter(badge => badge.condition(summary));
    }

    function rewardProgress() {
        if (!Array.isArray(tripPlan) || tripPlan.length === 0) {
            if (typeof showToast === 'function') {
                showToast('Add at least one trip item to start earning XP.');
            }
            return;
        }

        const summary = summarizeTrip(tripPlan);
        const xpEarned = 40 + (summary.itineraryCount * 15) + (summary.destinationCount > 1 ? 25 : 0) + (summary.hasSafari ? 20 : 0) + (summary.hasCoastal ? 20 : 0) + (summary.budgetFriendly ? 15 : 0);
        state.xp += xpEarned;
        state.itineraryCount += 1;

        const previousLevel = getCurrentLevel(state.xp - xpEarned);
        const newLevel = getCurrentLevel(state.xp);
        state.levelId = newLevel.id;

        const newlyUnlocked = evaluateBadges(summary).filter(badge => !state.unlockedBadges.includes(badge.id));
        if (newlyUnlocked.length) {
            state.unlockedBadges = [...state.unlockedBadges, ...newlyUnlocked.map(b => b.id)];
        }

        saveState();
        renderWidget();

        if (typeof showToast === 'function') {
            showToast(`Itinerary confirmed! +${xpEarned} XP for your next adventure.`);
        }

        if (newlyUnlocked.length) {
            const names = newlyUnlocked.map(badge => `${badge.emoji} ${badge.title}`).join(', ');
            addNotification(`New badge unlocked: ${names}`);
        }

        if (previousLevel.id !== newLevel.id) {
            addNotification(`Level up! You are now ${newLevel.name}.`);
        }
    }

    function ensureWidget() {
        if (document.getElementById('gamificationWidget')) return;

        const widget = document.createElement('section');
        widget.id = 'gamificationWidget';
        widget.style.cssText = 'margin: 24px 0 8px; border: 1px solid rgba(11,110,79,0.16); border-radius: 16px; padding: 16px; background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(240,250,245,0.98)); box-shadow: 0 10px 28px rgba(11,110,79,0.12);';
        widget.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; gap: 12px; flex-wrap:wrap;">
                <div>
                    <div style="font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.16em; color: var(--green-deep, #0B6E4F); font-weight: 800;">Traveler Progress</div>
                    <div style="font-size: 1.15rem; font-weight: 800; color: var(--ink-dark, #1f2937);">Loading…</div>
                </div>
                <div style="text-align:right; font-size: 0.95rem; color: var(--ink-light, #5b6472);">XP: <strong id="gamificationXp">0</strong></div>
            </div>
            <div style="margin-top: 12px; height: 10px; border-radius: 999px; background: #e8f4ed; overflow: hidden;">
                <div id="gamificationProgressBar" style="height: 100%; width: 0%; background: linear-gradient(90deg, #0B6E4F, #1487A8); transition: width 0.25s ease;"></div>
            </div>
            <div style="margin-top:8px; display:flex; justify-content:space-between; flex-wrap:wrap; gap: 8px; font-size: 0.9rem; color: var(--ink-light, #5b6472);">
                <span id="gamificationLevelMeta">Backpacker</span>
                <span id="gamificationNextMeta">Next level: Explorer</span>
            </div>
            <div id="gamificationBadges" style="margin-top: 12px; display:flex; flex-wrap:wrap; gap: 8px;"></div>
            <div id="gamificationNotifications" style="margin-top: 12px; display:grid; gap: 6px;"></div>
        `;

        const target = document.querySelector('.hero-search') || document.querySelector('.app-container') || document.body;
        if (target === document.body) {
            target.appendChild(widget);
        } else if (target.parentNode) {
            target.insertAdjacentElement('afterend', widget);
        } else {
            document.body.appendChild(widget);
        }
    }

    function renderWidget() {
        ensureWidget();
        const widget = document.getElementById('gamificationWidget');
        if (!widget) return;

        const progress = getLevelProgress(state.xp);
        const levelName = `${progress.current.emoji} ${progress.current.name}`;
        const nextLabel = progress.nextLevel ? `Next: ${progress.nextLevel.name}` : 'Max level reached';

        widget.querySelector('div > div > div').textContent = levelName;
        widget.querySelector('#gamificationXp').textContent = state.xp;
        widget.querySelector('#gamificationProgressBar').style.width = `${progress.percent}%`;
        widget.querySelector('#gamificationLevelMeta').textContent = `${levelName} • ${state.itineraryCount} itinerary${state.itineraryCount === 1 ? '' : 's'} confirmed`;
        widget.querySelector('#gamificationNextMeta').textContent = nextLabel;

        const badgesEl = widget.querySelector('#gamificationBadges');
        badgesEl.innerHTML = state.unlockedBadges.length
            ? state.unlockedBadges.map(id => {
                const badge = BADGES.find(item => item.id === id);
                return badge ? `<span style="padding: 6px 10px; border-radius: 999px; background: #eefaf2; color: #0B6E4F; font-weight: 700;">${badge.emoji} ${badge.title}</span>` : '';
            }).join('')
            : '<span style="color: var(--ink-light, #5b6472);">No badges yet — confirm your first itinerary to get started.</span>';

        const notificationsEl = widget.querySelector('#gamificationNotifications');
        notificationsEl.innerHTML = (state.notifications.length ? state.notifications : ['Plan a trip to start collecting XP and badges.']).map(message => `<div style="padding: 8px 10px; border-radius: 10px; background: rgba(11,110,79,0.06); color: #0F2F24; font-size: 0.9rem;">${message}</div>`).join('');
    }

    function attachConfirmButtonHook() {
        const confirmBtn = document.querySelector('#tripDrawer .trip-drawer-footer .btn-primary');
        if (!confirmBtn || confirmBtn.dataset.gamificationAttached === 'true') return;

        confirmBtn.dataset.gamificationAttached = 'true';
        const existingClick = confirmBtn.onclick;
        confirmBtn.onclick = function (event) {
            if (typeof existingClick === 'function') {
                existingClick.call(this, event);
            }
            rewardProgress();
        };
        confirmBtn.addEventListener('click', () => {
            rewardProgress();
        });
    }

    function observeConfirmButton() {
        const drawer = document.getElementById('tripDrawer');
        if (!drawer) return;

        const observer = new MutationObserver(() => {
            attachConfirmButtonHook();
        });
        observer.observe(drawer, { childList: true, subtree: true });
    }

    function retryAttachConfirmButton() {
        attachConfirmButtonHook();
        window.setTimeout(attachConfirmButtonHook, 500);
        window.setTimeout(attachConfirmButtonHook, 1500);
    }

    function init() {
        state = loadState();
        state.levelId = getCurrentLevel(state.xp).id;
        saveState();
        renderWidget();
        retryAttachConfirmButton();
        observeConfirmButton();
    }

    window.handleItineraryConfirmation = function () {
        if (typeof toggleDrawer === 'function') {
            toggleDrawer(false);
        }
        rewardProgress();
    };

    window.resetGamificationProgress = function () {
        state = { ...defaultState };
        window.gamificationState = state;
        saveState();
        renderWidget();
        if (typeof showToast === 'function') {
            showToast('Gamification progress reset.');
        }
    };

    function updateGlobalStateRef() {
        window.gamificationState = state;
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            init();
            updateGlobalStateRef();
        });
    } else {
        init();
        updateGlobalStateRef();
    }
})();
