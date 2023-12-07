import { GameSymbol } from "../game-new/game-symbol";
import { Symbols } from "../helpers/constants";
import {
  GameFieldCell,
  GameFieldGrid,
  GameFieldLayout,
  GameFieldPlayerInfo,
} from "./game-field-components";

interface GameFieldProps {
  className: string;
  gameState: {
    cells: any[];
    currentStep: Symbols;
  };
  winnerSymbol: Symbols | undefined | null;
  handleCellClick: (index: number) => void;
  nextStep: Symbols;
  winnerSequence: number[] | undefined;
}

export function GameField({
  className,
  gameState,
  handleCellClick,
  nextStep,
  winnerSequence,
  winnerSymbol,
}: GameFieldProps) {
  return (
    <GameFieldLayout className={className}>
      <GameFieldPlayerInfo
        currentStep={gameState.currentStep}
        nextStep={nextStep}
      />
      <GameFieldGrid>
        {gameState.cells.map((symbol, index) => (
          <GameFieldCell
            disabled={!!winnerSymbol}
            onClick={() => handleCellClick(index)}
            key={index}
            isWinner={winnerSequence?.includes(index)}
          >
            {symbol && <GameSymbol className="w-5 h-5" symbol={symbol} />}
          </GameFieldCell>
        ))}
      </GameFieldGrid>
    </GameFieldLayout>
  );
}
