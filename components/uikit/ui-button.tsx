import clsx from "clsx";

interface UiButtonProps {
  children: string;
  className: string;
  size: "md" | "lg";
  variant: "primary" | "outline";
}

export function UiButton({
  children,
  className,
  size,
  variant,
}: UiButtonProps) {
  const buttonClassName = clsx(
    "transition-colors leading-tight",
    className,
    {
      md: "rounded px-6 py-2 text-sm",
      lg: "text-2xl px-5 py-2 rounded-lg ",
    }[size],
    {
      primary: "bg-teal-600 text-white hover:bg-teal-500",
      outline: "border border-teal-600 text-teal-600 hover:bg-teal-50",
    }[variant],
  );

  return <button className={buttonClassName}>{children}</button>;
}
