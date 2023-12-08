import { useReducer } from "react";
import { Symbols } from "../components/helpers/constants";
import { computeWinner, getNextStep } from "../components/game/model";
import {
  GameStateAction,
  gameStateReducer,
  initGameState,
} from "./use-game-state-reduser";

interface UseGameStateProps {
  playersCount: number;
}

interface GameState {
  cells: (Symbols | null)[];
  currentStep: Symbols;
  playersTimerOver: Symbols[];
}

interface UseGameStateResult {
  gameState: GameState;
  nextStep: Symbols;
  winnerSequence: number[] | undefined;
  winnerSymbol: Symbols | null;
  dispatch: React.Dispatch<GameStateAction>;
}
export function useGameState({
  playersCount,
}: UseGameStateProps): UseGameStateResult {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    { playersCount },
    initGameState,
  );

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

  // const handlePlayerTimeOver = (symbol: Symbols) => {
  //   setGameState((lastGameState) => {
  //     return {
  //       ...lastGameState,
  //       playersTimerOver: [...lastGameState.playersTimerOver, symbol],
  //       currentStep: getNextStep(
  //         lastGameState.currentStep,
  //         playersCount,
  //         lastGameState.playersTimerOver,
  //       ),
  //     };
  //   });
  // };

  return {
    gameState,
    nextStep,
    winnerSequence,
    winnerSymbol,
    dispatch,
  };
}
