import { useState } from "react";
import { useGameState } from "../../hooks";
import { PLAYERS } from "../helpers/constants";
import { BackLink } from "./ui/backLink";
import { GameCell } from "./ui/game-cell";
import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";
import { GameMoveInfo } from "./ui/game-move-info";
import { GameTitle } from "./ui/game-title";
import { PlayerInfo } from "./ui/player-info";
import { GameModalFrame } from "./ui/game-modal-frame";

export function Game() {
  const playersCount: number = 2;

  const {
    gameState,
    handleCellClick,
    nextStep,
    winnerSequence,
    handlePlayerTimeOver,
    winnerSymbol,
  } = useGameState({ playersCount });

  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol);
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
        playersList={PLAYERS.slice(0, playersCount).map((player, index) => (
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
              disabled={!!winnerSymbol}
              isWinner={winnerSequence?.includes(index)}
              onClick={() => handleCellClick(index)}
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
            seconds={60}
            isRight={index % 2 === 1}
            avatar={player.avatar}
            rating={player.rating}
            name={player.name}
            symbol={player.symbol}
            isTimerRunning={true}
          />
        ))}
        winnerName={winnerPlayer?.name}
      />
    </>
  );
}
