"use client";

import { useState } from "react";
import { Zap } from "lucide-react";
import { Button } from "@repo/ui/Button";

export function AcceptChallengeButton() {
  const [showNotice, setShowNotice] = useState(false);

  return (
    <div className="space-y-3">
      <Button
        variant="ghost"
        size="lg"
        className="w-full justify-center gap-2 border-fiap-red/60 bg-transparent text-white hover:border-fiap-red hover:bg-fiap-red/8 hover:text-white"
        onClick={() => setShowNotice((current) => !current)}
      >
        Aceitar Desafio
        <Zap size={16} />
      </Button>

      {showNotice && (
        <div className="rounded-2xl border border-fiap-red/20 bg-fiap-red/8 px-4 py-3 text-sm leading-relaxed text-white/78">
          Submissões ainda não estão liberadas. Você já pode estudar o
          problema, montar a solução localmente e se preparar para enviar em
          breve.
        </div>
      )}
    </div>
  );
}
