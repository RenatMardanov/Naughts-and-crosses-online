import { useState } from "react";
import { useGameState } from "../../../hooks";
import { GameTitle } from "../../game/game-title";
import { GameInfo } from "../../game/game-info";
import { GameSymbol } from "../../game/game-symbol";
import { GameField } from "../../game/game-field";

export function GameLayout() {
  const [playersCount, setPlayersCount] = useState(2);
  const {
    winnerSymbol,
    handlePlayerTimeOver,
    gameState,
    handleCellClick,
    nextStep,
    winnerSequence,
  } = useGameState({ playersCount: 2 });

  return (
    <>
      <GameTitle playersCount={playersCount} />
      <GameInfo
        playersCount={playersCount}
        className="mt-4"
        currentStep={gameState.currentStep}
        isWinner={!!winnerSymbol}
        handlePlayerTimeOver={() => handlePlayerTimeOver(gameState.currentStep)}
      />

      {winnerSymbol && (
        <div className="my-4 flex items-center justify-center">
          {" "}
          Победитель{"   "}
          <GameSymbol symbol={winnerSymbol} className="" />
        </div>
      )}

      <GameField
        gameState={gameState}
        handleCellClick={handleCellClick}
        nextStep={nextStep}
        winnerSequence={winnerSequence}
        winnerSymbol={winnerSymbol}
        className="mt-6"
      />
    </>
  );
}
