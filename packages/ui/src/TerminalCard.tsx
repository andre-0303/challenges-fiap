export function TerminalCard() {
  return (
    <div className="glass-card mt-8 w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 p-6 font-mono text-[11px] shadow-2xl md:mt-0 lg:p-8">
      <div className="mb-6 flex gap-2">
        <div className="h-2.5 w-2.5 rounded-full bg-red-500/40" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/40" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-500/40" />
      </div>
      <div className="space-y-2.5 leading-relaxed">
        <p className="flex gap-2">
          <span className="text-fiap-red font-bold">➜</span>
          <span className="text-foreground/80">~</span>
          <span className="text-fiap-red-soft font-bold">fetch</span> 
          <span className="text-foreground/90">challenges --active</span>
        </p>
        <p className="pl-5 text-muted/60 animate-pulse">
          ⚡ Sincronizando com parceiros...
        </p>
        <div className="pl-5 space-y-1">
          <p className="text-foreground/90 font-bold">
            [OK] 32 desafios encontrados.
          </p>
          <p className="text-easy/80 font-medium">
            ✔ Pronto para resolução.
          </p>
        </div>
      </div>
    </div>
  );
}
