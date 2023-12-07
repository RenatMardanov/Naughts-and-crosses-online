import { ReactElement, ReactNode } from "react";

interface GameLayoutProps {
  backLink: ReactElement;
  gameTitle: ReactElement;
  gameInfo: ReactNode;
  playersList: ReactNode;
  gameMoveInfo: ReactNode;
  actions: ReactNode;
  gameCells: ReactNode;
}

export function GameLayout({
  backLink,
  gameTitle,
  gameInfo,
  playersList,
  gameMoveInfo,
  actions,
  gameCells,
}: GameLayoutProps) {
  return (
    <div className="pb-10">
      <div className="pl-2">
        {backLink}
        {gameTitle}
        {gameInfo}
      </div>
      <div
        className={
          "mt-4 bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 justify-between gap-3"
        }
      >
        {playersList}
      </div>
      <div className={"mt-6 bg-white rounded-2xl shadow-md px-8 pt-5 pb-7"}>
        <div className="flex gap-3 items-center">
          <div className="mr-auto">{gameMoveInfo}</div>
          {actions}
        </div>
        <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pt-px mt-3 pl-px">
          {gameCells}
        </div>
      </div>
    </div>
  );
}
