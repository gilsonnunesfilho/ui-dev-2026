import { Slot } from "radix-ui";
import type { SlotComponentProps } from "@/components/layout/types";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"div"> & SlotComponentProps;

/**
 * This project discourages the use of margins for layout.
 * Instead, we use the `gap` utility to add space between elements.
 *
 * The VStack component is a wrapper component for applying vertical
 * spacing between its children.
 *
 * By default it uses a 10px gap between the children. You can change
 * this by passing a custom className.
 *
 * @example
 * ```tsx
 * <VStack className="gap-10"> // <-- change the gap
 *   <Button>Button 1</Button>
 *   <Button>Button 2</Button>
 *   <Button>Button 3</Button>
 * </VStack>
 * ```
 */
function VStack({ asChild, className, ...props }: Props) {
  const Component = asChild ? Slot.Root : "div";
  return (
    <Component
      className={cn("flex flex-col justify-start gap-2.5", className)}
      {...props}
    />
  );
}

export { VStack };
