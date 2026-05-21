import { cn } from "@/lib/utils";

export function Placeholder({
  className,
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={cn("rounded-2xl bg-[#F0F0F0]", className)}
      aria-hidden={!label}
      aria-label={label}
    />
  );
}
