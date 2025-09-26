import styles from "./SimpleQuiz.module.css"
import { useState } from "react";


interface QuestionProps {
    question: string;
    options: string[];
    correctAnswer: string;
    finished?: boolean;
}

const Question = ({question, options, correctAnswer, finished} : QuestionProps) => {
    const [answer, setAnswer] = useState<string | null>(null);
    
    return (
        <div>
            <p>{question}</p>
            {options.map((option, index) => (
                <div key={index} className={`${finished ? ((option === correctAnswer) ? styles.correct : "") : "" }`}>
                    <input 
                        disabled={finished}
                        type="radio" 
                        name={question} 
                        id={`${question}-option${index}`} 
                        checked={answer === option} 
                        onChange={() => setAnswer(option)}
                    />
                    <label htmlFor={`${question}-option${index}`}>{option}</label>
                </div>
            ))}
        </div>
    )
}

const SimpleQuiz = () => {


    const [finished, setFinished] = useState(false);

    const finish = () => {
        setFinished(true);
    }

    return (
        <div>
            <h2>Simple Quiz</h2>

            <Question
                question="What is the answer to life, the universe and everything?"
                options={["42", "The answer", "God"]}
                correctAnswer="42"
                finished={finished}
            />
            <Question
                question="Which planet is known as the Red Planet?"
                options={["Mars", "Venus", "Jupiter"]}
                correctAnswer="Mars"
                finished={finished}
            />
            <Question
                question='Which programming language is known for the motto "write once, run anywhere"?'
                options={["Java", "Python", "C++"]}
                correctAnswer="Java"
                finished={finished}
            />
            <Question
                question="Which animal is the largest mammal on Earth?"
                options={["Blue Whale", "Elephant", "Giraffe"]}
                correctAnswer="Blue Whale"
                finished={finished}
            />


            <button onClick={() => finish()}>Finish</button>
        </div>
    );
}
export default SimpleQuiz;