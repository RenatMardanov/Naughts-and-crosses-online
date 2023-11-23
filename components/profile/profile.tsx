import Image from "next/image";
import avatar from "./avatar.png";
import clsx from "clsx";

interface ProfileProps {
  className: string;
}

export function Profile({ className }: ProfileProps) {
  return (
    <div
      className={clsx(
        className,
        "flex items-center gap-2 text-start text-teal-600",
      )}
    >
      <Image src={avatar} alt="avatar" unoptimized width={48} height={48} />
      <div>
        <div className=" text-lg leading-tight">Mardanov</div>
        <div className="text-slate-400 text-xs leading-tight">
          Рейтинг: 1234
        </div>
      </div>
    </div>
  );
}
