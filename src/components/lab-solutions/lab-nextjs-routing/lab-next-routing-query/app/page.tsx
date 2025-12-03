import Link from "next/link";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <ul>
                <li><Link href="/all">Search/Sort/Page</Link></li>
                <li><Link href="/search">Search</Link></li>
                <li><Link href="/sorting">Sorting</Link></li>
                <li><Link href="/paging">Paging</Link></li>
            </ul>
        </div>
    );
}
