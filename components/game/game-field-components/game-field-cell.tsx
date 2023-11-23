import { ReactNode } from "react";
interface GameFieldCellProps {
  onClick: () => void;
  children: ReactNode;
}

export function GameFieldCell({ onClick, children }: GameFieldCellProps) {
  return (
    <button
      onClick={onClick}
      className="border border-slate-200 -ml-px -mt-px flex justify-center items-center"
    >
      {children}
    </button>
  );
}
