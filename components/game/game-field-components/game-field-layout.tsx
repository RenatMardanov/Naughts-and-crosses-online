import clsx from "clsx";
import { ReactNode } from "react";

interface GameFieldLayoutProps {
  className: string;
  children: ReactNode;
}

export function GameFieldLayout({ children, className }: GameFieldLayoutProps) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7",
      )}
    >
      {children}
    </div>
  );
}
