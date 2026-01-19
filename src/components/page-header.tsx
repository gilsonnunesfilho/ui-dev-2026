import { Slot } from "radix-ui";
import { cn } from "@/lib/utils";
import { VStack } from "./layout";

type PageHeaderProps = React.ComponentProps<"hgroup"> & {
  asChild?: boolean;
};

export function PageHeader({ asChild, className, ...props }: PageHeaderProps) {
  const Comp = asChild ? Slot.Root : "hgroup";
  return (
    <VStack asChild>
      <Comp
        className={cn("py-5 border-b border-fill-secondary", className)}
        {...props}
      />
    </VStack>
  );
}
