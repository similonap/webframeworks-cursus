"use client"

import { BitcoinPriceInfo } from "@/types"
import CurrencyCard from "./CurrencyCard"
import { useState } from "react";

interface CurrencyListProps {
    bpi: BitcoinPriceInfo
}

const CurrencyList = ({bpi} : CurrencyListProps) => {
    const [selectedCard, setSelectedCard] = useState<string>("usd");

    const onSelected = (code: string) => {
        setSelectedCard(code);
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(bpi).map(([currency, info]) => <CurrencyCard info={info} key={currency} selected={selectedCard === currency ? true : false} onSelected={onSelected}/>)}
        </div>
    )
}

export default CurrencyList;