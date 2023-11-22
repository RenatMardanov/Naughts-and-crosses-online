import { GameSymbol } from "./GameSymbol";
import { Symbols } from "../helpers/symbol";

interface GameInfoProps {
    isDraw: boolean;
    winnerSymbol: Symbols | null | undefined;
    currentStep: Symbols;
}

export function GameInfo({ isDraw, winnerSymbol, currentStep }: GameInfoProps) {
    if (winnerSymbol) {
        return (
            <div className="mb-2">
                {`Победитель: `}
                <GameSymbol symbol={winnerSymbol} />
            </div>
        );
    } else if (isDraw) {
        return <div className={"mb-2"}>Ничья</div>;
    }
    return (
        <div className={"mb-2"}>
            {`Ход: `} <GameSymbol symbol={currentStep} />;
        </div>
    );
}
