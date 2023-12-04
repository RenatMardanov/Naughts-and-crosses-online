import { StaticImageData } from "next/image";
import { Symbols } from "../helpers/constants";
import { Profile } from "../profile";
import { GameSymbol } from "./game-symbol";
import clsx from "clsx";
import { useEffect, useState } from "react";

interface PlayerInfoProps {
  playerInfo: {
    name: string;
    rating: number;
    avatar: StaticImageData;
    symbol: Symbols;
  };

  isRight: boolean;
  isTimerRunning: boolean;
}

export function PlayerInfo({
  playerInfo,
  isRight,
  isTimerRunning,
}: PlayerInfoProps) {
  const [seconds, setSeconds] = useState(15);

  const secondString = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const minuteString = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");

  const isDanger = seconds <= 10;

  useEffect(() => {
    if (isTimerRunning) {
      const timerInterval = setInterval(() => {
        setSeconds((s) => Math.max(s - 1, 0));
      }, 1000);
      return () => {
        clearInterval(timerInterval);
        setSeconds(15);
      };
    }
  }, [isTimerRunning]);

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
          "text-lg font-semibold w-14",
          isRight && "order-1",
          isDanger && "text-orange-600",
          isTimerRunning ? "text-slate-900" : "text-slate-500",
        )}
      >
        {secondString}:{minuteString}
      </div>
    </div>
  );
}
