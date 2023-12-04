import { useState } from "react";
import { Symbols } from "../components/helpers/constants";
import { computeWinner, getNextStep } from "../components/game/model";

interface useGameStateProps {
  playersCount: number;
}

interface gameStateProps {
  cells: (Symbols | null)[];
  currentStep: Symbols;
}

export function useGameState({ playersCount }: useGameStateProps) {
  const [gameState, setGameState] = useState<gameStateProps>(() => ({
    cells: new Array(19 * 19).fill(null),
    currentStep: Symbols.CROSS,
  }));

  const winnerSequence = computeWinner(gameState.cells);
  const nextStep = getNextStep(gameState.currentStep, playersCount);

  const handleCellClick = (index: number) => {
    if (gameState.cells[index] === null) {
      setGameState((lastGameState) => ({
        ...lastGameState,
        currentStep: getNextStep(lastGameState.currentStep, playersCount),
        cells: lastGameState.cells.map((cell, i) =>
          i === index ? lastGameState.currentStep : cell,
        ),
      }));
    }
  };

  return {
    gameState,
    handleCellClick,
    nextStep,
    winnerSequence,
  };
}
