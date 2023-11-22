import { useState } from "react";
import styles from "../styles/game.module.css";
import { Symbols } from "../components/helpers/symbol";

const computeWinner = (cells: (Symbols | null)[]): number[] | undefined => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            return [a, b, c];
        }
    }
};

export default function App() {
    const [cells, setCells] = useState<(Symbols | null)[]>([
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ]);
    const [currentStep, setCurrentStep] = useState(Symbols.X);
    const [winnerSequence, setWinnerSequence] = useState<number[] | undefined>(undefined);

    const handleCellClick = (index: number) => {
        if (cells[index] || winnerSequence) {
            return;
        }
        const cellsCopy = cells.slice();
        cellsCopy[index] = currentStep;
        const winner = computeWinner(cellsCopy);

        setCells(cellsCopy);
        setCurrentStep(currentStep === Symbols.O ? Symbols.X : Symbols.O);
        setWinnerSequence(winner);
    };

    const getSymbolClassName = (symbol: Symbols) => {
        if (symbol === Symbols.O) return "symbol--o";
        if (symbol === Symbols.X) return "symbol--x";
        return "";
    };

    const renderSymbol = (symbol: Symbols) => (
        <span className={`${styles["symbol"]} ${styles[getSymbolClassName(symbol)]}`}>
            {symbol}
        </span>
    );

    const resetHandler = () => {
        setCells([null, null, null, null, null, null, null, null, null]);
        setWinnerSequence(undefined);
        setCurrentStep(Symbols.X);
    };

    const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined;

    const isDraw = !winnerSequence && cells.includes(null) === false;

    return (
        <div className={styles["game"]}>
            <div className={styles["game-info"]}>
                {winnerSequence ? "Победитель: " : isDraw ? "Ничья!" : "Ход: "}{" "}
                {isDraw ? "" : renderSymbol(winnerSymbol ?? currentStep)}
            </div>
            <div className={styles["game-field"]}>
                {cells.map((symbol, index) => {
                    const isWinner = winnerSequence?.includes(index);
                    return (
                        <button
                            key={index}
                            className={`${styles["cell"]} ${isWinner ? styles["cell--win"] : ""}`}
                            onClick={() => handleCellClick(index)}
                        >
                            {symbol ? renderSymbol(symbol) : null}
                        </button>
                    );
                })}
            </div>
            <div>
                <button className={styles["newGame-btn"]} onClick={resetHandler}>
                    Новая игра
                </button>
            </div>
        </div>
    );
}
