import { Slot } from "radix-ui";
import type { SlotComponentProps } from "@/components/layout/types";
import { cn } from "@/lib/utils";

type RootProps = React.ComponentProps<"div"> & SlotComponentProps;
type SideProps = React.ComponentProps<"div"> & SlotComponentProps;
type ContentProps = React.ComponentProps<"div"> & SlotComponentProps;

/**
 * WithSidebar is a wrapper component that provides a consistent way
 * to wrap components that should be displayed side-by-side when
 * there's enough space, and wraps on a single column when there's is not.
 *
 * @example
 * ```tsx
 * <WithSidebar.Root>
 *   <WithSidebar.Side>
 *     <Sidebar />
 *   </WithSidebar.Side>
 *   <WithSidebar.Content>
 *     <Content />
 *   </WithSidebar.Content>
 * </WithSidebar.Root>
 * ```
 */
function Root({ asChild, className, ...props }: RootProps) {
  const Component = asChild ? Slot.Root : "div";
  return (
    <Component
      className={cn("@container/sidebar flex flex-wrap gap-2.5", className)}
      {...props}
    />
  );
}

/**
 * By default the sidebar has the same width as the content.
 * You can change the width by adjusting the flex-basis of the content.
 *
 * @example
 * ```tsx
 * <WithSidebar.Root>
 *   <WithSidebar.Side className="basis-80"> // <-- change the flex-basis
 *     <Sidebar />
 *   </WithSidebar.Side>
 *   <WithSidebar.Content>
 *     <Content />
 *   </WithSidebar.Content>
 * </WithSidebar.Root>
 */
function Side({ asChild, className, ...props }: SideProps) {
  const Component = asChild ? Slot.Root : "div";
  return <Component className={cn("grow", className)} {...props} />;
}

/**
 * By default the component wraps when the `<Content>` is less than
 * 50% of the width of the container.
 *
 * You can change this behavior by adjusting the min-width of the content.
 *
 * @example
 * ```tsx
 * <WithSidebar.Root>
 *   <WithSidebar.Side>
 *     <Sidebar />
 *   </WithSidebar.Side>
 *   <WithSidebar.Content className="min-w-2/3"> // <-- change the min-width
 *     <Content />
 *   </WithSidebar.Content>
 * </WithSidebar.Root>
 */
function Content({ asChild, className, ...props }: ContentProps) {
  const Component = asChild ? Slot.Root : "div";
  return (
    <Component
      className={cn("min-w-1/2 grow-999 basis-0", className)}
      {...props}
    />
  );
}

export const WithSidebar = { Root, Side, Content };
