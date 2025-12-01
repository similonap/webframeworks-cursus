"use client"

import { BitcoinResponse } from "@/types"
import { useEffect, useState } from "react";
import CurrencyCard from "./CurrencyCard";
import { fetchBitcoinPrice } from "@/app/page";

interface CurrencyListProps {
    initialBitcoinResponse: BitcoinResponse
}

const CurrencyList = ({ initialBitcoinResponse }: CurrencyListProps) => {
    const [bitcoinResponse, setBitcoinResponse] = useState<BitcoinResponse>(initialBitcoinResponse);

    useEffect(() => {
        const fetchPrice = async() => {
            let price = await fetchBitcoinPrice();
            setBitcoinResponse(price);
        }

        const cb = setInterval(() => {
            fetchPrice();
        }, 10000);

        return () => {
            clearInterval(cb);
        }
    }, []);


    return (
        <div className="flex flex-row flex-1 gap-2 p-4">
            <CurrencyCard bitcoinPrice={bitcoinResponse.bpi.USD} />
            <CurrencyCard bitcoinPrice={bitcoinResponse.bpi.GBP} />
            <CurrencyCard bitcoinPrice={bitcoinResponse.bpi.EUR} />

        </div>
    )
}

export default CurrencyList;