import SearchBox from "@/components/SearchBox";
import { Spell } from "../types";
import Pagination from "@/components/Pagination";

const PAGE_SIZE = 5;

const Paging = async(props: PageProps<"/paging">) => {
    const searchParams = await props.searchParams;
    const page = parseInt(typeof searchParams.page === "string" ? searchParams.page : "1");

    const response = await fetch("https://sampleapis.assimilate.be/harrypotter/spells");
    if (!response.ok) {
        throw new Error("Failed to fetch spells");
    }
    const spells: Spell[] = await response.json();
    const pageCount = Math.ceil(spells.length / PAGE_SIZE)
    const spellsByPage = spells.slice(((page-1) * PAGE_SIZE), ((page) * PAGE_SIZE));

    return (
        <div>
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

export default Paging;