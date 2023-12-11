import { Symbols } from "./constants";

export interface IconsClassName {
  className: string;
}

export interface UseGameStateProps {
  playersCount: number;
}

export interface GameState {
  cells: (Symbols | null)[];
  currentStep: Symbols;
  playersCount: number;
  currentStepStart: number;
  timers: {
    [key in Symbols]: number;
  };
}
