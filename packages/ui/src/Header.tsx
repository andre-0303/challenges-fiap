import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-black">
      <div className="mx-auto grid w-full max-w-[1800px] grid-cols-[1fr_auto_1fr] items-center px-6 py-4 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
        <div className="justify-self-start">
          <Link
            href="/"
            className="text-base font-bold uppercase tracking-wide text-white"
          >
            CHALLENGESON
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-8 md:flex">
          <Link
            href="/"
            className="relative pb-1 text-sm font-medium text-white transition-colors hover:text-white"
          >
            Home
            <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#ED1C24]" />
          </Link>
          <Link
            href="/challenges"
            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            Challenges
          </Link>
          <Link
            href="/companies"
            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            Empresas
          </Link>
        </nav>

        <div aria-hidden="true" className="justify-self-end" />
      </div>
    </header>
  );
}
