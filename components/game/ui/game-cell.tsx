import clsx from "clsx";
import { Symbols } from "../../helpers/constants";
import { GameSymbol } from "../game-symbol";

interface GameCellProps {
  disabled: boolean;
  onClick: () => void;
  isWinner: boolean | undefined;
  symbol: Symbols | null;
}

export function GameCell({
  disabled,
  onClick,
  isWinner,
  symbol,
}: GameCellProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "border border-slate-200 -ml-px -mt-px flex justify-center items-center",
        isWinner && "bg-orange-600/10",
      )}
    >
      {symbol && <GameSymbol className="w-5 h-5" symbol={symbol} />}
    </button>
  );
}
