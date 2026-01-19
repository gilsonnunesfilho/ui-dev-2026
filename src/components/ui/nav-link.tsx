"use client";

import type { Route } from "next";
import Link, { type LinkProps } from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import type { ReactNode } from "react";

export type NavLinkProps = Omit<LinkProps<Route>, "children"> & {
  children?: ReactNode | ((isActive: boolean) => ReactNode);
};

/**
 * NavLink is an abstraction around the Next.js Link component.
 * It adds a `data-active` attribute to the link when it's active.
 *
 * @example
 * ```tsx
 * <NavLink href="/about" className="data-active:underline">
 *   This will be underlined when the link is active
 * </NavLink>
 * ```
 *
 * It could also be used with a custom renderer:
 *
 * ```tsx
 * <NavLink href="/about" className="data-active:underline">
 *   {(isActive) => <span>This will be underlined when the link is active</span>}
 * </NavLink>
 * ```
 */
export function NavLink({ children, ...props }: NavLinkProps) {
  const segment = useSelectedLayoutSegment();
  const currentPath = segment === null ? "/" : `/${segment}`;
  const isActive = currentPath === props.href;

  const resolvedChildren =
    typeof children === "function" ? children(isActive) : children;

  return (
    <Link data-active={isActive ? true : undefined} {...props}>
      {resolvedChildren}
    </Link>
  );
}
