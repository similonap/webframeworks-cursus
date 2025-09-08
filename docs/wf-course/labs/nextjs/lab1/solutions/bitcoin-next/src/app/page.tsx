import BitcoinPriceOverview from "@/components/BitcoinPriceOverview";
import CurrencyList from "@/components/CurrencyList";
import { BitcoinPrice } from "@/types";

export default async function HomePage() {
    const response = await fetch("https://sampleapis.assimilate.be/bitcoin/current");

    if (!response.ok) {
      throw new Error("Failed to fetch Bitcoin price data");
    }

    const bitcoinPrice : BitcoinPrice = await response.json();
    
    return (
        <BitcoinPriceOverview bitcoinPrice={bitcoinPrice}/>
    )
}

