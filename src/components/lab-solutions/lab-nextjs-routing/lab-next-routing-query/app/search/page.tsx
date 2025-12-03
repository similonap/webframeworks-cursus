import SearchBox from "@/components/SearchBox";
import { Spell } from "../types";
import SortSelect from "@/components/SortSelect";

const Search = async(props: PageProps<"/search">) => {
    const searchParams = await props.searchParams;
    const q = typeof searchParams.q === "string" ? searchParams.q : "";

    const response = await fetch("https://sampleapis.assimilate.be/harrypotter/spells");
    if (!response.ok) {
        throw new Error("Failed to fetch spells");
    }
    const spells: Spell[] = await response.json();
    const filteredSpells = spells.filter(spell => spell.name.toLowerCase().includes(q.toLowerCase()));

    return (
        <div>
            <SearchBox />
            <ul>
                {filteredSpells.map(spell => (
                    <li key={spell.id}>
                        <h2 className="text-xl font-bold">{spell.name}</h2>
                        <p className="italic">{spell.alignment}</p>
                        <p>{spell.difficulty}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Search;