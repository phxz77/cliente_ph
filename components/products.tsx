"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Product = {
  id: string;
  name: string;
  description: string;
  images: string[];
  tags: string[];
};

type Category = {
  id: string;
  title: string;
  subtitle: string;
  products: Product[];
};

const categories: Category[] = [
  {
    id: "janelas",
    title: "Janelas Temperadas",
    subtitle: "Modelos para diferentes vãos e estilos com visual leve, ventilação e segurança.",
    products: [
      {
        id: "janela-tradicional",
        name: "Janelas Tradicionais",
        description: "Sistema de correr com ótimo custo-benefício. Disponível em 2 e 4 folhas para uso geral.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FhvmAUZ04t3eRZBW2YjBF8kBdGtBwD.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wOEwaxf7oMC1A8PEopfKukOu7cgeHc.png",
        ],
        tags: ["2 e 4 folhas", "Custo-benefício", "Uso geral"],
      },
      {
        id: "janela-versatil",
        name: "Janelas Versátil",
        description: "Mais vão livre e ventilação com kit sofisticado. Sistema premium com 2, 3 e 6 folhas.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4P9HXYgYtG9LEdYVmMB6wSimiHXjKx.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wOEwaxf7oMC1A8PEopfKukOu7cgeHc.png",
        ],
        tags: ["2, 3 e 6 folhas", "Maior abertura", "Visual premium"],
      },
      {
        id: "cortina-vidro",
        name: "Cortina de Vidro",
        description: "Fechamento panorâmico para varandas e vãos. Vidro de 8-10mm que desliza e gira 90°.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sWRnOXmeu94UMxLjvQlB96rUpnaDqt.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gMbuicWA1vncONbKVk1NPGNXqJlYMz.png",
        ],
        tags: ["8-10mm", "Desliza/Gira 90°", "Panorâmico"],
      },
      {
        id: "bascula-vitro",
        name: "Báscula / Vitrô",
        description: "Kits práticos para banheiros, áreas e serviços. Ideal para ventilação e otimização de espaço.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-G0KkjM9uI9RxbpwaHKDBcgWOCmSs3z.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5OH0rEu88JOmXaCfBoNY5I3HRDsMxQ.png",
        ],
        tags: ["Ventilação", "Prático", "Compacto"],
      },
    ],
  },
  {
    id: "portas",
    title: "Portas Temperadas",
    subtitle: "Soluções para entradas residenciais e comerciais com segurança, durabilidade e leveza visual.",
    products: [
      {
        id: "porta-correr",
        name: "Porta de Correr",
        description: "Opção versátil para vãos internos e externos. Configurações de 2 folhas (1 fixa + 1 móvel) ou 4 folhas.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Xk3bE4IXKQHVOOvAdgdUdibX7Pq56G.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RwkmEQgejoAoOjwbtomsgsvuzRpcmp.png",
        ],
        tags: ["2 ou 4 folhas", "Interno/Externo", "Versátil"],
      },
      {
        id: "porta-versatil",
        name: "Porta Versátil",
        description: "Kit sofisticado para maior vão aberto. Ideal para quem prioriza amplitude e ventilação.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wOEwaxf7oMC1A8PEopfKukOu7cgeHc.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4P9HXYgYtG9LEdYVmMB6wSimiHXjKx.png",
        ],
        tags: ["2, 3 e 6 folhas", "Visual premium", "Integra ambientes"],
      },
      {
        id: "porta-pivotante",
        name: "Porta Pivotante",
        description: "Entrada marcante com abertura suave. Excelente para composições com vidro e ferragens de alto padrão.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cjJ77K6uYRjFgQyPATAPLM9WfviRjT.png",
        ],
        tags: ["Eixo pivot", "Alto padrão", "Entrada imponente"],
      },
      {
        id: "correr-parede",
        name: "Correr Atrás da Parede",
        description: "Folha móvel embutida para visual limpo. Ótimo para economizar espaço e manter linhas minimalistas.",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SsEhO0zj3fnaKvtJR6ielfc2PxD1wp.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XLuZYpviAlrYhyGTGqjYsIMZUzRLai.png",
        ],
        tags: ["Trilho oculto", "Minimalista", "Economiza espaço"],
      },
    ],
  },
  {
    id: "box",
    title: "Box para Banheiro",
    subtitle: "Linhas do econômico ao alto padrão com vidro temperado e ferragens conforme o estilo do seu projeto.",
    products: [
      {
        id: "box-tradicional",
        name: "Box Tradicional",
        description: "Melhor custo-benefício do mercado. Vidro de 6mm com altura de 1,80m. Formatos frontal e canto.",
        images: [
          "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&q=80",
          "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
          "https://images.unsplash.com/photo-1600566752229-250ed79470f8?w=600&q=80",
        ],
        tags: ["Vidro 6mm", "1,80m altura", "Frontal/Canto"],
      },
      {
        id: "box-multibox",
        name: "Box Multibox",
        description: "Correr com transpasse para menos vazamento. Vidro de 8mm com altura até o teto.",
        images: [
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80",
          "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&q=80",
          "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=600&q=80",
        ],
        tags: ["Vidro 8mm", "Até o teto", "Menos vazamento"],
      },
      {
        id: "box-elegance",
        name: "Box Elegance",
        description: "Roldanas aparentes com visual premium. Vidro de 8mm com acabamentos rosê, branco, preto, dourado e cromado.",
        images: [
          "https://images.unsplash.com/photo-1600566752547-33ddcf5e5ddf?w=600&q=80",
          "https://images.unsplash.com/photo-1609766857326-18a239b8a6e0?w=600&q=80",
          "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=600&q=80",
        ],
        tags: ["Vidro 8mm", "Roldanas aparentes", "Visual premium"],
      },
      {
        id: "box-flex",
        name: "Box Flex (Articulado)",
        description: "Sistema articulado/camarão com abertura ampla. Indicado para banheiros pequenos.",
        images: [
          "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=600&q=80",
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80",
          "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80",
        ],
        tags: ["Vidro 8mm", "Abertura ampla", "Banheiros pequenos"],
      },
      {
        id: "box-transfer",
        name: "Box Transfer",
        description: "Opção de alto padrão com deslizamento suave. Acabamento premium com diversas cores disponíveis.",
        images: [
          "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=600&q=80",
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
          "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?w=600&q=80",
        ],
        tags: ["Vidro 8mm", "Alto padrão", "Deslizamento suave"],
      },
      {
        id: "box-abrir",
        name: "Box de Abrir",
        description: "Porta batente com vidro fixo. Bom custo-benefício com cores branco, preto, natural fosco e bronze.",
        images: [
          "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&q=80",
          "https://images.unsplash.com/photo-1629079447777-1e605162dc8d?w=600&q=80",
          "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80",
        ],
        tags: ["Vidro 8mm", "Porta batente", "Custo-benefício"],
      },
    ],
  },
  {
    id: "guarda-corpo",
    title: "Guarda-corpos e Escadas",
    subtitle: "Portfólio completo para sacadas e escadas com montagem prática e fácil instalação.",
    products: [
      {
        id: "torre-inox",
        name: "Torre Inox",
        description: "Praticidade e versatilidade na instalação de sacadas e escadas. Montagem prática e fácil.",
        images: [
          "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=600&q=80",
          "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=600&q=80",
          "https://images.unsplash.com/photo-1600566752734-2a0cd66c42fe?w=600&q=80",
        ],
        tags: ["Inox", "Versátil", "Fácil instalação"],
      },
      {
        id: "minimalista",
        name: "Minimalista",
        description: "Design clean com perfis slim e elegantes. Diversas opções de cores personalizáveis.",
        images: [
          "https://images.unsplash.com/photo-1600607687166-f59b240bc05d?w=600&q=80",
          "https://images.unsplash.com/photo-1600566752547-33ddcf5e5ddf?w=600&q=80",
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
        ],
        tags: ["Design clean", "Perfis slim", "Cores personalizáveis"],
      },
      {
        id: "tradicional-gc",
        name: "Tradicional",
        description: "Segurança e economia com ótimo custo-benefício. Vidro de 10mm temperado ou laminado.",
        images: [
          "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80",
          "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&q=80",
          "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
        ],
        tags: ["Vidro 10mm", "Custo-benefício", "Seguro"],
      },
      {
        id: "boton",
        name: "Boton",
        description: "Conexões em inox com requinte e elegância. Ferragens em inox com visual sofisticado.",
        images: [
          "https://images.unsplash.com/photo-1600607687166-f59b240bc05d?w=600&q=80",
          "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
          "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=600&q=80",
        ],
        tags: ["Inox", "Requinte", "Elegância"],
      },
      {
        id: "infinity",
        name: "Infinity",
        description: "Visual clean com vidros estruturais. Design moderno com componentes ocultos e perfis horizontais.",
        images: [
          "https://images.unsplash.com/photo-1600047509782-20d39509f26d?w=600&q=80",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",
        ],
        tags: ["Vidros estruturais", "Componentes ocultos", "Moderno"],
      },
    ],
  },
  {
    id: "espelhos",
    title: "Espelhos",
    subtitle: "Espelhos decorativos, bisotê e sob medida para agregar elegância e personalidade ao ambiente.",
    products: [
      {
        id: "espelho-decorativo",
        name: "Espelhos Decorativos",
        description: "Perfeitos para quem busca um toque de personalidade e estilo. Diversos formatos e tamanhos.",
        images: [
          "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&q=80",
          "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&q=80",
          "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80",
        ],
        tags: ["Personalidade", "Diversos formatos", "Estilo único"],
      },
      {
        id: "espelho-bisote",
        name: "Espelhos Bisotê",
        description: "Um clássico atemporal que agrega elegância e requinte ao ambiente. Acabamento chanfrado.",
        images: [
          "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=600&q=80",
          "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=600&q=80",
          "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&q=80",
        ],
        tags: ["Clássico", "Elegante", "Chanfrado"],
      },
      {
        id: "espelho-medida",
        name: "Espelhos Sob Medida",
        description: "Ideais para quem busca um produto exclusivo e personalizado. Fabricação conforme seu projeto.",
        images: [
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
          "https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?w=600&q=80",
          "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80",
        ],
        tags: ["Exclusivo", "Personalizado", "Sob medida"],
      },
    ],
  },
  {
    id: "janelas-aluminio",
    title: "Janelas de Alumínio",
    subtitle: "Esquadrias de alumínio com estanqueidade superior, isolamento acústico e visual moderno. Linhas 2.5 e 3.2.",
    products: [
      {
        id: "janela-alu-tradicional",
        name: "Janelas 2 e 4 Folhas",
        description: "Janelas de correr tradicionais nas linhas Suprema/Ecoline (2.5) e Gold/Chroma (3.2). Ideais para diferentes tamanhos de vãos.",
        images: [
          "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&q=80",
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
          "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
        ],
        tags: ["Linha 2.5 e 3.2", "2 a 4 folhas", "Estanqueidade"],
      },
      {
        id: "janela-mao-amiga",
        name: "Janela Mão Amiga",
        description: "Sistema com bandeiras que correm para um mesmo lado, proporcionando abertura maior. Disponível de 2 a 6 folhas.",
        images: [
          "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=600&q=80",
          "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&q=80",
          "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=600&q=80",
        ],
        tags: ["2 a 6 folhas", "Abertura ampla", "Sofisticado"],
      },
      {
        id: "janela-tela-mosquiteiro",
        name: "Janela com Tela Mosquiteiro",
        description: "Proteção contra insetos com circulação de ar e luz natural. Fácil instalação e manutenção.",
        images: [
          "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80",
          "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=600&q=80",
          "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80",
        ],
        tags: ["Anti-insetos", "Ventilação", "Prático"],
      },
      {
        id: "janela-camarao",
        name: "Janela Camarão",
        description: "Sistema articulado/sanfonado que libera quase 100% do vão. Disponível em 2 ou 4 folhas com vidros de 4 e 6mm.",
        images: [
          "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
          "https://images.unsplash.com/photo-1600566752547-33ddcf5e5ddf?w=600&q=80",
          "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&q=80",
        ],
        tags: ["100% abertura", "Articulado", "2 ou 4 folhas"],
      },
      {
        id: "janela-guilhotina",
        name: "Janela Guilhotina",
        description: "Abertura vertical com folhas que deslizam para cima e para baixo. Ideal para ambientes com espaço limitado.",
        images: [
          "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=600&q=80",
          "https://images.unsplash.com/photo-1600573472591-ee6981cf35b6?w=600&q=80",
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
        ],
        tags: ["Abertura vertical", "Compacto", "Clássico"],
      },
      {
        id: "janela-maxim-ar",
        name: "Janela Maxim-ar",
        description: "Abertura empurrando a folha para fora, podendo chegar a 90°. Muito utilizada em banheiros e áreas externas.",
        images: [
          "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=600&q=80",
          "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=600&q=80",
          "https://images.unsplash.com/photo-1600566752734-2a0cd66c42fe?w=600&q=80",
        ],
        tags: ["Abertura 90°", "Banheiros", "Ventilação"],
      },
    ],
  },
  {
    id: "portas-aluminio",
    title: "Portas de Alumínio",
    subtitle: "Combinação perfeita de estilo, funcionalidade e durabilidade. Diversos modelos e acabamentos.",
    products: [
      {
        id: "porta-alu-tradicional",
        name: "Porta Tradicional",
        description: "Portas de correr de 2 e 4 folhas com abertura lateral ou central. Com ou sem travessa, com ou sem tela.",
        images: [
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",
        ],
        tags: ["2 ou 4 folhas", "Versátil", "Durável"],
      },
      {
        id: "porta-mao-amiga-alu",
        name: "Porta Mão Amiga",
        description: "Bandeiras que correm para um ou ambos os lados, proporcionando abertura maior. De 3 a 6 folhas.",
        images: [
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
          "https://images.unsplash.com/photo-1600047509782-20d39509f26d?w=600&q=80",
          "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=600&q=80",
        ],
        tags: ["3 a 6 folhas", "Abertura ampla", "Premium"],
      },
      {
        id: "porta-veneziana",
        name: "Porta Veneziana",
        description: "Pode ser de abrir, pivotar, correr ou dobrar. Ventilada com fechadura e maçaneta. Diversos modelos.",
        images: [
          "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&q=80",
          "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80",
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
        ],
        tags: ["Ventilada", "Vários modelos", "Flexível"],
      },
      {
        id: "porta-camarao-alu",
        name: "Porta Camarão",
        description: "Sistema sanfona sem vidro, ideal para banheiros, lavabos, cozinhas e divisórias. Otimiza espaços menores.",
        images: [
          "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
          "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80",
          "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&q=80",
        ],
        tags: ["Sanfona", "Economiza espaço", "Moderno"],
      },
      {
        id: "porta-tela-mosquiteiro",
        name: "Porta com Tela Mosquiteiro",
        description: "Esquadria com tela mosquiteiro embutida, interno ou externo. Proteção contra insetos com ventilação.",
        images: [
          "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=600&q=80",
          "https://images.unsplash.com/photo-1600566752229-250ed79470f8?w=600&q=80",
          "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
        ],
        tags: ["Anti-insetos", "Embutida", "Prático"],
      },
      {
        id: "porta-veneziana-integrada",
        name: "Porta Veneziana Integrada",
        description: "Controle de iluminação, ventilação e arejamento com design único. Une vantagens de correr e veneziana.",
        images: [
          "https://images.unsplash.com/photo-1600607687166-f59b240bc05d?w=600&q=80",
          "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80",
          "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=600&q=80",
        ],
        tags: ["Controle de luz", "Ventilação", "Design único"],
      },
    ],
  },
  {
    id: "pele-vidro",
    title: "Pele de Vidro",
    subtitle: "Fachada cortina ou structural glazing para visual moderno, sofisticado e integração interior/exterior.",
    products: [
      {
        id: "pele-vidro-fachada",
        name: "Fachada Pele de Vidro",
        description: "Revestimento de fachadas com painéis de vidro criando aparência contínua. Visual moderno e sofisticado.",
        images: [
          "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
          "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80",
          "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=600&q=80",
        ],
        tags: ["Fachada", "Moderno", "Sofisticado"],
      },
      {
        id: "pele-vidro-comercial",
        name: "Pele de Vidro Comercial",
        description: "Iluminação natural abundante, bom isolamento térmico e acústico. Baixa manutenção e resistência.",
        images: [
          "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80",
          "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600&q=80",
        ],
        tags: ["Comercial", "Eficiência energética", "Amplitude"],
      },
    ],
  },
  {
    id: "portoes",
    title: "Portões de Alumínio",
    subtitle: "Durabilidade superior sem ferrugem ou corrosão. Sistemas basculante, pivotante e deslizante.",
    products: [
      {
        id: "portao-lambri",
        name: "Portão Lambri",
        description: "Acabamento elegante com frisos horizontais. Durável, não enferruja e mantém-se em bom estado por anos.",
        images: [
          "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=600&q=80",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
          "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
        ],
        tags: ["Lambri", "Durável", "Elegante"],
      },
      {
        id: "portao-veneziana",
        name: "Portão Veneziana",
        description: "Design clássico com venezianas que permitem ventilação. Disponível em diversos acabamentos.",
        images: [
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
        ],
        tags: ["Veneziana", "Ventilação", "Clássico"],
      },
      {
        id: "portao-buzio",
        name: "Portão Búzio",
        description: "Modelo com aberturas decorativas para iluminação natural. Visual diferenciado e moderno.",
        images: [
          "https://images.unsplash.com/photo-1600573472591-ee6981cf35b6?w=600&q=80",
          "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&q=80",
          "https://images.unsplash.com/photo-1600566752547-33ddcf5e5ddf?w=600&q=80",
        ],
        tags: ["Búzio", "Decorativo", "Moderno"],
      },
      {
        id: "portao-gradil",
        name: "Portão Gradil",
        description: "Estrutura vazada com grades de alumínio. Permite visibilidade e ventilação com segurança.",
        images: [
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
          "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
          "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&q=80",
        ],
        tags: ["Gradil", "Visibilidade", "Seguro"],
      },
    ],
  },
  {
    id: "ripados",
    title: "Ripados de Alumínio",
    subtitle: "Painéis de revestimento com acabamento amadeirado. Durabilidade, versatilidade e estilo contemporâneo.",
    products: [
      {
        id: "ripado-fachada",
        name: "Ripado para Fachada",
        description: "Instalação vertical ou horizontal para diferentes efeitos visuais. Resistente à corrosão e intempéries.",
        images: [
          "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80",
          "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=600&q=80",
          "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=600&q=80",
        ],
        tags: ["Fachada", "Vertical/Horizontal", "Resistente"],
      },
      {
        id: "ripado-interno",
        name: "Ripado Interno",
        description: "Acabamento amadeirado com diferentes tonalidades. Ideal para paredes, tetos e divisórias internas.",
        images: [
          "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80",
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
          "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80",
        ],
        tags: ["Interno", "Amadeirado", "Decorativo"],
      },
      {
        id: "ripado-termoacustico",
        name: "Ripado Termoacústico",
        description: "Benefícios de isolamento térmico e acústico. Aumenta o conforto nos ambientes com elegância.",
        images: [
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
          "https://images.unsplash.com/photo-1600047509782-20d39509f26d?w=600&q=80",
          "https://images.unsplash.com/photo-1600566752229-250ed79470f8?w=600&q=80",
        ],
        tags: ["Termoacústico", "Conforto", "Eficiente"],
      },
    ],
  },
];

