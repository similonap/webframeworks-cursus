import BrowserOnly from "@docusaurus/BrowserOnly";
import React, { useEffect, useState } from "react";
import styles from "./LocalStorage.module.css";

const FAVORITE_JOKE_KEY = "favoriteJoke";

interface JokeResponse {
    id: string;
    joke: string;
    status: number;
}

const DadJoke: React.FC = () => {
    const [joke, setJoke] = useState("");
    const [favoriteJoke, setFavoriteJoke] = useState("");

    const loadJoke = async () => {
        const response = await fetch("https://icanhazdadjoke.com/", {
            headers: { Accept: "application/json" },
        });
        const data: JokeResponse = await response.json();
        setJoke(data.joke);
    };

    const loadFavorite = () => {
        const stored = localStorage.getItem(FAVORITE_JOKE_KEY);
        if (stored) {
            setFavoriteJoke(stored);
            setJoke(stored);
        }
    };

    useEffect(() => {
        loadJoke();
        loadFavorite();
    }, []);

    const setFavorite = () => {
        setFavoriteJoke(joke);
        localStorage.setItem(FAVORITE_JOKE_KEY, joke);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className={styles.card}>
                <b>Random joke:</b>
                <div>{joke}</div>
                <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                    <button onClick={setFavorite}>Set as favorite</button>
                    <button onClick={loadJoke}>New joke</button>
                </div>
            </div>
            {favoriteJoke && (
                <div className={styles.card}>
                    <b>Favorite joke:</b>
                    <div>{favoriteJoke}</div>
                </div>
            )}
        </div>
    );
};

const App: React.FC = () => {
    return <BrowserOnly>{() => <DadJoke />}</BrowserOnly>;
};

export default App;
