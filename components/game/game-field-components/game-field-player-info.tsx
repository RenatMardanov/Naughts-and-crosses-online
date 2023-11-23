import { UiButton } from "../../uikit/ui-button";
import { GameSymbol } from "../game-symbol";
import { Symbols } from "../../helpers/constants";

interface GameFieldPlayerInfoProps {
  currentStep: Symbols;
  nextStep: Symbols;
}

export function GameFieldPlayerInfo({
  currentStep,
  nextStep,
}: GameFieldPlayerInfoProps) {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <div className="flex items-center gap-1 text-xl font-semibold leading-tight">
          Ход: <GameSymbol symbol={currentStep} className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
          Следующий: <GameSymbol symbol={nextStep} className="w-3 h-3" />
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <UiButton
          size="md"
          variant="primary"
          className="w-24 flex justify-center items-center"
        >
          Ничья
        </UiButton>
        <UiButton
          size="md"
          variant="outline"
          className="w-28 flex justify-center items-center"
        >
          Сдаться
        </UiButton>
      </div>
    </div>
  );
}
