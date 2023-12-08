import { getNextStep } from "../components/game-new/model/get-next-step";
import { Symbols } from "../components/helpers/constants";

type ReduserState = {
  cells: (Symbols | null)[];
  currentStep: Symbols;
  playersCount: number;
  playersTimerOver: [];
};
type CellClickAction = {
  type: typeof GAME_STATE_ACTIONS.CELL_CLICK;
  index: number;
};

export type GameStateAction = { type: string; payload?: any; index?: number };
export const GAME_STATE_ACTIONS = {
  CELL_CLICK: "cell-click",
};

export function gameStateReducer(state: ReduserState, action: CellClickAction) {
  const { index } = action;
  switch (action.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK:
      if (state.cells[index]) {
        return state;
      }

      return {
        ...state,
        currentStep: getNextStep(
          state.currentStep,
          state.playersCount,
          state.playersTimerOver,
        ),

        cells: state.cells.map((cell, i) =>
          i === index ? state.currentStep : cell,
        ),
      };

    default: {
      return state;
    }
  }
}

export const initGameState = ({ playersCount }: ReduserState) => {
  return {
    cells: new Array(19 * 19).fill(null),
    currentStep: Symbols.CROSS,
    playersCount,
  };
};
