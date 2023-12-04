import { useState } from "react";
import { STEP_ORDER, Symbols } from "../components/helpers/constants";

interface useGameStateProps {
  playersCount: number;
}

export function useGameState({ playersCount }: useGameStateProps) {
  const [gameState, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentStep: Symbols.CROSS,
  }));

  function getNextStep(currentStep: Symbols, playersCount: number) {
    const slicedStepOrder = STEP_ORDER.slice(0, playersCount);
    const nextMoveIndex = slicedStepOrder.indexOf(currentStep) + 1;
    return slicedStepOrder[nextMoveIndex] ?? slicedStepOrder[0];
  }

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
  };
}
