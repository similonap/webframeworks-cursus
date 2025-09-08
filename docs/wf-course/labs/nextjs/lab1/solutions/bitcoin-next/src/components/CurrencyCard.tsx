import type { CurrencyInfo } from "@/types";

export interface CurrencyCardProps {
    info: CurrencyInfo;
    onSelected: (code: string) => void;
    selected: boolean;
}

const CurrencyCard = ({info, selected, onSelected} : CurrencyCardProps) => {
    return (
        <div className={`border p-4 rounded ${selected ? "bg-amber-200" : ""}`} onClick={() => onSelected(info.code)}>
            <div className="text-lg font-medium flex flex-row">{info.code}</div>
            <p className="text-2xl font-bold">{info.rate}</p>
            <p className="text-sm text-gray-600">{info.description}</p>
        </div>
    )
}

export default CurrencyCard;