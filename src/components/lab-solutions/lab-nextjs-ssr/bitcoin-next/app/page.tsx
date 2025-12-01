
import CurrencyList from "@/components/CurrencyList";
import { BitcoinResponse } from "@/types";

export async function fetchBitcoinPrice() {
    const response = await fetch("https://sampleapis.assimilate.be/bitcoin/current");
    if (!response.ok ) throw new Error("Something went wrong");
    const bitcoinResponse : BitcoinResponse = await response.json();
    return bitcoinResponse;
}

export default async function Home() {
    const bitcoinResponse : BitcoinResponse = await fetchBitcoinPrice();

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{bitcoinResponse.chartName}</h1>
            <p>{bitcoinResponse.disclaimer}</p>


            <CurrencyList initialBitcoinResponse={bitcoinResponse}/>
        </div>
    );
}
