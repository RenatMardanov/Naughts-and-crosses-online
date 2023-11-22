import GameSymbol from "./GameSymbol";
import styles from "./../styles/game.module.css";

import { Symbols } from "./helpers/symbol";

interface GameCellProps {
    onClick: () => void;
    symbol: Symbols | null;
    isWinner: boolean | undefined;
}

export default function GameCell({ onClick, symbol, isWinner }: GameCellProps) {
    return (
        <button
            className={`${styles["cell"]} ${isWinner ? styles["cell--win"] : ""}`}
            onClick={onClick}
        >
            {symbol && <GameSymbol symbol={symbol} />}
        </button>
    );
}
