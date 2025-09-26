import React from "react";

interface TrueFalseQuestionProps {
    disabled: boolean;
    onSelect: (answer: string) => void;
    selectedAnswer?: string;
}

const TrueFalseQuestion: React.FC<TrueFalseQuestionProps> = ({
    disabled,
    onSelect,
    selectedAnswer,
}) => {
    const answers: Array<"True" | "False"> = ["True", "False"];

    return (
        <div style={{ display: "flex", gap: 8 }}>
            {answers.map((answer) => (
                <button
                    key={answer}
                    type="button"
                    disabled={disabled}
                    onClick={() => onSelect(answer)}
                    style={{ fontWeight: selectedAnswer === answer ? 600 : 400 }}
                >
                    {answer}
                </button>
            ))}
        </div>
    );
};

export default TrueFalseQuestion;
