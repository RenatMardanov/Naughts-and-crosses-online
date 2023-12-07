import { ReactElement, ReactNode, useState } from "react";
import { GameField, GameInfo, GameTitle } from "../components/game";
import { Header } from "../components/header";
import { useGameState } from "../hooks";
import { GameSymbol } from "../components/game/game-symbol";
import { UiModal } from "../components/uikit/ui-modal/ui-modal";
import { UiButton } from "../components/uikit/ui-button";

export default function HomePages() {
  const [playersCount, setPlayersCount] = useState(2);

  const {
    gameState,
    handleCellClick,
    nextStep,
    winnerSequence,
    handlePlayerTimeOver,
    winnerSymbol,
  } = useGameState({
    playersCount,
  });
  return (
    <HomePageLayout header={<Header />}>
      <GameTitle playersCount={playersCount} />
      <GameInfo
        playersCount={playersCount}
        className="mt-4"
        currentStep={gameState.currentStep}
        isWinner={!!winnerSymbol}
        handlePlayerTimeOver={() => handlePlayerTimeOver(gameState.currentStep)}
      />

      {winnerSymbol && (
        <div className="my-4 flex items-center justify-center">
          {" "}
          Победитель{"   "}
          <GameSymbol symbol={winnerSymbol} className="" />
        </div>
      )}

      <UiModal
        width="md"
        className=""
        isOpen={!!winnerSymbol}
        onClose={() => {
          console.log("close");
        }}
      >
        <UiModal.Header className="">Игра завершена</UiModal.Header>
        <UiModal.Body className="">
          <div className="text-sm">
            Победитель: <span className="text-teal-600">Renatka</span>
          </div>
          <div className="text-3xl">Обновляй, нихера не готово</div>
        </UiModal.Body>
        <UiModal.Footer className="">
          <UiButton className="" variant="outline" size="md">
            Вернуться
          </UiButton>
          <UiButton className="" variant="primary" size="md">
            Играть снова
          </UiButton>
        </UiModal.Footer>
      </UiModal>

      <GameField
        gameState={gameState}
        handleCellClick={handleCellClick}
        nextStep={nextStep}
        winnerSequence={winnerSequence}
        winnerSymbol={winnerSymbol}
        className="mt-6"
      />
    </HomePageLayout>
  );
}

interface HomePageLayoutProps {
  header: ReactElement;
  children: ReactNode;
}

function HomePageLayout({ header, children }: HomePageLayoutProps) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {header}
      <main className="pt-6 mx-auto w-max">{children}</main>
    </div>
  );
}
