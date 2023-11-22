import styles from "../styles/game.module.css";
import GameInfo from "../components/GameInfo";
import GameCell from "../components/GameCell";
import { useGameState } from "../hooks/useGameState";

export default function App() {
    const {
        cells,
        resetHandler,
        handleCellClick,
        currentStep,
        winnerSequence,
        winnerSymbol,
        isDraw,
    } = useGameState();
    return (
        <div className={styles["game"]}>
            <GameInfo isDraw={isDraw} winnerSymbol={winnerSymbol} currentStep={currentStep} />
            <div className={styles["game-field"]}>
                {cells.map((symbol, index) => {
                    return (
                        <GameCell
                            key={index}
                            symbol={symbol}
                            isWinner={winnerSequence?.includes(index)}
                            onClick={() => handleCellClick(index)}
                        />
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
