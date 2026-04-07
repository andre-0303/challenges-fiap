"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Terminal, Building2, type LucideIcon } from "lucide-react";

interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/challenges", label: "Challenges", icon: Terminal },
  { href: "/companies", label: "Empresas", icon: Building2 },
];

export function BottomNavBar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav className="mt-auto flex w-full items-center justify-around gap-2 border-t border-white/8 bg-[#131313] px-4 py-3">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`flex flex-col items-center justify-center rounded-md px-5 py-2 transition-colors ${
            isActive(item.href)
              ? "font-bold text-[#ED1C24]"
              : "text-slate-500 hover:text-white"
          }`}
        >
          <item.icon size={20} />
          <span className="mt-1 text-[10px] uppercase tracking-[0.05em] font-label">
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
