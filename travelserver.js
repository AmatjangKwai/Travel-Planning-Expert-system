const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { OpenAI } = require('openai');

const travelData = require('./travel_data.json');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY,
});

app.post('/api/chat', async (req, res) => {
    try {
        const userMessage = req.body.message;
        
        const systemInstruction = `
You are an expert Kenyan Travel Advisor voice assistant. 

Use the provided DATABASE to answer questions:
${JSON.stringify(travelData, null, 2)}

REGION & CATEGORY MAPPING (Use this to match broad user requests):
- Coast / Beach / Ocean: Mombasa, Lamu County, Kilifi County
- Safari / Wildlife: Tsavo Voi, Lake Nakuru National Park, Homa Bay County
- Hiking / Nature / Waterfalls: Bungoma County, Ngong Hills, Fourteen Falls, Kakamega County
- Culture & Ancestry: Vihiga County, Busia County, Nairobi County
- Lakes & Water Bodies: Lake Victoria (Kisumu), Hell's Gate & Lake Naivasha

INSTRUCTIONS:
1. If the user asks broadly (e.g. "what can I do at the coast?"), recommend 1 or 2 matching destinations from the database with their hotels and prices.
2. Keep answers brief, warm, and strictly conversational.
3. NEVER use Markdown tables, pipe characters (|), emojis, bullet points (*), or slashes (/).
4. Write out numbers and currencies clearly (e.g., "1,200 Kenya Shillings").
5. Do NOT include any safety metadata, headers, or moderation tags in your final text.
`;

        const completion = await openai.chat.completions.create({
            model: "openrouter/free", // The most reliable option for avoiding 404 errors
            messages: [
                { role: "system", content: systemInstruction },
                { role: "user", content: userMessage }
            ],
            extra_headers: {
                "HTTP-Referer": "http://localhost:3000", 
                "X-Title": "Kenyan Travel Assistant", 
            }
        });

        let reply = completion.choices[0].message.content;

        // --- CLEANUP: Strip out stray OpenRouter safety metadata ---
        reply = reply.replace(/User Safety:\s*safe/gi, '');
        reply = reply.replace(/Safety Evaluation:.*$/gm, '');
        reply = reply.trim();

        // Fallback if cleaning made the response empty
        if (!reply) {
            reply = "I would be happy to help you with that! Could you repeat your destination or preference?";
        }

        res.json({ reply: reply });
        
    } catch (error) {
        console.error("Error generating AI response:", error);
        res.status(500).json({ error: "Failed to connect to AI" });
    }
});

app.listen(port, (err) => {
    if (err) {
        console.error(`Error starting server: ${err}`);
    } else {
        console.log(`Server is running on http://localhost:${port}`);
    }
});