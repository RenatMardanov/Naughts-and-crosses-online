import { Symbols } from "../../helpers/constants";
import { GameSymbol } from "../game-symbol";

interface GameMoveInfo {
  currentStep: Symbols;
  nextStep: Symbols;
}

export function GameMoveInfo({ currentStep, nextStep }: GameMoveInfo) {
  return (
    <>
      <div className="flex items-center gap-1 text-xl font-semibold leading-tight">
        Ход: <GameSymbol symbol={currentStep} className="w-5 h-5" />
      </div>
      <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
        Следующий: <GameSymbol symbol={nextStep} className="w-3 h-3" />
      </div>
    </>
  );
}
