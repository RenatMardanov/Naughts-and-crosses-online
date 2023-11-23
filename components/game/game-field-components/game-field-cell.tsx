import { ReactNode } from "react";
interface GameFieldCellProps {
  key: number;
  onClick: () => void;
  children: ReactNode;
}

export function GameFieldCell({ key, onClick, children }: GameFieldCellProps) {
  return (
    <button
      onClick={onClick}
      key={key}
      className="border border-slate-200 -ml-px -mt-px flex justify-center items-center"
    >
      {children}
    </button>
  );
}
