import clsx from "clsx";
import { Symbols } from "../../helpers/constants";
import { GameSymbol } from "../game-symbol";
import { memo } from "react";

interface GameCellProps {
  disabled: boolean;
  onClick: (index: number) => void;
  isWinner: boolean | undefined;
  symbol: Symbols | null;
  index: number;
}

export const GameCell = memo(function GameCell({
  disabled,
  onClick,
  isWinner,
  symbol,
  index,
}: GameCellProps) {
  return (
    <button
      disabled={disabled}
      onClick={() => onClick(index)}
      className={clsx(
        "border border-slate-200 -ml-px -mt-px flex justify-center items-center",
        isWinner && "bg-orange-600/10",
      )}
    >
      {symbol && <GameSymbol className="w-5 h-5" symbol={symbol} />}
    </button>
  );
});
