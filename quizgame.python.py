class Question:
    def __init__(self, prompt, answer):
        self.prompt = prompt
        self.answer = answer


class Quiz:
    def __init__(self, questions):
        self.questions = questions
        self.score = 0

    def run_quiz(self):
        for question in self.questions:
            user_answer = input(question.prompt + "\n")
            if user_answer.lower() == question.answer.lower():
                print("Correct!")
                self.score += 1
            else:
                print("Incorrect!")
        print("You got", self.score, "out of", len(self.questions), "questions correct.")


def main():
    # Define your questions here
    question_prompts = [
        "What is the capital of France?\n(a) Paris\n(b) Rome\n(c) Madrid\n\n",
        "Who is the author of 'Romeo and Juliet'?\n(a) William Shakespeare\n(b) Jane Austen\n(c) Charles Dickens\n\n",
        "What is the chemical symbol for water?\n(a) W\n(b) H2O\n(c) O2\n\n"
    ]

    questions = [
        Question(question_prompts[0], "a"),
        Question(question_prompts[1], "a"),
        Question(question_prompts[2], "b")
    ]

    quiz = Quiz(questions)
    quiz.run_quiz()


if __name__ == "__main__":
    main()
