import React from "react";

interface Option {
    label: string;
    value: string;
}

interface MultipleChoiceQuestionProps {
    options: Option[];
    disabled: boolean;
    onSelect: (answer: string) => void;
    selectedAnswer?: string;
}

const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({
    options,
    disabled,
    onSelect,
    selectedAnswer,
}) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {options.map((option) => (
                <button
                    key={option.value}
                    type="button"
                    disabled={disabled}
                    onClick={() => onSelect(option.value)}
                    style={{ fontWeight: selectedAnswer === option.value ? 600 : 400 }}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
};

export default MultipleChoiceQuestion;
