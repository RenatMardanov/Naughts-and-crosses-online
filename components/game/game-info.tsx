import { Profile } from "../profile";
import clsx from "clsx";
import { CrossIcon } from "./icons/cross-icon";
import { ZeroIcon } from "./icons/zero-icon";

interface GameInfoProps {
  className: string;
}

export function GameInfo({ className }: GameInfoProps) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 py-4 flex justify-between",
      )}
    >
      <div className="flex items-center gap-3">
        <div className="relative">
          <Profile className="w-44" />
          <div className="w-5 h-5 rounded-full bg-white absolute -top-1 -left-1 shadow flex justify-center items-center">
            <CrossIcon />
          </div>
        </div>
        <div className="h-6 w-px bg-slate-200"></div>
        <div className="text-slate-900 text-lg font-semibold">01:08</div>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-orange-600 text-lg font-semibold">00:08</div>
        <div className="h-6 w-px bg-slate-200"></div>
        <div className="relative">
          <Profile className="w-44" />
          <div className="w-5 h-5 rounded-full bg-white absolute -top-1 -left-1 shadow flex justify-center items-center">
            <ZeroIcon className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
