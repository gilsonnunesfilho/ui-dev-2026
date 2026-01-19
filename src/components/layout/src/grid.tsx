import { Slot } from "radix-ui";
import type { SlotComponentProps } from "@/components/layout/types";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"div"> & SlotComponentProps;

/**
 * Grid is a wrapper component that provides a consistent way to apply
 * the `grid-cols-auto` and `auto-size-3xs` classes to a component.
 *
 * This custom utilities were defined in the `globals.css` file.
 *
 * By default each child will have a width of 15rem and a gap of 2.5rem.
 * You can change this by passing a custom className.
 *
 * @example
 * ```tsx
 * <Grid className="auto-size-2xs"> // <-- change the width
 *   {[1,2,3,4,5,6].map((item)=> (
 *     <Card key={item}>{item}</Card>
 *   ))}
 * </Grid>
 */
function Grid({ asChild, className, ...props }: Props) {
  const Component = asChild ? Slot.Root : "div";
  return (
    <Component
      className={cn("grid-cols-auto auto-size-3xs grid gap-2.5", className)}
      {...props}
    />
  );
}

export { Grid };
