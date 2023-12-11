import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import avatarSrc from "../game/ui/images/avatar-men-1.png";

interface ProfileProps {
  className: string;
  name: string;
  rating: number;
  avatar?: StaticImageData;
}

export function Profile({
  className,
  name,
  rating,
  avatar = avatarSrc,
}: ProfileProps) {
  return (
    <div
      className={clsx(
        className,
        "flex items-center gap-2 text-start text-teal-600",
      )}
    >
      <Image src={avatar} alt="avatar" width={48} height={48} />
      <div className="overflow-hidden">
        <div className=" text-lg leading-tight truncate ">{name}</div>
        <div className="text-slate-400 text-xs leading-tight">
          Рейтинг: {rating}
        </div>
      </div>
    </div>
  );
}
