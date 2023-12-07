import { useGameState } from "../../../hooks";
import { UiButton } from "../../uikit/ui-button";
import { UiModal } from "../../uikit/ui-modal/ui-modal";

export function GameModalFrame() {
  const { winnerSymbol } = useGameState({ playersCount: 2 });
  return (
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
  );
}
