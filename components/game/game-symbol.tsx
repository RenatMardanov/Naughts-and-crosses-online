import { Symbols } from "../helpers/constants";
import { CrossIcon } from "./ui/icons/cross-icon";
import { SquareIcon } from "./ui/icons/square-icon";
import { TrangleIcon } from "./ui/icons/triangle-icon";
import { ZeroIcon } from "./ui/icons/zero-icon";

interface GameSymbolProps {
  symbol: Symbols;
  className: string;
}

export function GameSymbol({ symbol, className }: GameSymbolProps) {
  const Icon =
    {
      [Symbols.CROSS]: CrossIcon,
      [Symbols.ZERO]: ZeroIcon,
      [Symbols.TRIANGLE]: TrangleIcon,
      [Symbols.SQUARE]: SquareIcon,
    }[symbol] ?? CrossIcon;

  return <Icon className={className} />;
}
