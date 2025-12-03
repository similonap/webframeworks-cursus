import SearchBox from "@/components/SearchBox";
import { SortDirection, SortField, Spell } from "../types";
import SortSelect from "@/components/SortSelect";
import Pagination from "@/components/Pagination";

const PAGE_SIZE = 5;

const All = async(props: PageProps<"/all">) => {
    const searchParams = await props.searchParams;
    const q = typeof searchParams.q === "string" ? searchParams.q : "";
    const page = parseInt(typeof searchParams.page === "string" ? searchParams.page : "1");
    const sortField : SortField = (typeof searchParams.sortField === "string" ? searchParams.sortField : "id") as SortField;
    const sortDirection : SortDirection = (typeof searchParams.sortDirection === "string" ? searchParams.sortDirection : "asc") as SortDirection;

    const response = await fetch("https://sampleapis.assimilate.be/harrypotter/spells");
    if (!response.ok) {
        throw new Error("Failed to fetch spells");
    }
    const spells: Spell[] = await response.json();

    const filteredSpells = spells.filter(spell => spell.name.toLowerCase().includes(q.toLowerCase()));

    const pageCount = Math.ceil(filteredSpells.length / PAGE_SIZE)

    const sortedSpells = filteredSpells.sort((a, b) => {
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

    const spellsByPage = sortedSpells.slice(((page-1) * PAGE_SIZE), ((page) * PAGE_SIZE));

    return (
        <div>
            <SearchBox />
            <SortSelect />
            <Pagination pageCount={pageCount} currentPage={page} />
            <ul>
                {spellsByPage.map(spell => (
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

export default All;