import { Symbols } from "../../helpers/constants";
import { GameState } from "../../helpers/interfaces";

export function ComputeWinnerSymbol(
  gameState: GameState,
  winnerSequence: number[] | undefined,
  nextStep: Symbols,
) {
  const winnerSymbol =
    nextStep === gameState.currentStep
      ? gameState.currentStep
      : winnerSequence
        ? gameState.cells[winnerSequence[0]]
        : null;

  return winnerSymbol;
}
