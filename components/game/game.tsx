import { PLAYERS } from "../helpers/constants";
import { BackLink } from "./ui/backLink";
import { GameCell } from "./ui/game-cell";
import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";
import { GameMoveInfo } from "./ui/game-move-info";
import { GameTitle } from "./ui/game-title";
import { PlayerInfo } from "./ui/player-info";
import { GameModalFrame } from "./ui/game-modal-frame";
import {
  GAME_STATE_ACTIONS,
  gameStateReducer,
  initGameState,
} from "../../hooks/use-game-state-reduser";
import { useCallback, useMemo, useReducer } from "react";
import { getNextStep } from "./model/get-next-step";
import { computeWinner } from "./model/compute-winner";
import { ComputeWinnerSymbol } from "./model/compute-winner-symbol";
import { ComputePlayerTimer } from "./model/compute-player-timer";
import { useInterval } from "./lib/timers";

export function Game() {
  const playersCount: number = 2;
  const defaultTimer: number = 30000;

  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    { playersCount, defaultTimer, currentStepStart: Date.now() },
    initGameState,
  );

  const handleCellClick = useCallback((index: number) => {
    dispatch({
      type: GAME_STATE_ACTIONS.CELL_CLICK,
      index,
      now: Date.now(),
    });
  }, []);

  useInterval(
    900,
    !!gameState.currentStepStart,
    useCallback(() => {
      dispatch({
        type: GAME_STATE_ACTIONS.TICK,
        now: Date.now(),
      });
    }, []),
  );

  const nextStep = getNextStep(gameState);
  const winnerSequence = useMemo(() => computeWinner(gameState), [gameState]);
  const winnerSymbol = ComputeWinnerSymbol(gameState, winnerSequence, nextStep);
  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol);
  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        gameInfo={
          <GameInfo
            playersCount={gameState.playersCount}
            timeMode="1 мин. на ход"
            isRankingGame={true}
          />
        }
        gameTitle={<GameTitle />}
        playersList={PLAYERS.slice(0, playersCount).map((player, index) => {
          const { timer, timerStartAt } = ComputePlayerTimer(
            gameState,
            player.symbol,
          );
          return (
            <PlayerInfo
              key={player.id}
              timer={timer}
              timerStartAt={timerStartAt}
              isRight={index % 2 === 1}
              avatar={player.avatar}
              rating={player.rating}
              name={player.name}
              symbol={player.symbol}
            />
          );
        })}
        gameMoveInfo={
          <GameMoveInfo
            currentStep={gameState.currentStep}
            nextStep={nextStep}
          />
        }
        gameCells={gameState.cells.map((cell, index) => {
          return (
            <GameCell
              key={index}
              index={index}
              disabled={!!winnerSymbol}
              isWinner={winnerSequence?.includes(index)}
              onClick={handleCellClick}
              symbol={cell}
            />
          );
        })}
        actions={<div></div>}
      />
      <GameModalFrame
        players={PLAYERS.slice(0, playersCount).map((player, index) => (
          <PlayerInfo
            key={player.id}
            timer={gameState.timers[player.symbol]}
            timerStartAt={undefined}
            isRight={index % 2 === 1}
            avatar={player.avatar}
            rating={player.rating}
            name={player.name}
            symbol={player.symbol}
          />
        ))}
        winnerName={winnerPlayer?.name}
      />
    </>
  );
}
