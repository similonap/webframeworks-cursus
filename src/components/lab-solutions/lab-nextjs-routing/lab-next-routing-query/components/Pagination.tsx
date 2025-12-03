"use client";

import { useSearchParams, useRouter } from "next/navigation";

interface PaginationProps {
    pageCount: number;
    currentPage: number;
}

const Pagination = ({ pageCount, currentPage }: PaginationProps) => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    console.log(currentPage);

    const changePage = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", newPage.toString());
        replace(`?${params.toString()}`);
    }

    return (
        <div className="flex justify-center mt-4 space-x-2">
            {/* Pagination buttons would go here */}
            {Array.from({ length: pageCount }, (_, i) => i + 1).map(page => (
                <button key={page} onClick={() => changePage(page)} className={`px-3 py-1 rounded ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination;