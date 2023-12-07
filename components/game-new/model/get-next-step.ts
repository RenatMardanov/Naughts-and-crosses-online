import { STEP_ORDER, Symbols } from "../../helpers/constants";

export function getNextStep(
  currentStep: Symbols,
  playersCount: number,
  playersTimerOver: Symbols[],
) {
  const slicedStepOrder = STEP_ORDER.slice(0, playersCount).filter(
    (symbol) => !playersTimerOver?.includes(symbol),
  );
  const nextMoveIndex = slicedStepOrder.indexOf(currentStep) + 1;
  return slicedStepOrder[nextMoveIndex] ?? slicedStepOrder[0];
}
