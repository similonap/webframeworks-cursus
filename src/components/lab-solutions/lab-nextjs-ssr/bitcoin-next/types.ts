export interface BitcoinResponse {
    disclaimer: string;
    chartName: string;
    bpi: {
        USD: BitcoinPrice,
        EUR: BitcoinPrice
        GBP: BitcoinPrice
    }
}

export interface BitcoinPrice {
    code: string;
    symbol: string;
    rate: string;
    description: string;
    rate_float: number;
}
