"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { MaterialLine } from "@/lib/data/types";

type Props = {
  material: MaterialLine;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export function LineBanner({ material, eyebrow, title, description, image, imageAlt }: Props) {
  const isGlass = material === "vidro";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "grid overflow-hidden rounded-3xl border shadow-sm lg:grid-cols-2",
        isGlass
          ? "border-sky-200/55 bg-gradient-to-br from-sky-50/85 via-background to-background dark:border-sky-900/45 dark:from-sky-950/30"
          : "border-zinc-200/80 bg-gradient-to-br from-zinc-100/80 via-background to-background dark:border-zinc-800 dark:from-zinc-900/40",
      )}
    >
      <div className="order-2 flex flex-col justify-center px-8 py-12 lg:order-1 lg:px-14 lg:py-16">
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.22em]",
            isGlass ? "text-sky-700 dark:text-sky-400" : "text-zinc-600 dark:text-zinc-400",
          )}
        >
          {eyebrow}
        </span>
        <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
          {title}
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-[17px]">
          {description}
        </p>
      </div>

      <div className="relative order-1 min-h-[280px] lg:order-2 lg:min-h-[380px]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="(max-width:1024px)100vw,50vw"
        />
        <div
          className={cn(
            "absolute inset-0",
            isGlass
              ? "bg-gradient-to-t from-background via-background/10 to-transparent lg:bg-gradient-to-l"
              : "bg-gradient-to-t from-background via-background/15 to-transparent lg:bg-gradient-to-l",
          )}
        />
      </div>
    </motion.div>
  );
}
