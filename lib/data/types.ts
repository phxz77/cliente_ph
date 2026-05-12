export type MaterialLine = "vidro" | "aluminio";

export type CatalogProduct = {
  id: string;
  name: string;
  description: string;
  tags?: string[];
  /** Caminhos em `/imagens/...` (pastas locais). Vazio exibe card com logo + contato. */
  images: string[];
};

export type CatalogSection = {
  id: string;
  title: string;
  subtitle: string;
  products: CatalogProduct[];
};

export type ProductLineConfig = {
  material: MaterialLine;
  anchorId: string;
  eyebrow: string;
  lineTitle: string;
  lineDescription: string;
  bannerImage: string;
  bannerImageAlt: string;
  sections: CatalogSection[];
};
