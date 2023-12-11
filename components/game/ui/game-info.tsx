import { StarIcon } from "./icons/star-icon";
import { TimerIcon } from "./icons/timer-icon";
import { UserIcon } from "./icons/user-icon";
interface GameInfoProps {
  playersCount: number;
  isRankingGame: boolean;
  timeMode: string;
}

export function GameInfo({
  playersCount,
  isRankingGame,
  timeMode,
}: GameInfoProps) {
  return (
    <div className="flex items-center gap-3 text-xs text-slate-400">
      {isRankingGame && <StarIcon />}
      <div className="flex items-center gap-1">
        <UserIcon /> {playersCount}
      </div>
      <div className="flex items-center gap-1">
        <TimerIcon /> {timeMode}
      </div>
    </div>
  );
}
