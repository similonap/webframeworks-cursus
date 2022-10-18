import React from "react";
import { useEffect, useState } from "react";
import styles from "./Labo5LocalStorage.module.css";
import BrowserOnly from '@docusaurus/BrowserOnly';

interface Joke {
    id: string,
    joke: string,
    status: number
}



const Jokes = () => {
    const [joke, setJoke] = useState("");
    const [favoriteJoke, setFavoriteJoke] = useState(localStorage.getItem("favoriteJoke") || "");
    
    const loadJoke = async() => {
        let response = await fetch("https://icanhazdadjoke.com/", { 
            headers: { "Accept": "application/json" }
        });
        let joke : Joke = await response.json();
        setJoke(joke.joke);
    }

    const loadLocalStorage = async() => {
        let joke = localStorage.getItem("favorites");
        if (joke) {
            setJoke(joke);
        }
    }

    useEffect(() => {
        loadJoke();
        loadLocalStorage();
    }, []);

    const setFavorite = () => {
        setFavoriteJoke(joke);
        localStorage.setItem("favoriteJoke", joke);
    }
    
    return (
        <div>
            <div className={styles.card}>
                <b>Random joke:</b>
                <div>{joke}</div>
                <div>
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


}

const App = () => {
    return (
        <BrowserOnly>
            {() => <Jokes/>}
        </BrowserOnly>
    )
}

export default App;