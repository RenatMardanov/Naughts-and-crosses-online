import clsx from "clsx";
import { CloseModalCross } from "../../game/icons/close-modal-cross";
import { ReactNode } from "react";

interface UiModalProps {
  width: "md" | "full";
  className: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

interface UiModelComponentsProps {
  className: string;
  children: ReactNode;
}

export function UiModal({
  width = "md",
  className,
  children,
  isOpen = false,
  onClose,
}: UiModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={clsx(
        "fixed inset-0 bg-slate-900/60 backdrop-blur pt-10 pb-10 overflow-y-auto ",
        className,
      )}
    >
      <div
        className={clsx(
          "bg-white rounded-lg  mx-auto relative flex flex-col",
          {
            md: "max-w-[640px] w-full  min-h-[320px]",
            full: "mx-5",
          }[width],
        )}
      >
        <button className="flex w-8 h-8 bg-white/10 items-center justify-center absolute left-[calc(100%+12px)] rounded hover:bg-white/40 transition-colors" onClick={() => onClose()}>
          <CloseModalCross className="w-4 h-4 text-white" />
        </button>
        {children}
      </div>
    </div>
  );
}

UiModal.Header = function UiModelHeader({
  children,
  className,
}: UiModelComponentsProps) {
  return (
    <div className={clsx(className, "mx-6 pt-6 pb-4 text-2xl")}>{children}</div>
  );
};
UiModal.Body = function UiModelBody({
  children,
  className,
}: UiModelComponentsProps) {
  return <div className={clsx(className, "px-6")}>{children}</div>;
};
UiModal.Footer = function UiModelFooter({
  children,
  className,
}: UiModelComponentsProps) {
  return (
    <div className={clsx(className, "mt-auto p-6 flex gap-4 justify-end")}>
      {children}
    </div>
  );
};
