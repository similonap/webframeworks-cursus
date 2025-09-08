import { BitcoinPrice } from "./types";

export const fetchBitcoinPrice = async() => {
        const response = await fetch("https://sampleapis.assimilate.be/bitcoin/current");    
        if (!response.ok) {
          throw new Error("Failed to fetch Bitcoin price data");
        }
        const bitcoinPrice : BitcoinPrice = await response.json();
        return bitcoinPrice;
}