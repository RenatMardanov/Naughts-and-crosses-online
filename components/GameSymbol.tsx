import React from "react";
import { Symbols } from "./helpers/symbol";
import styles from "../styles/game.module.css";

interface GameSymbolProps {
    symbol: Symbols;
}

const GameSymbol: React.FC<GameSymbolProps> = ({ symbol }) => {
    const getSymbolClassName = (symbol: Symbols) => {
        if (symbol === Symbols.O) return "symbol--o";
        if (symbol === Symbols.X) return "symbol--x";
        return "";
    };

    return (
        <span className={`${styles["symbol"]} ${styles[`${getSymbolClassName(symbol)}`]}`}>
            {symbol}
        </span>
    );
};

export default GameSymbol;
