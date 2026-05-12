"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/data/site";
import type { MaterialLine } from "@/lib/data/types";

type Props = {
  productName: string;
  material: MaterialLine;
  className?: string;
};

export function ContactBrandCard({ productName, material, className }: Props) {
  const isGlass = material === "vidro";

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative flex min-h-[420px] flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow duration-300 hover:shadow-md",
        isGlass
          ? "border-sky-200/55 dark:border-sky-900/50"
          : "border-zinc-300/70 dark:border-zinc-700",
        className,
      )}
    >
      <div className="relative flex flex-1 items-center justify-center bg-muted/40 px-10 py-16">
        <Image
          src="/logo.png"
          alt="RO Vidros"
          width={200}
          height={80}
          className="h-auto w-[min(200px,55%)] opacity-90 transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <div
          className={cn(
            "pointer-events-none absolute inset-0 opacity-70",
            isGlass
              ? "bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.12),transparent_65%)]"
              : "bg-[radial-gradient(ellipse_at_center,rgba(113,113,122,0.14),transparent_65%)]",
          )}
        />
      </div>

      <div className="relative border-t border-border/60 bg-background/95 px-6 py-6 backdrop-blur-sm">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Entre em contato
        </p>
        <p className="mt-2 text-center text-lg font-semibold text-foreground">{productName}</p>
        <p className="mt-2 text-center text-sm text-muted-foreground text-pretty">
          Solicite fotos do catálogo, medidas e condições comerciais para este item.
        </p>
        <Link
          href={whatsappLink(`Olá! Gostaria de informações sobre: ${productName}`)}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "mt-5 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
            isGlass
              ? "bg-sky-600 text-white hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-400"
              : "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white",
          )}
        >
          Falar no WhatsApp
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}
