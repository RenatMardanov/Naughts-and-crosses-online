import { GameState } from "./../components/helpers/interfaces";
import { getNextStep } from "../components/game/model/get-next-step";
import { STEP_ORDER, Symbols } from "../components/helpers/constants";

type CellClickAction = {
  type: typeof GAME_STATE_ACTIONS.CELL_CLICK | typeof GAME_STATE_ACTIONS.TICK;
  index?: number;
  now: number;
};

export type GameStateAction = { type: string; payload?: any; index?: number };
export enum GAME_STATE_ACTIONS {
  CELL_CLICK = "cell-click",
  TICK = "tick",
}

export function gameStateReducer(state: GameState, action: CellClickAction) {
  switch (action.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK: {
      const { index, now } = action;
      if (state.cells[index!]) {
        return state;
      }

      return {
        ...state,
        timers: updateTimers(state, now),
        currentStep: getNextStep(state),
        currentStepStart: now,
        cells: updateCell(state, index!),
      };
    }

    case GAME_STATE_ACTIONS.TICK:
      const { now } = action;
      if (!isTimeOver(state, now)) {
        return state;
      }

      return {
        ...state,
        timers: updateTimers(state, now),
        currentStep: getNextStep(state),
        currentStepStart: now,
      };

    default: {
      return state;
    }
  }
}

export const initGameState = ({
  playersCount,
  currentStepStart,
  defaultTimer,
}: {
  playersCount: number;
  defaultTimer: number;
  currentStepStart: number;
}): GameState => {
  return {
    cells: new Array(19 * 19).fill(null),
    currentStep: Symbols.CROSS,
    currentStepStart,
    playersCount,
    timers: STEP_ORDER.reduce(
      (timers, symbol, index) => {
        if (index < playersCount) {
          timers[symbol] = defaultTimer;
        }
        return timers;
      },
      {} as { [key in Symbols]: number },
    ),
  };
};

function updateTimers(gameState: GameState, now: number) {
  const diff = now - gameState.currentStepStart;
  const timer = gameState.timers[gameState.currentStep];
  return {
    ...gameState.timers,
    [gameState.currentStep]: timer - diff,
  };
}
function updateCell(gameState: GameState, index: number) {
  return gameState.cells.map((cell, i: number) =>
    i === index ? gameState.currentStep : cell,
  );
}

function isTimeOver(gameState: GameState, now: number): boolean {
  const timer = updateTimers(gameState, now)[gameState.currentStep];
  return timer <= 0;
}
