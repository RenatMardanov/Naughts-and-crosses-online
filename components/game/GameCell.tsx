import { GameSymbol } from "./GameSymbol";
import { clsx } from "clsx";
import { Symbols } from "../helpers/symbol";

interface GameCellProps {
  onClick: () => void;
  symbol: Symbols | null;
  isWinner: boolean | undefined;
}

export function GameCell({ onClick, symbol, isWinner }: GameCellProps) {
  return (
    <button
      className={clsx(
        "border border-gray-400 flex items-center justify-center",
        isWinner && "bg-red-200",
      )}
      onClick={onClick}
    >
      {symbol && <GameSymbol symbol={symbol} />}
    </button>
  );
}
