import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function AnimatedCheckmark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center size-15",
        className,
      )}
    >
      <div className="absolute inset-0 rounded-full bg-accent/20 animate-checkmark-ring-1" />
      <div className="absolute inset-1.5 rounded-full bg-accent/30 animate-checkmark-ring-2" />
      <div className="absolute grid place-content-center inset-3 items-center justify-center rounded-full bg-accent animate-checkmark-circle">
        <Check
          className="size-5 text-accent-foreground animate-checkmark-icon"
          strokeWidth={3}
        />
      </div>
    </div>
  );
}
