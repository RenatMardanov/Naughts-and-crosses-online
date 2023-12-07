// import { StaticImageData } from "next/image";
// import { Symbols } from "../helpers/constants";
// import { Profile } from "../profile";
// import { GameSymbol } from "../game-new/game-symbol";
// import clsx from "clsx";
// import { useEffect, useState } from "react";

// interface PlayerInfoProps {
//   playerInfo: {
//     name: string;
//     rating: number;
//     avatar: StaticImageData;
//     symbol: Symbols;
//   };

//   isRight: boolean;
//   isTimerRunning: boolean;
//   onTimeOver: () => void;
// }

// export function PlayerInfo({
//   playerInfo,
//   isRight,
//   isTimerRunning,
//   onTimeOver,
// }: PlayerInfoProps) {
//   const [seconds, setSeconds] = useState(15);

//   useEffect(() => {
//     if (isTimerRunning) {
//       const timerInterval = setInterval(() => {
//         setSeconds((s) => Math.max(s - 1, 0));
//       }, 1000);
//       return () => {
//         clearInterval(timerInterval);
//         setSeconds(15);
//       };
//     }
//   }, [isTimerRunning]);

//   useEffect(() => {
//     if (seconds === 0) {
//       onTimeOver();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [seconds]);

//   return (
//     <div className="flex items-center gap-3">
//       <div className={clsx("relative", isRight && "order-3")}>
//         <Profile
//           avatar={playerInfo.avatar}
//           name={playerInfo.name}
//           rating={playerInfo.rating}
//           className="w-44"
//         />
//         <div className="w-5 h-5 rounded-full bg-white absolute -top-1 -left-1 shadow flex justify-center items-center">
//           <GameSymbol symbol={playerInfo.symbol} className="w-4 h-4" />
//         </div>
//       </div>
//       <div
//         className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")}
//       ></div>
//       <div
//         className={clsx(
//           "text-lg font-semibold w-14",
//           isRight && "order-1",
//           isTimerRunning ? "text-slate-900" : "text-slate-400",
//           isDanger && "text-orange-600",
//         )}
//       >
//         {secondString}:{minuteString}
//       </div>
//     </div>
//   );
// }