const finishes = [
  { name: "Preto", color: "#1a1a1a" },
  { name: "Branco", color: "#ffffff" },
  { name: "Cinza", color: "#6b7280" },
  { name: "Bronze 1001", color: "#8B4513" },
  { name: "Bronze 1002", color: "#7B3F0E" },
  { name: "Bronze 1003", color: "#6B350A" },
  { name: "Córdoba", color: "#3d2817" },
  { name: "Imbuia Claro", color: "#5c4033" },
  { name: "Flamboyant", color: "#4a2c2a" },
  { name: "Cromado", color: "#C0C0C0" },
  { name: "Rosê", color: "#B76E79" },
  { name: "Dourado", color: "#D4AF37" },
];

const glassTypes = [
  { name: "Incolor", description: "Transparente" },
  { name: "Verde", description: "Tom esverdeado" },
  { name: "Fumê", description: "Escurecido" },
  { name: "Bronze", description: "Tom bronzeado" },
  { name: "Refletivo", description: "Espelhado" },
  { name: "Jateado", description: "Fosco" },
];

const glassThickness = ["3mm", "4mm", "5mm", "6mm", "8mm", "10mm", "12mm"];

function ProductCard({ product }: { product: Product }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <Link
      href={`https://wa.me/5511930111496?text=Olá! Gostaria de saber mais sobre: ${product.name}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
    >
      {/* Image Carousel */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <div ref={emblaRef} className="h-full">
          <div className="flex h-full">
            {product.images.map((img, idx) => (
              <div key={idx} className="flex-[0_0_100%] min-w-0 relative h-full">
                <Image
                  src={img}
                  alt={`${product.name} - imagem ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={(e) => {
            e.preventDefault();
            scrollPrev();
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Imagem anterior"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            scrollNext();
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Próxima imagem"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {product.images.map((_, idx) => (
            <div
              key={idx}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                idx === selectedIndex ? "bg-primary" : "bg-background/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h4 className="font-semibold text-foreground mb-2">{product.name}</h4>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export function Products() {
  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-3 block">
            Nossos Produtos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Design limpo. Instalação segura.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Vidros temperados e espelhos com acabamento premium para elevar a estética do seu projeto.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-20">
          {categories.map((category) => (
            <div key={category.id}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground">{category.subtitle}</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Finishes Section */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-3 block">
              Cores dos Perfis de Alumínio
            </span>
            <p className="text-muted-foreground text-sm">Diversas cores disponíveis. Consulte disponibilidade.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {finishes.map((finish) => (
              <div key={finish.name} className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-full border border-border"
                  style={{ backgroundColor: finish.color }}
                />
                <span className="text-sm text-muted-foreground">{finish.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Glass Types Section */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-3 block">
              Tipos de Vidros
            </span>
            <p className="text-muted-foreground text-sm">Comum, temperado, laminado, lapidado e bisotado. Consulte um profissional.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex flex-wrap justify-center gap-3">
              {glassTypes.map((glass) => (
                <div key={glass.name} className="px-4 py-2 bg-secondary rounded-full">
                  <span className="text-sm font-medium text-secondary-foreground">{glass.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground mb-2">Espessuras disponíveis:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {glassThickness.map((thickness) => (
                <span key={thickness} className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded">
                  {thickness}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
