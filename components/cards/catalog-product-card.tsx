"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/data/site";
import type { CatalogProduct, MaterialLine } from "@/lib/data/types";
import { ContactBrandCard } from "@/components/cards/contact-brand-card";

type Props = {
  product: CatalogProduct;
  material: MaterialLine;
  index: number;
};

export function CatalogProductCard({ product, material, index }: Props) {
  const isGlass = material === "vidro";
  const hasMedia = product.images.length > 0;
  const wa = whatsappLink(`Olá! Gostaria de saber mais sobre: ${product.name}`);

  if (!hasMedia) {
    return <ContactBrandCard productName={product.name} material={material} />;
  }

  const multi = product.images.length > 1;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: multi });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi || !multi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, multi]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: Math.min(index, 8) * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-0.5 hover:shadow-lg",
        isGlass
          ? "border-sky-200/50 hover:border-sky-300/70 dark:border-slate-800 dark:hover:border-sky-800/60"
          : "border-zinc-200/80 hover:border-zinc-400/80 dark:border-zinc-800 dark:hover:border-zinc-600",
      )}
    >
      <div
        className={cn(
          "relative border-b border-border/60",
          isGlass ? "bg-sky-50/40 dark:bg-slate-900/50" : "bg-zinc-100/80 dark:bg-zinc-900/60",
        )}
      >
        <div className="relative aspect-[3/4] min-h-[280px] w-full sm:min-h-[300px]">
          {multi ? (
            <div ref={emblaRef} className="h-full overflow-hidden">
              <div className="flex h-full">
                {product.images.map((src, idx) => (
                  <div key={src} className="relative h-full min-w-0 flex-[0_0_100%]">
                    <Image
                      src={src}
                      alt={`${product.name} — ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <Image
              src={product.images[0]!}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
              loading={index < 2 ? "eager" : "lazy"}
            />
          )}

          {multi ? (
            <>
              <button
                type="button"
                onClick={scrollPrev}
                className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-background/90 text-foreground opacity-0 shadow-sm backdrop-blur-sm transition-opacity hover:bg-background group-hover:opacity-100"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-background/90 text-foreground opacity-0 shadow-sm backdrop-blur-sm transition-opacity hover:bg-background group-hover:opacity-100"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                {product.images.map((_, idx) => (
                  <span
                    key={idx}
                    className={cn(
                      "h-1.5 w-1.5 rounded-full transition-colors",
                      idx === selectedIndex ? "bg-primary" : "bg-background/70",
                    )}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col px-6 py-6">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">{product.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty sm:text-[15px]">
          {product.description}
        </p>
        {product.tags?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        <Link
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "mt-5 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
            isGlass
              ? "bg-sky-600 text-white hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-400"
              : "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white",
          )}
        >
          Solicitar informações
        </Link>
      </div>
    </motion.article>
  );
}
