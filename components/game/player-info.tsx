import { StaticImageData } from "next/image";
import { Symbols } from "../helpers/constants";
import { Profile } from "../profile";
import { GameSymbol } from "./game-symbol";
import clsx from "clsx";

interface PlayerInfoProps {
  playerInfo: {
    name: string;
    rating: number;
    avatar: StaticImageData;
    symbol: Symbols;
  };

  isRight: boolean;
}

export function PlayerInfo({ playerInfo, isRight }: PlayerInfoProps) {
  return (
    <div className="flex items-center gap-3">
      <div className={clsx("relative", isRight && "order-3")}>
        <Profile
          avatar={playerInfo.avatar}
          name={playerInfo.name}
          rating={playerInfo.rating}
          className="w-44"
        />
        <div className="w-5 h-5 rounded-full bg-white absolute -top-1 -left-1 shadow flex justify-center items-center">
          <GameSymbol symbol={playerInfo.symbol} className="w-4 h-4" />
        </div>
      </div>
      <div
        className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")}
      ></div>
      <div
        className={clsx(
          "text-slate-900 text-lg font-semibold",
          isRight && "order-1",
        )}
      >
        01:08
      </div>
    </div>
  );
}
