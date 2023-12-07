import { ReactElement, ReactNode, useState } from "react";

interface GameLayoutProps {
  backLink: ReactElement;
  gameTitle: ReactElement;
  gameInfo: ReactNode;
  playersList: {}[];
}

export function GameLayout({ backLink, gameTitle, gameInfo }: GameLayoutProps) {
  const [playersCount, setPlayersCount] = useState(2);
  return (
    <>
      <div className="pl-2">
        {backLink}
        {gameTitle}
        {gameInfo}
      </div>
    </>
  );
}
