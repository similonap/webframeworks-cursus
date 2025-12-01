"use client"

import { BitcoinPrice } from "@/types";
import { useState } from "react";

interface CurrencyCardProps {
    bitcoinPrice: BitcoinPrice
}

const CurrencyCard = ({bitcoinPrice} : CurrencyCardProps) => {
    const [selected, setSelected] = useState<boolean>(false);

    return (
        <div onClick={() => setSelected(selected => !selected)} className={`${selected ? "bg-amber-100" : ""} border-2 border-gray-300 shadow-xl p-4 flex-1 rounded-2xl`}>
            <p>{bitcoinPrice.code}</p>
            <p className="text-2xl">{bitcoinPrice.rate}</p>
            <p className="text-gray-400">{bitcoinPrice.description}</p>
        </div>
    )
}

export default CurrencyCard;