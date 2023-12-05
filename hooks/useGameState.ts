import { useState } from "react";
import { Symbols } from "../components/helpers/constants";
import { computeWinner, getNextStep } from "../components/game/model";

interface useGameStateProps {
  playersCount: number;
}

interface gameStateProps {
  cells: (Symbols | null)[];
  currentStep: Symbols;
  playersTimerOver: Symbols[];
}

export function useGameState({ playersCount }: useGameStateProps) {
  const [gameState, setGameState] = useState<gameStateProps>(() => ({
    cells: new Array(19 * 19).fill(null),
    currentStep: Symbols.CROSS,
    playersTimerOver: [],
  }));

  const nextStep = getNextStep(
    gameState.currentStep,
    playersCount,
    gameState.playersTimerOver,
  );

  const winnerSequence = computeWinner(gameState.cells);
  const winnerSymbol =
    nextStep === gameState.currentStep
      ? gameState.currentStep
      : winnerSequence
        ? gameState.cells[winnerSequence[0]]
        : null;

  const handleCellClick = (index: number) => {
    if (gameState.cells[index] === null) {
      setGameState((lastGameState) => ({
        ...lastGameState,
        currentStep: getNextStep(
          lastGameState.currentStep,
          playersCount,
          lastGameState.playersTimerOver,
        ),
        cells: lastGameState.cells.map((cell, i) =>
          i === index ? lastGameState.currentStep : cell,
        ),
      }));
    }
  };

  const handlePlayerTimeOver = (symbol: Symbols) => {
    setGameState((lastGameState) => {
      return {
        ...lastGameState,
        playersTimerOver: [...lastGameState.playersTimerOver, symbol],
        currentStep: getNextStep(
          lastGameState.currentStep,
          playersCount,
          lastGameState.playersTimerOver,
        ),
      };
    });
  };

  return {
    gameState,
    handleCellClick,
    nextStep,
    winnerSequence,
    handlePlayerTimeOver,
    winnerSymbol,
  };
}
