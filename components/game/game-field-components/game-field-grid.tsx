import { ReactNode } from "react";

interface GameFieldGridProps {
  children: ReactNode;
}

export function GameFieldGrid({ children }: GameFieldGridProps) {
  return (
    <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pt-px mt-3 pl-px">
      {children}
    </div>
  );
}
