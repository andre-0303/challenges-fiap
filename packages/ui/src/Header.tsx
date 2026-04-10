"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/challenges", label: "Challenges" },
    { href: "/companies", label: "Empresas" },
  ];

  const isActive = (href: string) => {
    if (href === "/companies") {
      return pathname === "/companies";
    }
    if (href === "/challenges") {
      return pathname === "/challenges" || pathname.startsWith("/challenges/");
    }
    return pathname === href;
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-black">
      <div className="mx-auto flex w-full max-w-[1800px] items-center justify-between px-6 py-4 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
        <Link
          href="/"
          className="text-base font-bold uppercase tracking-wide text-white"
        >
          CHALLENGESON
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative pb-1 text-sm font-medium transition-colors hover:text-white ${
                isActive(link.href) ? "text-white" : "text-white/70"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#ED1C24]" />
              )}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(true)}
          className="flex h-10 w-10 items-center justify-center text-white md:hidden"
          aria-label="Abrir menu"
        >
          <Menu size={24} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed right-0 top-0 h-full w-[280px] bg-surface md:hidden"
            >
              <div className="flex h-full flex-col p-6">
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex h-10 w-10 items-center justify-center text-white"
                    aria-label="Fechar menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="mt-12 flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors hover:text-white ${
                        isActive(link.href) ? "text-fiap-red" : "text-white/70"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
