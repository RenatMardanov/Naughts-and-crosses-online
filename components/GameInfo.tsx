import GameSymbol from "./GameSymbol";
import { Symbols } from "./helpers/symbol";
import styles from "./../styles/game.module.css";

interface GameInfoProps {
    isDraw: boolean;
    winnerSymbol: Symbols | null | undefined;
    currentStep: Symbols;
}

export default function GameInfo({ isDraw, winnerSymbol, currentStep }: GameInfoProps) {
    if (winnerSymbol) {
        return (
            <div className={styles["game-info"]}>
                {`Победитель: `}
                <GameSymbol symbol={winnerSymbol} />
            </div>
        );
    } else if (isDraw) {
        return <div className={styles["game-info"]}>Ничья</div>;
    }
    return (
        <div className={styles["game-info"]}>
            {`Ход: `} <GameSymbol symbol={currentStep} />;
        </div>
    );
}
