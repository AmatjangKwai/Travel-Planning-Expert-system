case_base = [
    {
        "case_id": 1,
        "Course": "Calculus 101",
        "Course Department": "Mathematics",
        "Assignment Submission Status": "Always on Time",
        "Test Performance": "Average",
        "Participation in Class Activities": "Minimal",
        "Private Consultation with Instructor": "Never",
        "Specific Learning Difficulties": "Algebraic Manipulation",
        "Solution": "focus on practicing problems and seek help from the instructor during office hours."
    },
    {
        "case_id": 2,
        "Course": "Linear Algebra 201",
        "Course Department": "Mathematics",
        "Assignment Submission Status": "Sometimes Late",
        "Test Performance": "Below Average",
        "Participation in Class Activities": "Moderate",
        "Private Consultation with Instructor": "Occasionally",
        "Specific Learning Difficulties": "Vector Spaces",
        "Solution": "focus on understanding the theoretical concepts and practice solving problems related to vector spaces."
    },
    {
        "case_id": 3,
        "Course": "Physics 101",
        "Course Department": "Physics",
        "Assignment Submission Status": "Always Late",
        "Test Performance": "Poor",
        "Participation in Class Activities": "Minimal",
        "Private Consultation with Instructor": "Never",
        "Specific Learning Difficulties": "Mechanics",
        "Solution": "participate more in class and try to do assignments and seek consultation with the instructor."
    },
    {
        "case_id": 4,
        "Course": "Chemistry 101",
        "Course Department": "Chemistry",
        "Assignment Submission Status": "Always on Time",
        "Test Performance": "Average",
        "Participation in Class Activities": "Active",
        "Private Consultation with Instructor": "Occasionally",
        "Specific Learning Difficulties": "Organic Chemistry",
        "Solution": "focus on understanding the concepts and practice solving problems related to organic chemistry."
    },
    {
        "case_id": 5,
        "Course": "Biology 101",
        "Course Department": "Biology",
        "Assignment Submission Status": "Sometimes Late",
        "Test Performance": "Below Average",
        "Participation in Class Activities": "Moderate",
        "Private Consultation with Instructor": "Occasionally",
        "Specific Learning Difficulties": "Cell Biology",
        "Solution": "focus on understanding the cellular processes and practice solving problems related to cell biology."
    },
    {
        "case_id": 6,
        "Course": "Computer Science 101",
        "Course Department": "Computer Science",
        "Assignment Submission Status": "Always on Time",
        "Test Performance": "Above Average",
        "Participation in Class Activities": "Active",
        "Private Consultation with Instructor": "Occasionally",
        "Specific Learning Difficulties": "Programming Concepts",
        "Solution": "focus on practicing programming problems and seek help from the instructor during office hours."
    },
    {
        "case_id": 7,
        "Course": "Economics 101",
        "Course Department": "Economics",
        "Assignment Submission Status": "Sometimes Late",
        "Test Performance": "Average",
        "Participation in Class Activities": "Moderate",
        "Private Consultation with Instructor": "Occasionally",
        "Specific Learning Difficulties": "Microeconomics",
        "Solution": "focus on understanding the microeconomic concepts and practice solving problems related to microeconomics."
    },
    {
        "case_id": 8,
        "Course": "Psychology 101",
        "Course Department": "Psychology",
        "Assignment Submission Status": "Always on Time",
        "Test Performance": "Above Average",
        "Participation in Class Activities": "Active",
        "Private Consultation with Instructor": "Occasionally",
        "Specific Learning Difficulties": "Cognitive Psychology",
        "Solution": "focus on understanding the cognitive processes and practice solving problems related to cognitive psychology."
    }
]


def get_new_case():
    new_case = {
        "course": input("Enter the course name: "),
        "course_department": input("Enter the course department: "),
        "assignment_submission_status": input("Enter the assignment submission status (Always on Time, Sometimes Late, Always Late): "),
        "test_performance": input("Enter the test performance (Above Average, Average, Below Average, Poor): "),
        "participation_in_class_activities": input("Enter the participation in class activities (Active, Moderate, Minimal): "),
        "private_consultation_with_instructor": input("Enter the private consultation with instructor (Always, Occasionally, Never): "),
        "specific_learning_difficulties": input("Enter the specific learning difficulties: ")
    }
    return new_case


def normalize_text(value):
    if isinstance(value, str):
        return value.strip().lower()
    return value


def calculate_similarity(new_case, case):
    score = 0
    if normalize_text(new_case.get("course")) == normalize_text(case.get("Course")):
        score += 1
    if normalize_text(new_case.get("course_department")) == normalize_text(case.get("Course Department")):
        score += 2
    if normalize_text(new_case.get("assignment_submission_status")) == normalize_text(case.get("Assignment Submission Status")):
        score += 3
    if normalize_text(new_case.get("test_performance")) == normalize_text(case.get("Test Performance")):
        score += 4
    if normalize_text(new_case.get("participation_in_class_activities")) == normalize_text(case.get("Participation in Class Activities")):
        score += 3
    if normalize_text(new_case.get("private_consultation_with_instructor")) == normalize_text(case.get("Private Consultation with Instructor")):
        score += 2
    if normalize_text(new_case.get("specific_learning_difficulties")) == normalize_text(case.get("Specific Learning Difficulties")):
        score += 1
    return score


def display_case(case):
    if not case:
        print("\nNo previous cases available to retrieve.")
        return

    print("\nRetrieved best case:")
    for key in [
        "case_id",
        "Course",
        "Course Department",
        "Assignment Submission Status",
        "Test Performance",
        "Participation in Class Activities",
        "Private Consultation with Instructor",
        "Specific Learning Difficulties",
        "Solution"
    ]:
        if key in case:
            print(f"  {key}: {case[key]}")


def retrieve_best_case(new_case):
    if not case_base:
        return None, 0

    best_case = None
    best_score = -1
    for case in case_base:
        score = calculate_similarity(new_case, case)
        if score > best_score:
            best_score = score
            best_case = case
    return best_case, best_score


def ask_yes_no(prompt):
    while True:
        answer = input(prompt).strip().lower()
        if answer in {"yes", "no"}:
            return answer
        print("Please enter yes or no.")


def reuse_and_revise_solution(best_case):
    if best_case is None:
        return input("\nNo previous case found. Enter a solution for this case: ")

    print("\nSuggested solution:", best_case.get("Solution"))
    answer = ask_yes_no("Did the suggested solution work? Enter yes or no: ")
    if answer == "yes":
        return best_case.get("Solution")
    return input("Enter the revised solution: ")


def retain_case(new_case, final_solution):
    retained_case = {
        "case_id": len(case_base) + 1,
        "Course": new_case["course"],
        "Course Department": new_case["course_department"],
        "Assignment Submission Status": new_case["assignment_submission_status"],
        "Test Performance": new_case["test_performance"],
        "Participation in Class Activities": new_case["participation_in_class_activities"],
        "Private Consultation with Instructor": new_case["private_consultation_with_instructor"],
        "Specific Learning Difficulties": new_case["specific_learning_difficulties"],
        "Solution": final_solution
    }
    case_base.append(retained_case)
    print("\nNew case retained successfully.")
    print(f"Total number of cases: {len(case_base)}")
    return retained_case


def run_cbr():
    new_case = get_new_case()
    best_case, best_score = retrieve_best_case(new_case)
    display_case(best_case)
    print("Similarity score:", best_score)
    final_solution = reuse_and_revise_solution(best_case)
    retain_case(new_case, final_solution)
    print("\nFinal solution:", final_solution)


if __name__ == "__main__":
    run_cbr()



