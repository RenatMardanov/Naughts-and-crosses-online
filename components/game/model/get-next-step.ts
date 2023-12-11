import { STEP_ORDER } from "../../helpers/constants";
import { GameState } from "../../helpers/interfaces";

export function getNextStep(gameState: GameState) {
  const slicedStepOrder = STEP_ORDER.slice(0, gameState.playersCount).filter(
    (symbol) => gameState.timers[symbol] > 0,
  );
  const nextMoveIndex = slicedStepOrder.indexOf(gameState.currentStep) + 1;
  return slicedStepOrder[nextMoveIndex] ?? slicedStepOrder[0];
}
