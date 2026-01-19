import { Slot } from "radix-ui";
import type { SlotComponentProps } from "@/components/layout/types";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"div"> & SlotComponentProps;

/**
 * Cluster is a wrapper component that applies the flexbox that
 * should wrap the children in a clustered layout.
 *
 * By default it uses a 10px gap between the children. You can
 * change this by passing a custom className.
 *
 * @example
 * ```tsx
 * <Cluster className="gap-2"> // <-- change the gap
 *   <Button>Button 1</Button>
 *   <Button>Button 2</Button>
 *   <Button>Button 3</Button>
 * </Cluster>
 * ```
 */
function Cluster({ asChild, className, ...props }: Props) {
  const Component = asChild ? Slot.Root : "div";
  return (
    <Component
      className={cn(
        "flex flex-wrap items-center justify-start gap-2.5",
        className,
      )}
      {...props}
    />
  );
}

export { Cluster };
