import { Symbols } from "../../helpers/constants";
import { GameState } from "../../helpers/interfaces";

export function ComputePlayerTimer(
  gameState: GameState,
  playerSymbol: Symbols,
) {
  return {
    timer: gameState.timers[playerSymbol],
    timerStartAt:
      playerSymbol === gameState.currentStep
        ? gameState.currentStepStart
        : undefined,
  };
}
