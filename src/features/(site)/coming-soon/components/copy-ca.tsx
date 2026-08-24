"use client";

import { Copy } from "lucide-react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";

import { CONTRACT } from "../constants";

function shortAddress(address: string) {
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
}

export function CopyCa() {
  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(CONTRACT.address);
      toast.success("Contract address copied");
    } catch {
      toast.error("Could not copy address");
    }
  }

  return (
    <div className="w-full max-w-md rounded-2xl border border-ice/20 bg-surface/80 p-4 backdrop-blur-sm">
      <p className="mb-2 text-center text-xs font-medium uppercase tracking-[0.2em] text-ice-glow/80">
        Contract Address · {CONTRACT.chain}
      </p>
      <div className="flex items-center gap-2">
        <code
          className="min-w-0 flex-1 truncate rounded-xl bg-background/80 px-3 py-2 text-center font-mono text-sm text-ice-glow sm:text-left"
          title={CONTRACT.address}
        >
          <span className="sm:hidden">{shortAddress(CONTRACT.address)}</span>
          <span className="hidden sm:inline">{CONTRACT.address}</span>
        </code>
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy contract address"
          className={cn(
            "inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-ice-bright text-background transition",
            "hover:bg-ice-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice",
          )}
        >
          <Copy className="size-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}
