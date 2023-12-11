import PlayerAvatar2 from "./../game/ui/images/avatar-girl-2.png";
import PlayerAvatar1 from "./../game/ui/images/avatar-girl-1.png";
import PlayerAvatar3 from "./../game/ui/images/avatar-men-1.png";
import PlayerAvatar4 from "./../game/ui/images/avatar-men-2.png";

export enum Symbols {
  CROSS = "cross",
  ZERO = "zero",
  TRIANGLE = "triangle",
  SQUARE = "square",
}

export const STEP_ORDER = [
  Symbols.CROSS,
  Symbols.ZERO,
  Symbols.TRIANGLE,
  Symbols.SQUARE,
];

export const PLAYERS = [
  {
    id: 1,
    name: "Player 1",
    rating: 1111,
    avatar: PlayerAvatar1,
    symbol: Symbols.CROSS,
  },
  {
    id: 2,
    name: "Player 2",
    rating: 850,
    avatar: PlayerAvatar2,
    symbol: Symbols.ZERO,
  },
  {
    id: 3,
    name: "Player 3",
    rating: 1400,
    avatar: PlayerAvatar3,
    symbol: Symbols.TRIANGLE,
  },
  {
    id: 4,
    name: "Player 4",
    rating: 1130,
    avatar: PlayerAvatar4,
    symbol: Symbols.SQUARE,
  },
];
