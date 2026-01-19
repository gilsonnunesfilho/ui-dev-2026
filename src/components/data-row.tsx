import { VStack } from "@/components/layout";

type DataRowProps = {
  icon: React.ElementType;
  label: string;
  value: string;
  animationDelay: string;
};

export function DataRow({
  icon: Icon,
  label,
  value,
  animationDelay,
}: DataRowProps) {
  return (
    <div
      className="flex items-start gap-2.5 pb-2.5 animate-fade-slide-in"
      style={{ animationDelay }}
    >
      <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-fill-secondary">
        <Icon className="h-5 w-5 text-label-secondary" />
      </div>
      <VStack className="gap-0">
        <span className="text-xs truncate font-medium text-label-secondary uppercase tracking-wide">
          {label}
        </span>
        <span className="text-sm font-medium text-foreground">{value}</span>
      </VStack>
    </div>
  );
}
