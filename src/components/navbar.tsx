import { Bell, Blocks, ChevronDown, Layers, LogOut } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { Brand } from "@/components/brand";
import { Cluster, Container } from "@/components/layout";
import { NavbarLink } from "@/components/navbar-link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

type NavigationLink = {
  href: Route;
  label: string;
};

const LINKS = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/register",
    label: "Register",
  },
  {
    href: "/about",
    label: "About",
  },
] satisfies NavigationLink[];

export function Navbar() {
  return (
    <nav className="py-2.5 bg-background-primary/80 backdrop-blur-sm border-b border-fill-secondary sticky top-0 z-10">
      <Container>
        <Cluster>
          <Button asChild variant="ghost" size="icon" className="size-auto p-1">
            <Link href="/">
              <Brand className="size-7 text-brand" />
            </Link>
          </Button>
          <Cluster className="hidden sm:flex">
            {LINKS.map(({ href, label }) => (
              <NavbarLink key={label} href={href} label={label} />
            ))}
          </Cluster>
          <Menubar className="ms-auto gap-2.5">
            <MenubarMenu>
              <MenubarTrigger asChild>
                <Button size="icon" variant="ghost" className="relative">
                  <span className="sr-only">Job offers</span>
                  <Bell className="size-5" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    2
                  </Badge>
                </Button>
              </MenubarTrigger>
              <MenubarContent align="center">
                <MenubarLabel>Job offers</MenubarLabel>
                <MenubarGroup>
                  <MenubarItem>
                    Senior UI Developer{" "}
                    <Badge className="ms-auto uppercase">new</Badge>
                  </MenubarItem>
                  <MenubarItem>
                    Senior UX Engineer{" "}
                    <Badge className="ms-auto uppercase">new</Badge>
                  </MenubarItem>
                </MenubarGroup>
                <MenubarSeparator />
                <MenubarGroup>
                  <MenubarItem>Frontend Engineer</MenubarItem>
                  <MenubarItem>Lead Graphic Designer</MenubarItem>
                  <MenubarItem disabled>Staff Data Scientist</MenubarItem>
                  <MenubarItem disabled>Systems Engineer</MenubarItem>
                  <MenubarItem disabled>Junior Software Engineer</MenubarItem>
                </MenubarGroup>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger asChild>
                <Button variant="ghost" className="ps-2 pe-2.5">
                  <Avatar>
                    <AvatarImage
                      src="/juliana-avatar.avif"
                      alt=""
                      fetchPriority="low"
                    />
                    <AvatarFallback>Ju</AvatarFallback>
                  </Avatar>
                  <span className="hidden sm:inline">Juliana</span>
                  <ChevronDown className="size-4" />
                </Button>
              </MenubarTrigger>

              <MenubarContent align="end">
                <div className="contents sm:hidden">
                  <MenubarLabel>Navigation</MenubarLabel>
                  <MenubarItem asChild>
                    <Link href="/">Home page</Link>
                  </MenubarItem>
                  <MenubarItem asChild>
                    <Link href="/register">Candidate registration</Link>
                  </MenubarItem>
                  <MenubarItem asChild>
                    <Link href="/about">About us</Link>
                  </MenubarItem>
                  <MenubarSeparator />
                </div>
                <MenubarLabel>Documentation</MenubarLabel>
                <MenubarGroup>
                  <MenubarItem asChild>
                    <Link href="/docs/design-system">
                      <Layers className="size-4 opacity-60" />
                      Design System
                    </Link>
                  </MenubarItem>
                  <MenubarItem asChild>
                    <Link href="/docs/demos">
                      <Blocks className="size-4 opacity-60" />
                      Demos
                    </Link>
                  </MenubarItem>
                </MenubarGroup>
                <MenubarSeparator />
                <MenubarGroup>
                  <MenubarLabel>Theme</MenubarLabel>
                  <MenubarRadioGroup value="light">
                    <MenubarRadioItem value="system">System</MenubarRadioItem>
                    <MenubarRadioItem value="light">Light</MenubarRadioItem>
                    <MenubarRadioItem disabled value="dark">
                      Dark
                    </MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarGroup>
                <MenubarSeparator />
                <MenubarItem variant="destructive">
                  <LogOut className="size-4" />
                  Sign out
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </Cluster>
      </Container>
    </nav>
  );
}
