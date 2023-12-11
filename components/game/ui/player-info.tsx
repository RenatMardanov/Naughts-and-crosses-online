import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import { Symbols } from "../../helpers/constants";
import { GameSymbol } from "../game-symbol";
import { useNow } from "../lib/timers";

interface PlayerInfoProps {
  timer: number;
  timerStartAt: number | undefined;
  isRight: boolean;
  avatar: StaticImageData;
  rating: number;
  name: string;
  symbol: Symbols;
}

export function PlayerInfo({
  isRight,
  avatar,
  rating,
  name,
  timer,
  timerStartAt,
  symbol,
}: PlayerInfoProps) {
  const now = useNow(1000, !!timerStartAt);

  const milliseconds = Math.max(
    now ? timer - (now - (timerStartAt ? timerStartAt : 0)) : timer,
    0,
  );
  const seconds = Math.ceil(milliseconds / 1000);
  const secondString = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const minuteString = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");

  const isDanger = seconds <= 10;
  const getTimerColor = () => {
    if (timerStartAt) {
      return isDanger ? "text-orange-600" : "text-slate-900";
    }
    return "text-slate-200";
  };
  return (
    <div className="flex items-center gap-3">
      <div className={clsx("relative", isRight && "order-3")}>
        <div
          className={"flex items-center gap-2 text-start text-teal-600 w-44"}
        >
          <Image src={avatar} alt="avatar" width={48} height={48} />
          <div className="overflow-hidden">
            <div className=" text-lg leading-tight truncate">{name}</div>
            <div className="text-slate-400 text-xs leading-tight">
              Рейтинг: {rating}
            </div>
          </div>
        </div>
        <div className="w-5 h-5 rounded-full bg-white absolute -top-1 -left-1 shadow flex justify-center items-center">
          <GameSymbol symbol={symbol} className="w-4 h-4" />
        </div>
      </div>
      <div
        className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")}
      ></div>
      <div
        className={clsx(
          "text-lg font-semibold w-14",
          isRight && "order-1",
          getTimerColor(),
        )}
      >
        {secondString}:{minuteString}
      </div>
    </div>
  );
}
