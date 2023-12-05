import clsx from "clsx";
import { PlayerInfo } from "./player-info";
import { Symbols } from "../helpers/constants";
import PlayerAvatar1 from "./images/avatar-girl-1.png";
import PlayerAvatar2 from "./images/avatar-girl-2.png";
import PlayerAvatar3 from "./images/avatar-men-1.png";
import PlayerAvatar4 from "./images/avatar-men-2.png";

interface GameInfoProps {
  className: string;
  playersCount: number;
  currentStep: Symbols;
  isWinner: boolean;
}

const players = [
  {
    id: 1,
    name: "Renat",
    rating: 1111,
    avatar: PlayerAvatar1,
    symbol: Symbols.CROSS,
  },
  {
    id: 2,
    name: "Sofiaaaaaaaaaaa",
    rating: 850,
    avatar: PlayerAvatar2,
    symbol: Symbols.ZERO,
  },
  {
    id: 3,
    name: "Maxim",
    rating: 1400,
    avatar: PlayerAvatar3,
    symbol: Symbols.TRIANGLE,
  },
  {
    id: 4,
    name: "Roma",
    rating: 1130,
    avatar: PlayerAvatar4,
    symbol: Symbols.SQUARE,
  },
];

export function GameInfo({
  className,
  playersCount,
  currentStep,
  isWinner,
}: GameInfoProps) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 justify-between gap-3",
      )}
    >
      {players.slice(0, playersCount).map((player, index) => {
        return (
          <PlayerInfo
            key={player.id}
            playerInfo={player}
            isRight={index % 2 === 1}
            isTimerRunning={player.symbol === currentStep && !isWinner}
          />
        );
      })}
    </div>
  );
}
