import React, { useState } from "react";
import styles from "./SimpleQuiz.module.css";

interface QuestionProps {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
    finished: boolean;
}

const Question: React.FC<QuestionProps> = ({ id, question, options, correctAnswer, finished }) => {
    const [answer, setAnswer] = useState<string | null>(null);

    return (
        <div>
            <p>{question}</p>
            {options.map((option, index) => {
                const optionId = `${id}-option-${index}`;
                const isCorrect = option === correctAnswer;

                return (
                    <div
                        key={optionId}
                        className={finished && isCorrect ? styles.correct : undefined}
                    >
                        <input
                            disabled={finished}
                            type="radio"
                            name={id}
                            id={optionId}
                            checked={answer === option}
                            onChange={() => setAnswer(option)}
                        />
                        <label htmlFor={optionId}>{option}</label>
                    </div>
                );
            })}
        </div>
    );
};

const QUESTIONS = [
    {
        id: "life",
        question: "What is the answer to life, the universe and everything?",
        options: ["42", "The answer", "God"],
        correctAnswer: "42",
    },
    {
        id: "planet",
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars",
    },
    {
        id: "language",
        question: "Which programming language is known for \"write once, run anywhere\"?",
        options: ["Java", "Python", "C++"],
        correctAnswer: "Java",
    },
    {
        id: "mammal",
        question: "Which animal is the largest mammal on Earth?",
        options: ["Blue Whale", "Elephant", "Giraffe"],
        correctAnswer: "Blue Whale",
    },
] as const;

const App: React.FC = () => {
    const [finished, setFinished] = useState(false);

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <h2>Simple Quiz</h2>
            {QUESTIONS.map((question) => (
                <Question key={question.id} finished={finished} {...question} />
            ))}
            <button onClick={() => setFinished(true)}>Finish</button>
        </div>
    );
};

export default App;
