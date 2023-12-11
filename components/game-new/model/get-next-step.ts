import { STEP_ORDER, Symbols } from "../../helpers/constants";
import { GameState } from "../../helpers/interfaces";

export function getNextStep(gameState: GameState) {
  const slicedStepOrder = STEP_ORDER.slice(0, gameState.playersCount).filter(
    (symbol) => !gameState.playersTimerOver?.includes(symbol),
  );
  const nextMoveIndex = slicedStepOrder.indexOf(gameState.currentStep) + 1;
  return slicedStepOrder[nextMoveIndex] ?? slicedStepOrder[0];
}
