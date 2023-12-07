import Image from "next/image";
import logo from "./logo.svg";
import { Profile } from "../profile";
import { ArrowDownIcon } from "../game-new/ui/icons/arrow-down-icon";
import { UiButton } from "../uikit/ui-button";

export function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <Image src={logo} alt="logo" />
      <div className="w-px h-8 bg-slate-200 mx-6" />
      <UiButton size="lg" variant="primary" className="w-44">
        Играть
      </UiButton>
      <button className="ml-auto flex items-center gap-2 text-start text-teal-600">
        <Profile name="Renatka" rating={1111} className="" />
        <ArrowDownIcon />
      </button>
    </header>
  );
}
