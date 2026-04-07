import Link from "next/link";
import { Home, Terminal, Building2 } from "lucide-react";

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}

const navItems: NavItem[] = [
  { href: "/", label: "Home", icon: <Home size={20} />, active: true },
  { href: "/challenges", label: "Challenges", icon: <Terminal size={20} /> },
  { href: "/companies", label: "Empresas", icon: <Building2 size={20} /> },
];

export function BottomNavBar() {
  return (
    <nav className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around rounded-t-lg bg-[#131313]/70 px-4 pb-4 pt-2 backdrop-blur-xl">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`flex flex-col items-center justify-center py-2 transition-transform active:scale-100 ${
            item.active
              ? "scale-90 font-bold text-[#ED1C24]"
              : "scale-90 text-slate-500 hover:bg-white/5"
          }`}
        >
          {item.icon}
          <span className="mt-1 text-[10px] uppercase tracking-[0.05em] font-label">
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
