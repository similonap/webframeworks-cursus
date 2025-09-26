import BrowserOnly from "@docusaurus/BrowserOnly";
import React, { useCallback, useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import Question, {
    QuestionData,
} from "./components/Question";

interface QuizResponse {
    response_code: number;
    results: QuestionData[];
}

interface QuizQuestion extends QuestionData {
    id: string;
    userAnswer?: string;
}

const LoadingIndicator: React.FC = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", padding: 16 }}>
            <ColorRing
                visible
                height="80"
                width="80"
                ariaLabel="quiz-loading"
                wrapperStyle={{}}
                wrapperClass="quiz-loading"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
        </div>
    );
};

const QuizApp: React.FC = () => {
    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const loadQuestions = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch("https://opentdb.com/api.php?amount=10");
            if (!response.ok) {
                throw new Error(`Unexpected status ${response.status}`);
            }
            const data: QuizResponse = await response.json();
            setQuestions((previous) => [
                ...previous,
                ...data.results.map((question, index) => ({
                    ...question,
                    id: `${Date.now()}-${previous.length + index}`,
                })),
            ]);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to load questions");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadQuestions();
    }, [loadQuestions]);

    const handleAnswer = (id: string, answer: string) => {
        setQuestions((previous) =>
            previous.map((question) =>
                question.id === id ? { ...question, userAnswer: answer } : question
            )
        );
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {questions.map((question) => (
                <Question
                    key={question.id}
                    question={question}
                    selectedAnswer={question.userAnswer}
                    onAnswer={(answer) => handleAnswer(question.id, answer)}
                />
            ))}
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <button type="button" onClick={loadQuestions} disabled={loading}>
                    Load More
                </button>
                {error && <span style={{ color: "red" }}>{error}</span>}
            </div>
            {loading && <LoadingIndicator />}
        </div>
    );
};

const App: React.FC = () => {
    return <BrowserOnly>{() => <QuizApp />}</BrowserOnly>;
};

export default App;
