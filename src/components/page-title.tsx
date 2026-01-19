import { Slot } from "radix-ui";
import { cn } from "@/lib/utils";

type PageTitleProps = React.ComponentProps<"h1"> & {
  asChild?: boolean;
};

export function PageTitle({ asChild, className, ...props }: PageTitleProps) {
  const Comp = asChild ? Slot.Root : "h1";
  return (
    <Comp className={cn("text-3xl font-semibold", className)} {...props} />
  );
}
