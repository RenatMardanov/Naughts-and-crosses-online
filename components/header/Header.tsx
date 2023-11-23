import Image from "next/image";
import logo from "./logo.svg";
import { Profile } from "../profile";
import { ArrowDownIcon } from "../game/icons/arrow-down-icon";

export function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <Image src={logo} alt="logo" />
      <div className="w-px h-8 bg-slate-200 mx-6" />
      <button className="px-5 py-2 rounded-lg shadow shadow-gray-400 bg-teal-600 text-2xl leading-tight text-white w-44 hover:bg-teal-500 hover:transition-colors">
        Играть
      </button>
      <button className="ml-auto flex items-center gap-2 text-start text-teal-600">
        <Profile className="" />
        <ArrowDownIcon />
      </button>
    </header>
  );
}
