"use client";

import { Fragment, ViewTransition } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/ui/nav-link";

type NavbarLinkProps = React.ComponentProps<typeof NavLink> & {
  label: string;
};

export function NavbarLink({ href, label }: NavbarLinkProps) {
  return (
    <Button asChild variant="ghost">
      <NavLink href={href} className="group relative isolate">
        {(isActive) =>
          isActive ? (
            <Fragment>
              <span>{label}</span>
              <ViewTransition name="navbar-active-indicator">
                <span className="hidden group-data-active:inline h-px bg-label-primary absolute inset-x-4 bottom-0" />
              </ViewTransition>
            </Fragment>
          ) : (
            <span>{label}</span>
          )
        }
      </NavLink>
    </Button>
  );
}
