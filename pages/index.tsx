import { useState } from "react";
import { GameField, GameInfo, GameTitle } from "../components/game";
import { Header } from "../components/header";
import { useGameState } from "../hooks";

export default function HomePages() {
  const [playersCount, setPlayersCount] = useState(4);

  const { gameState, handleCellClick, nextStep } = useGameState({
    playersCount,
  });
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          playersCount={playersCount}
          className="mt-4"
          currentStep={gameState.currentStep}
        />
        <GameField
          gameState={gameState}
          handleCellClick={handleCellClick}
          nextStep={nextStep}
          className="mt-6"
        />
      </main>
    </div>
  );
}
