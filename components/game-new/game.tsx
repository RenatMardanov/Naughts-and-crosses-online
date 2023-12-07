import { PLAYERS } from "../helpers/constants";
import { BackLink } from "./ui/backLink";
import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";
import { GameTitle } from "./ui/game-title";
import { PlayerInfo } from "./ui/player-info";

export function Game() {
  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        gameInfo={
          <GameInfo
            playersCount={2}
            timeMode="1 мин. на ход"
            isRankingGame={true}
          />
        }
        gameTitle={<GameTitle />}
        playersList={PLAYERS.map((player, index) => (
          <PlayerInfo
            key={player.id}
            seconds={60}
            isRight={index % 2 === 1}
            avatar={player.avatar}
            rating={player.rating}
            name={player.name}
            symbol={player.symbol}
            isTimerRunning={true}
          />
        ))}
      />
    </>
  );
}
