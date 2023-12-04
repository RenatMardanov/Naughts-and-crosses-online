import { GameFieldLayout } from "./game-field-components/game-field-layout";
import { GameFieldPlayerInfo } from "./game-field-components/game-field-player-info";
import { GameFieldCell } from "./game-field-components/game-field-cell";
import { GameFieldGrid } from "./game-field-components/game-field-grid";
import { GameSymbol } from "./game-symbol";
import { useGameState } from "../../hooks/useGameState";

interface GameFieldProps {
  className: string;
  playersCount: number;
}

export function GameField({ className, playersCount }: GameFieldProps) {
  const { gameState, handleCellClick, nextStep } = useGameState({
    playersCount,
  });
  return (
    <GameFieldLayout className={className}>
      <GameFieldPlayerInfo
        currentStep={gameState.currentStep}
        nextStep={nextStep}
      />
      <GameFieldGrid>
        {gameState.cells.map((symbol, index) => (
          <GameFieldCell onClick={() => handleCellClick(index)} key={index}>
            {symbol && <GameSymbol className="w-5 h-5" symbol={symbol} />}
          </GameFieldCell>
        ))}
      </GameFieldGrid>
    </GameFieldLayout>
  );
}
