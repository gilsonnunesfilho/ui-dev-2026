import { Slot } from "radix-ui";
import type { SlotComponentProps } from "@/components/layout/types";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"div"> & SlotComponentProps;

/**
 * Container is a wrapper component that provides a consistent way to apply
 * the `w-full` and `max-w-5xl` classes to a component.
 *
 * It is used to wrap components that should be displayed in a container
 * layout, such as cards or modals.
 */
function Container({ asChild, className, ...props }: Props) {
  const Component = asChild ? Slot.Root : "div";
  return (
    <Component
      className={cn("w-full max-w-5xl mx-auto px-5", className)}
      {...props}
    />
  );
}

export { Container };
