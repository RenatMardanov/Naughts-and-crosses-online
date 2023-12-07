import Link from "next/link";
import { ArrowLeftIcon } from "../game-new/ui/icons/arrow-left-icon";
import { StarIcon } from "../game-new/ui/icons/star-icon";
import { UserIcon } from "../game-new/ui/icons/user-icon";
import { TimerIcon } from "../game-new/ui/icons/timer-icon";

interface GameTitleProps {
  playersCount: number;
}

export function GameTitle({ playersCount }: GameTitleProps) {
  return (
    <div className="pl-2">
      <Link
        href="#"
        className="flex items-center gap-2 text-xs text-teal-600 leading-tight -mb-0.5"
      >
        <ArrowLeftIcon /> На главную
      </Link>
      <h1 className="text-4xl leading-tight">Крестики нолики</h1>
      <div className="flex items-center gap-3 text-xs text-slate-400">
        <StarIcon />
        <div className="flex items-center gap-1">
          <UserIcon /> {playersCount}
        </div>
        <div className="flex items-center gap-1">
          <TimerIcon /> 1 мин на ход
        </div>
      </div>
    </div>
  );
}
