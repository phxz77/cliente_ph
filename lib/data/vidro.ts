import type { ProductLineConfig } from "./types";

/**
 * Catálogo Linha Vidro — cada imagem aparece uma única vez no site.
 * Banners reservados: `02-produtos-esquadrias` (bloco da linha), `02-produtos-gerais` (hero em `components/hero.tsx`).
 */
export const vidroLine: ProductLineConfig = {
  material: "vidro",
  anchorId: "linha-vidro",
  eyebrow: "Linha vidro",
  lineTitle: "Vidro temperado & ambientes luminosos",
  lineDescription:
    "Janelas, portas, boxes, guarda-corpos e espelhos com estética contemporânea, máxima transparência e acabamento cuidadoso em cada detalhe.",
  bannerImage: "/imagens/vidros/02-produtos-esquadrias.png",
  bannerImageAlt: "Catálogo de produtos em vidro temperado e esquadrias",
  sections: [
    {
      id: "janelas-temperadas",
      title: "Janelas temperadas",
      subtitle:
        "Correr, versáteis e kits compactos para ventilar com segurança, conforto acústico e desenho leve nas fachadas.",
      products: [
        {
          id: "vt-janelas-visao-geral",
          name: "Linha de janelas",
          description:
            "Conjunto de soluções em vidro temperado para vãos residenciais e comerciais, com foco em estanqueidade visual e facilidade de operação no dia a dia.",
          tags: ["Temperado", "Residencial", "Comercial"],
          images: ["/imagens/vidros/03-janelas-temperadas.png"],
        },
        {
          id: "vt-janelas-modelos",
          name: "Modelos e configurações",
          description:
            "Combinações em 2 e 4 folhas e kits que se adaptam a diferentes larguras de vão, mantendo alinhamento minimalista e ergonomia na abertura.",
          tags: ["2 e 4 folhas", "Sob medida"],
          images: ["/imagens/vidros/04-janelas-modelos.png"],
        },
        {
          id: "vt-sistema-versatik",
          name: "Sistema versátil",
          description:
            "Para quem busca mais vão livre: configurações com múltiplas folhas e percurso suave, ideais para integrar sacadas, salas e áreas gourmet.",
          tags: ["Amplitude", "Ventilação", "Premium"],
          images: ["/imagens/vidros/05-sistema-versatik.png"],
        },
        {
          id: "vt-janelas-detalhes",
          name: "Detalhes técnicos",
          description:
            "Especificações de ferragens, vedação e segurança do vidro temperado — projeto alinhado à norma e à melhor experiência de uso.",
          tags: ["Segurança", "Normas", "Performance"],
          images: ["/imagens/vidros/06-sobre-janelas-temperadas.png"],
        },
        {
          id: "vt-basculas-vitro",
          name: "Básculas e vitrôs",
          description:
            "Kits compactos para banheiros, áreas de serviço e circulação: ventilação eficiente com ocupação mínima de espaço na parede.",
          tags: ["Banheiro", "Ventilação", "Compacto"],
          images: ["/imagens/vidros/09-basculas-vitro.png"],
        },
      ],
    },
    {
      id: "cortina-vidro",
      title: "Cortina de vidro",
      subtitle:
        "Fechamento panorâmico para varandas: folhas deslizantes com giro controlado e visual contínuo entre interior e exterior.",
      products: [
        {
          id: "vt-cortina",
          name: "Sistema cortina",
          description:
            "Painéis em vidro temperado espesso, com deslizamento estável e possibilidade de giro para limpeza e circulação de ar sem quebrar a estética linear.",
          tags: ["Panorâmico", "Varanda", "8–10 mm"],
          images: ["/imagens/vidros/07-cortina-de-vidro.png"],
        },
        {
          id: "vt-cortina-detalhes",
          name: "Performance e aplicação",
          description:
            "Indicado para sacadas amplas e integração com living: conforto térmico e acústico aliados a um desenho contemporâneo e valorização do imóvel.",
          tags: ["Integração", "Conforto", "Valorização"],
          images: ["/imagens/vidros/08-sobre-cortina-de-vidro.png"],
        },
      ],
    },
    {
      id: "portas-temperadas",
      title: "Portas temperadas",
      subtitle:
        "Entradas e divisórias com presença marcante: correr, pivotante e soluções embutidas para um projeto com identidade forte.",
      products: [
        {
          id: "vt-portas-linha",
          name: "Portas em vidro temperado",
          description:
            "Portas de correr e sistemas especiais com vidro temperado, trazendo leveza visual e resistência mecânica para áreas sociais e íntimas.",
          tags: ["Entrada", "Divisória", "Correr"],
          images: ["/imagens/vidros/10-portas-temperadas.png"],
        },
        {
          id: "vt-portas-modelos",
          name: "Modelos e composições",
          description:
            "Layouts em 2 ou 4 folhas, com fixas e móveis combinadas para otimizar passagem, iluminação natural e privacidade quando necessário.",
          tags: ["2 e 4 folhas", "Composição"],
          images: ["/imagens/vidros/11-portas-modelos.png"],
        },
        {
          id: "vt-porta-atras-parede",
          name: "Correr atrás da parede",
          description:
            "Folha móvel recolhida em poço ou embutida, deixando o vão livre e o trilho discreto — solução minimalista para circulação fluida.",
          tags: ["Embutido", "Minimalismo"],
          images: ["/imagens/vidros/12-porta-por-tras-da-parede.png"],
        },
        {
          id: "vt-porta-pivotante",
          name: "Porta pivotante",
          description:
            "Eixo central ou deslocado para um gesto de abertura imponente, com ferragens de alto padrão e vidro em grandes dimensões.",
          tags: ["Pivotante", "Alto padrão"],
          images: ["/imagens/vidros/13-porta-pivotante.png"],
        },
        {
          id: "vt-porta-versatik",
          name: "Porta versátil",
          description:
            "Maior área útil de passagem e ventilação com kit premium, ideal para integrar ambientes internos com varanda ou home office.",
          tags: ["Amplitude", "Integração"],
          images: ["/imagens/vidros/14-porta-versatik.png"],
        },
      ],
    },
    {
      id: "box",
      title: "Box para banheiro",
      subtitle:
        "Da linha econômica ao alto padrão: espessuras, roldanas e acabamentos pensados para durabilidade e limpeza fácil.",
      products: [
        {
          id: "vt-box-modelos",
          name: "Família de boxes",
          description:
            "Visão geral das linhas disponíveis — correr, articulado e abrir — com vidro temperado e ferragens para cada estilo de banheiro.",
          tags: ["Catálogo", "Correr", "Articulado"],
          images: ["/imagens/vidros/15-box-modelos.png"],
        },
        {
          id: "vt-multibox",
          name: "Multibox",
          description:
            "Sistema com transpasse para reduzir respingos, vidro em espessura superior e altura que pode acompanhar até o teto.",
          tags: ["Transpasse", "8 mm"],
          images: ["/imagens/vidros/16-multibox.png"],
        },
        {
          id: "vt-multibox-modelos",
          name: "Multibox — modelos",
          description:
            "Variações de canto, frontal e configurações especiais para aproveitar cada centímetro do wet sem perder elegância.",
          tags: ["Canto", "Frontal"],
          images: ["/imagens/vidros/17-modelos-multibox.png"],
        },
        {
          id: "vt-multibox-cores",
          name: "Multibox — acabamentos",
          description:
            "Cromado, preto fosco, rosê e outras tonalidades de perfil e roldana para harmonizar com metais e revestimentos do projeto.",
          tags: ["Cores", "Personalização"],
          images: ["/imagens/vidros/18-cores-multibox.png"],
        },
        {
          id: "vt-box-elegance",
          name: "Box Elegance",
          description:
            "Roldanas aparentes com estética de destaque, vidro em 8 mm e proposta premium para banheiros master e suítes.",
          tags: ["Premium", "Roldana aparente"],
          images: ["/imagens/vidros/19-box-elegance.png"],
        },
        {
          id: "vt-box-elegance-cores",
          name: "Elegance — cores",
          description:
            "Paleta de acabamentos para combinar com torneiras, perfis e iluminação, mantendo coerência visual no banho.",
          tags: ["Paleta", "Design"],
          images: ["/imagens/vidros/20-cores-box-elegance.png"],
        },
        {
          id: "vt-box-tradicional",
          name: "Box tradicional",
          description:
            "Excelente custo-benefício com vidro em 6 mm, altura padrão e opções frontal e em canto para a maioria dos projetos.",
          tags: ["6 mm", "Custo-benefício"],
          images: ["/imagens/vidros/21-box-tradicional.png"],
        },
        {
          id: "vt-box-tradicional-cores",
          name: "Tradicional — cores",
          description:
            "Opções de perfil e acabamento para alinhar o box ao piso e às paredes, com instalação ágil e manutenção simples.",
          tags: ["Acabamentos", "Prático"],
          images: ["/imagens/vidros/22-cores-box-tradicional.png"],
        },
        {
          id: "vt-box-flex",
          name: "Box Flex (articulado)",
          description:
            "Sistema articulado tipo camarão para banheiros compactos: abertura ampla sem invadir a circulação do ambiente.",
          tags: ["Articulado", "Compacto"],
          images: ["/imagens/vidros/23-box-flex.png"],
        },
        {
          id: "vt-box-abrir",
          name: "Box de abrir",
          description:
            "Porta batente com fixo lateral, ótima estabilidade e vedação; combina com metais clássicos ou contemporâneos.",
          tags: ["Batente", "Vedação"],
          images: ["/imagens/vidros/24-box-de-abrir.png"],
        },
      ],
    },
    {
      id: "guarda-corpo",
      title: "Guarda-corpo & escadas",
      subtitle:
        "Segurança estrutural com linguagem minimalista: torre, botão, linhas tradicionais e infinity com leitura quase flutuante.",
      products: [
        {
          id: "vt-gc-geral",
          name: "Guarda-corpo e escadas",
          description:
            "Soluções para sacadas, mezaninos e escadas com vidro temperado ou laminado, respeitando normas e integrando à arquitetura.",
          tags: ["Sacada", "Escada", "Normas"],
          images: ["/imagens/vidros/25-guarda-corpo-escadas.png"],
        },
        {
          id: "vt-gc-torre-inox",
          name: "Torre inox",
          description:
            "Sistema versátil com montagem racional e acabamento em aço inox, ideal para obras com prazo e padronização de detalhes.",
          tags: ["Inox", "Versátil"],
          images: ["/imagens/vidros/26-torre-inox.png"],
        },
        {
          id: "vt-gc-minimalista",
          name: "Minimalista",
          description:
            "Leitura clean com perfis enxutos e fixações discretas, valorizando o vão livre e a transparência do painel de vidro.",
          tags: ["Clean", "Slim"],
          images: ["/imagens/vidros/27-guarda-corpo-minimalista.png"],
        },
        {
          id: "vt-gc-tradicional",
          name: "Tradicional",
          description:
            "Robustez e economia com excelente desempenho estrutural; opções em 10 mm temperado ou laminado conforme projeto.",
          tags: ["10 mm", "Estrutural"],
          images: ["/imagens/vidros/28-guarda-corpo-tradicional.png"],
        },
        {
          id: "vt-gc-boton",
          name: "Boton",
          description:
            "Conexões em inox com estética refinada, para projetos que exigem requinte nos encontros entre vidros e suportes.",
          tags: ["Inox", "Detalhe"],
          images: ["/imagens/vidros/29-guarda-corpo-boton.png"],
        },
        {
          id: "vt-gc-infinity",
          name: "Infinity",
          description:
            "Linha com componentes discretos e leitura contínua do vidro, perfeita para fachadas contemporâneas e vista livre.",
          tags: ["Infinity", "Contínuo"],
          images: ["/imagens/vidros/30-guarda-corpo-infinity.png"],
        },
      ],
    },
    {
      id: "espelhos",
      title: "Espelhos",
      subtitle:
        "Decorativos, bisotê e sob medida para ampliar a sensação espacial e refinar banhos, closets e halls com luz controlada.",
      products: [
        {
          id: "vt-espelhos",
          name: "Linha de espelhos",
          description:
            "Espelhos com lapidação e instalação segura para diferentes ambientes, do funcional ao marcante no décor.",
          tags: ["Decor", "Banho", "Closet"],
          images: ["/imagens/vidros/31-espelhos.png"],
        },
        {
          id: "vt-espelhos-modelos",
          name: "Modelos e formatos",
          description:
            "Composições retangulares, redondas e painéis amplos com chanfros e acabamentos que conversam com iluminação indireta.",
          tags: ["Formatos", "Chanfro"],
          images: ["/imagens/vidros/32-espelhos-modelos.png"],
        },
        {
          id: "vt-espelhos-sobre",
          name: "Sobre medida",
          description:
            "Consultoria para medidas especiais, recortes para interruptores e integração com marcenaria — acabamento de marcenaria de alto padrão.",
          tags: ["Sob medida", "Consultoria"],
          images: ["/imagens/vidros/33-sobre-espelhos.png"],
        },
      ],
    },
    {
      id: "referencia-vidro",
      title: "Referência técnica",
      subtitle:
        "Tipagens e espessuras mais solicitadas — alinhamento com engenharia e especificação para sua obra.",
      products: [
        {
          id: "vt-tipos-vidro",
          name: "Tipos de vidro",
          description:
            "Panorama de laminados, temperados, cores e tratamentos para combinar performance (segurança, conforto térmico) com estética do projeto.",
          tags: ["Especificação", "Performance"],
          images: ["/imagens/vidros/34-tipos-de-vidro.png"],
        },
      ],
    },
  ],
};
