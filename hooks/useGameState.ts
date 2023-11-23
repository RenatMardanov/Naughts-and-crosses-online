import { useState } from "react";
import { STEP_ORDER, Symbols } from "../components/helpers/constants";

export function useGameState() {
  const [gameState, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentStep: Symbols.CROSS,
  }));

  function getNextStep(currentStep: Symbols): Symbols {
    const nextMoveIndex = STEP_ORDER.indexOf(currentStep) + 1;
    return STEP_ORDER[nextMoveIndex] ?? STEP_ORDER[0];
  }

  const nextStep = getNextStep(gameState.currentStep);

  const handleCellClick = (index: number) => {
    if (gameState.cells[index] === null) {
      setGameState((lastGameState) => ({
        ...lastGameState,
        currentStep: getNextStep(lastGameState.currentStep),
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
