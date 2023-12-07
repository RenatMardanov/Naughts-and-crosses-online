import { ReactNode } from "react";
import { useGameState } from "../../../hooks";
import { UiButton } from "../../uikit/ui-button";
import { UiModal } from "../../uikit/ui-modal/ui-modal";

interface GameModalFrameProps {
  winnerName: string | undefined;
  players: ReactNode;
}

export function GameModalFrame({ winnerName, players }: GameModalFrameProps) {
  return (
    <UiModal
      width="md"
      className=""
      isOpen={!!winnerName}
      onClose={() => {
        console.log("close");
      }}
    >
      <UiModal.Header className="">Игра завершена</UiModal.Header>
      <UiModal.Body className="">
        <div className="text-sm">
          Победитель: <span className="text-teal-600">{winnerName}</span>
        </div>
        <div className={"mt-2 grid grid-cols-2 justify-between gap-3"}>
          {players}
        </div>
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
  );
}
