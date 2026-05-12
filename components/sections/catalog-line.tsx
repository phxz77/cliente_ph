"use client";

import { motion } from "framer-motion";
import type { ProductLineConfig } from "@/lib/data/types";
import { LineBanner } from "@/components/sections/line-banner";
import { CatalogProductCard } from "@/components/cards/catalog-product-card";

export function CatalogLine({ config }: { config: ProductLineConfig }) {
  return (
    <section id={config.anchorId} className="scroll-mt-28">
      <LineBanner
        material={config.material}
        eyebrow={config.eyebrow}
        title={config.lineTitle}
        description={config.lineDescription}
        image={config.bannerImage}
        imageAlt={config.bannerImageAlt}
      />

      <div className="mt-14 space-y-14 sm:mt-16 sm:space-y-16">
        {config.sections.map((section) => (
          <div key={section.id}>
            <motion.header
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 max-w-3xl"
            >
              <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {section.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground text-pretty sm:text-[17px]">
                {section.subtitle}
              </p>
            </motion.header>

            <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
              {section.products.map((product, idx) => (
                <CatalogProductCard
                  key={product.id}
                  product={product}
                  material={config.material}
                  index={idx}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
