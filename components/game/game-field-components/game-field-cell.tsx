import clsx from "clsx";
import { ReactNode } from "react";
interface GameFieldCellProps {
  onClick: () => void;
  children: ReactNode;
  isWinner: boolean | undefined;
}

export function GameFieldCell({
  onClick,
  children,
  isWinner,
}: GameFieldCellProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "border border-slate-200 -ml-px -mt-px flex justify-center items-center",
        isWinner && "bg-orange-600/10",
      )}
    >
      {children}
    </button>
  );
}
