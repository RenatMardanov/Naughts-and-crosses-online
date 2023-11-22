import { GameInfo } from "./game/GameInfo";
import { GameCell } from "./game/GameCell";
import { useGameState } from "../hooks/useGameState";
import { ResetBtn } from "./game/ResetBtn";

export default function Game() {
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
        <div className="flex flex-col items-center w-60 mx-auto my-24 border border-black p-3">
            <GameInfo isDraw={isDraw} winnerSymbol={winnerSymbol} currentStep={currentStep} />
            <div className="grid pl-px pt-px grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)]">
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

            <ResetBtn onClick={resetHandler} />
        </div>
    );
}
