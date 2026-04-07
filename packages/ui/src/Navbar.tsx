"use client";

import { type JSX } from "react";
import { Menu } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
}

interface NavbarProps {
  links?: NavLink[];
  Logo?: JSX.Element;
  LinkComponent: React.ComponentType<{ href: string; className?: string; children: React.ReactNode }>;
}

const defaultLinks: NavLink[] = [
  { href: "/challenges", label: "Challenges" },
  { href: "/companies", label: "Empresas" },
];

export function Navbar({
  links = defaultLinks,
  Logo,
  LinkComponent,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-container items-center justify-between px-6">
        {Logo ?? (
          <LinkComponent href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">
              Ch<span className="text-fiap-red">ON</span>
            </span>
          </LinkComponent>
        )}

        <div className="hidden gap-8 md:flex">
          {links.map((link) => (
            <LinkComponent
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </LinkComponent>
          ))}
        </div>

        <button className="rounded-md p-2 text-muted transition-colors hover:text-foreground md:hidden">
          <Menu size={24} />
        </button>
      </nav>
    </header>
  );
}
