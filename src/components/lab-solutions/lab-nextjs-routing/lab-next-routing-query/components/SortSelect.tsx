"use client";

import { SortDirection, SortField } from "@/app/types";
import { useRouter, useSearchParams } from "next/navigation";

const SortSelect = () => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const sortField : SortField = (searchParams.get("sortField") || "id") as SortField;
    const sortDirection : SortDirection = (searchParams.get("sortDirection") || "asc") as SortDirection;

    const onChangeSortField: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        const newSort = e.target.value;
        const params = new URLSearchParams(searchParams.toString());
        if (newSort) {
            params.set("sortField", newSort);
        } else {
            params.delete("sortField");
        }
        replace(`?${params.toString()}`);
    };

    const onChangeSortDirection: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        const newSort = e.target.value;
        const params = new URLSearchParams(searchParams.toString());
        if (newSort) {
            params.set("sortDirection", newSort);
        } else {
            params.delete("sortDirection");
        }
        replace(`?${params.toString()}`);
    };

    return (
        <div>
            <label htmlFor="sort" className="mr-2 font-medium">Sort by:</label>
            <select id="sortField" name="sortField" className="border border-gray-300 rounded-md p-2" onChange={onChangeSortField} value={sortField}>
                <option value="id">ID</option>
                <option value="name">Name</option>
                <option value="difficulty">Difficulty</option>
                <option value="type">Type</option>
            </select>

            <label htmlFor="sortDirection" className="ml-4 mr-2 font-medium">Direction:</label>
            <select id="sortDirection" name="sortDirection" className="border border-gray-300 rounded-md p-2" onChange={onChangeSortDirection} value={sortDirection}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>
    );
}

export default SortSelect;