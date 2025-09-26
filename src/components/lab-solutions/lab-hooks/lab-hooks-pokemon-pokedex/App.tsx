import BrowserOnly from "@docusaurus/BrowserOnly";
import React, { useEffect, useMemo, useState } from "react";
import { ColorRing } from "react-loader-spinner";

interface PokedexResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Array<{ name: string; url: string }>;
}

interface PokedexProps {
    limit: number;
}

const LoadingIndicator: React.FC = () => {
    return (
        <ColorRing
            visible
            height="80"
            width="80"
            ariaLabel="pokemon-loading"
            wrapperStyle={{}}
            wrapperClass="pokemon-loading"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
    );
};

const Pokedex: React.FC<PokedexProps> = ({ limit }) => {
    const [results, setResults] = useState<PokedexResponse["results"]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        let isSubscribed = true;

        const loadPokemon = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
                if (!response.ok) {
                    throw new Error(`Unexpected status ${response.status}`);
                }
                const data: PokedexResponse = await response.json();
                if (isSubscribed) {
                    setResults(data.results);
                }
            } catch (err) {
                if (isSubscribed) {
                    setError(err instanceof Error ? err.message : "Failed to load pokemon");
                }
            } finally {
                if (isSubscribed) {
                    setLoading(false);
                }
            }
        };

        loadPokemon();

        return () => {
            isSubscribed = false;
        };
    }, [limit]);

    const filteredResults = useMemo(() => {
        const term = filter.trim().toLowerCase();
        return results.filter((result) => result.name.toLowerCase().includes(term));
    }, [filter, results]);

    if (loading) {
        return (
            <div style={{ display: "flex", justifyContent: "center", padding: 16 }}>
                <LoadingIndicator />
            </div>
        );
    }

    if (error) {
        return <div style={{ color: "red" }}>{error}</div>;
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <input
                type="text"
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
                placeholder="Search Pokémon"
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {filteredResults.map((result) => (
                    <div key={result.name}>{result.name}</div>
                ))}
            </div>
        </div>
    );
};

const App: React.FC = () => {
    const [limit, setLimit] = useState(10);
    const [selectedLimit, setSelectedLimit] = useState(10);

    const applyLimit = () => {
        setSelectedLimit(limit);
    };

    return (
        <BrowserOnly>
            {() => (
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <Pokedex limit={selectedLimit} />
                    <div>
                        <input
                            type="number"
                            min={1}
                            value={limit}
                            onChange={(event) => setLimit(Number(event.target.value) || 1)}
                        />
                        <button onClick={applyLimit}>Set limit</button>
                    </div>
                </div>
            )}
        </BrowserOnly>
    );
};

export default App;
