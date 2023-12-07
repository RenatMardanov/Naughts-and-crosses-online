// import { useEffect, useState } from "react";
// import PlayerAvatar1 from "./images/avatar-girl-1.png";
// import PlayerAvatar2 from "./images/avatar-girl-2.png";
// import PlayerAvatar3 from "./images/avatar-men-1.png";
// import PlayerAvatar4 from "./images/avatar-men-2.png";
// import { Symbols } from "../components/helpers/constants";

// export function usePlayers() {
//   const [players, setPlayers] = useState([
//     {
//       id: 1,
//       name: "Renat",
//       rating: 1111,
//       avatar: PlayerAvatar1,
//       symbol: Symbols.CROSS,
//     },
//     {
//       id: 2,
//       name: "Sofiaaaaaaaaaaa",
//       rating: 850,
//       avatar: PlayerAvatar2,
//       symbol: Symbols.ZERO,
//     },
//     {
//       id: 3,
//       name: "Maxim",
//       rating: 1400,
//       avatar: PlayerAvatar3,
//       symbol: Symbols.TRIANGLE,
//     },
//     {
//       id: 4,
//       name: "Roma",
//       rating: 1130,
//       avatar: PlayerAvatar4,
//       symbol: Symbols.SQUARE,
//     },
//   ]);

//   const [seconds, setSeconds] = useState(15);

//   const secondString = Math.floor(seconds / 60)
//     .toString()
//     .padStart(2, "0");
//   const minuteString = Math.floor(seconds % 60)
//     .toString()
//     .padStart(2, "0");

//   const isDanger = seconds <= 10;

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

//   return { players };
// }
