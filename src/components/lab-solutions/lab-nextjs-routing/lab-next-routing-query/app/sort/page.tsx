import SearchBox from "@/components/SearchBox";
import { SortDirection, SortField, Spell } from "../types";
import SortSelect from "@/components/SortSelect";

const Sort = async(props: PageProps<"/sort">) => {
    const searchParams = await props.searchParams;
    const sortField : SortField = (typeof searchParams.sortField === "string" ? searchParams.sortField : "id") as SortField;
    const sortDirection : SortDirection = (typeof searchParams.sortDirection === "string" ? searchParams.sortDirection : "asc") as SortDirection;

    const response = await fetch("https://sampleapis.assimilate.be/harrypotter/spells");
    if (!response.ok) {
        throw new Error("Failed to fetch spells");
    }
    const spells: Spell[] = await response.json();
    
    console.log("Sorting by", sortField, sortDirection);

    const sortedSpells = spells.sort((a, b) => {
        let fieldA = a[sortField];
        let fieldB = b[sortField];

        if (typeof fieldA === "string" && typeof fieldB === "string") {
            fieldA = fieldA.toLowerCase();
            fieldB = fieldB.toLowerCase();
        }

        if (fieldA < fieldB) return sortDirection === "asc" ? -1 : 1;
        if (fieldA > fieldB) return sortDirection === "asc" ? 1 : -1;
        return 0;
    });

    return (
        <div>
            <SortSelect />
            <ul>
                {sortedSpells.map(spell => (
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

export default Sort;