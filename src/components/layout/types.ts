/**
 * The SlotComponent is a pattern used by Radix UI to
 * allow for composition of components.
 *
 * @see https://www.radix-ui.com/primitives/docs/utilities/slot
 */
export type SlotComponentProps =
  | {
      asChild?: false;
      children?: React.ReactNode;
    }
  | {
      asChild: true;
      children: React.ReactElement;
    };
