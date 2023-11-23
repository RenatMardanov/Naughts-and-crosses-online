import { GameFieldLayout } from "./game-field-components/game-field-layout";
import { GameFieldPlayerInfo } from "./game-field-components/game-field-player-info";
import { GameFieldCell } from "./game-field-components/game-field-cell";
import { GameFieldGrid } from "./game-field-components/game-field-grid";
import { GameSymbol } from "./game-field-components/game-symbol";
import { useGameState } from "../../hooks/useGameState";

interface GameFieldProps {
  className: string;
}

export function GameField({ className }: GameFieldProps) {
  const { gameState, handleCellClick, nextStep } = useGameState();
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
