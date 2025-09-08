"use client"

import { BitcoinPrice } from "@/types"
import CurrencyList from "./CurrencyList"
import { useEffect, useState } from "react";
import { fetchBitcoinPrice } from "@/actions";

export interface BitcoinPriceOverview {
    bitcoinPrice: BitcoinPrice
}

const BitcoinPriceOverview = ({bitcoinPrice}: BitcoinPriceOverview) => {

    const [bitcoinPriceCurrent, setBitcoinPriceCurrent] = useState<BitcoinPrice>(bitcoinPrice);

    useEffect(() => {
        const cb = setInterval(async() => {
            const bitcoinPriceCurrent = await fetchBitcoinPrice();
            setBitcoinPriceCurrent(bitcoinPriceCurrent);

        }, 1000);

        return () => {
            clearInterval(cb);
        }
    },[])

    return (
        <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Current Bitcoin Price ({bitcoinPriceCurrent.time.updatedISO})</h1>
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-semibold mb-2">{bitcoinPriceCurrent.chartName}</h2>
          <p className="mb-2">{bitcoinPriceCurrent.disclaimer}</p>
          <CurrencyList bpi={bitcoinPriceCurrent.bpi}/>
        </div>
      </div>
    )
}

export default BitcoinPriceOverview;