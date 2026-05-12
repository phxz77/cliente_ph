"use client";

import { motion } from "framer-motion";
import { vidroLine } from "@/lib/data/vidro";
import { aluminioLine } from "@/lib/data/aluminio";
import { CatalogLine } from "@/components/sections/catalog-line";

export function Products() {
  return (
    <section id="produtos" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Catálogo</span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            Duas linhas, um mesmo padrão de execução
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty sm:text-[17px]">
            Imagens reais do portfólio — cada arquivo é usado uma única vez. Navegue pela linha de vidro e pela linha de
            alumínio e fale com a equipe para orçamento e especificação técnica.
          </p>
        </motion.div>

        <div className="space-y-20 sm:space-y-24">
          <CatalogLine config={vidroLine} />
          <CatalogLine config={aluminioLine} />
        </div>
      </div>
    </section>
  );
}
