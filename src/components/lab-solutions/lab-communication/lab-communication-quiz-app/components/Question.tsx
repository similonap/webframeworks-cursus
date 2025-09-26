import React, { useMemo } from "react";
import { decode } from "html-entities";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import TrueFalseQuestion from "./TrueFalseQuestion";

export interface QuestionData {
    type: "boolean" | "multiple";
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

interface QuestionProps {
    question: QuestionData;
    selectedAnswer?: string;
    onAnswer: (answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, selectedAnswer, onAnswer }) => {
    const isAnswered = selectedAnswer != null;
    const isCorrect = selectedAnswer === question.correct_answer;

    const multipleChoiceOptions = useMemo(() => {
        if (question.type !== "multiple") {
            return [];
        }

        const options = [question.correct_answer, ...question.incorrect_answers];
        return options
            .map((value) => ({ value, label: decode(value) }))
            .sort(() => Math.random() - 0.5);
    }, [question]);

    const containerStyle: React.CSSProperties = {
        backgroundColor: isAnswered ? (isCorrect ? "#d1fadf" : "#fbd3d3") : "#fff",
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 12,
    };

    return (
        <div style={containerStyle}>
            <div style={{ fontWeight: 600 }}>{decode(question.question)}</div>
            {!isAnswered && (
                <div>
                    {question.type === "boolean" ? (
                        <TrueFalseQuestion
                            disabled={isAnswered}
                            onSelect={onAnswer}
                            selectedAnswer={selectedAnswer}
                        />
                    ) : (
                        <MultipleChoiceQuestion
                            disabled={isAnswered}
                            onSelect={onAnswer}
                            options={multipleChoiceOptions}
                            selectedAnswer={selectedAnswer}
                        />
                    )}
                </div>
            )}
            {isAnswered && (
                <div>
                    {isCorrect ? (
                        <strong>
                            You answered correctly with {decode(selectedAnswer ?? "")}.
                        </strong>
                    ) : (
                        <strong>
                            You answered {decode(selectedAnswer ?? "")}.
                            The correct answer was {decode(question.correct_answer)}.
                        </strong>
                    )}
                </div>
            )}
        </div>
    );
};

export default Question;
