export interface BitcoinPrice {
    time: TimeInfo;
    disclaimer: string;
    chartName: string;
    bpi: BitcoinPriceInfo;
}

export interface BitcoinPriceInfo {
    [key: string]:CurrencyInfo
}

export interface TimeInfo {
    updated: string;
    updatedISO: string;
    updateduk: string;
}

export interface CurrencyInfo {
    code: string;
    symbol: string;
    rate: string;
    description: string;
    rate_float: number;
}