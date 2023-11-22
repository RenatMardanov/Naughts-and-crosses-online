import React from "react";
import { Symbols } from "../helpers/symbol";

interface GameSymbolProps {
    symbol: Symbols;
}

export const GameSymbol: React.FC<GameSymbolProps> = ({ symbol }) => {
    const getSymbolClassName = (symbol: Symbols) => {
        if (symbol === Symbols.X) return "text-red-500";
        if (symbol === Symbols.O) return "text-green-500";
        return "";
    };

    return <span className={`text-xl font-semibold ${getSymbolClassName(symbol)}`}>{symbol}</span>;
};
