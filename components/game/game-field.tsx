import clsx from "clsx";
import { ZeroIcon } from "./icons/zero-icon";
import { CrossIcon } from "./icons/cross-icon";
import { UiButton } from "../uikit/ui-button";
import { SquareIcon } from "./icons/square-icon";

interface GameFieldProps {
  className: string;
}

const cells = Array(19 * 19).fill(null);

export function GameField({ className }: GameFieldProps) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7",
      )}
    >
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="flex items-center gap-1 text-xl font-semibold leading-tight">
            Ход: <ZeroIcon className="w-5 h-5" />
          </div>
          <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
            Следующий: <CrossIcon />
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <UiButton
            size="md"
            variant="primary"
            className="w-24 flex justify-center items-center"
          >
            Ничья
          </UiButton>
          <UiButton
            size="md"
            variant="outline"
            className="w-28 flex justify-center items-center"
          >
            Сдаться
          </UiButton>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pt-px mt-3 pl-px">
        {cells.map((_, index) => (
          <button
            key={index}
            className="border border-slate-200 -ml-px -mt-px flex justify-center items-center"
          ></button>
        ))}
      </div>
    </div>
  );
}
