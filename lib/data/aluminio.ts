import type { ProductLineConfig } from "./types";

/**
 * Catálogo Linha Alumínio — cada imagem aparece uma única vez no site.
 * Banner exclusivo: `30-cores-perfis-aluminio.png`.
 */
export const aluminioLine: ProductLineConfig = {
  material: "aluminio",
  anchorId: "linha-aluminio",
  eyebrow: "Linha alumínio",
  lineTitle: "Esquadrias com precisão & acabamento",
  lineDescription:
    "Janelas, portas, pele de vidro estruturada, portões e ripados com estética contemporânea, estanqueidade e paleta de cores para fachadas de alto padrão.",
  bannerImage: "/imagens/aluminio/30-cores-perfis-aluminio.png",
  bannerImageAlt: "Cores de perfis de alumínio para esquadrias",
  sections: [
    {
      id: "janelas-aluminio",
      title: "Janelas de alumínio",
      subtitle:
        "Linhas 2.5 e 3.2 com estanqueidade, isolamento acústico e desenhos que acompanham desde o projeto compacto até a fachada monumental.",
      products: [
        {
          id: "al-janelas-visao",
          name: "Janelas em alumínio",
          description:
            "Portfólio completo para vãos residenciais e comerciais, com composições de correr e fixos que integram ventilação e segurança.",
          tags: ["Esquadria", "Correr"],
          images: ["/imagens/aluminio/03-janelas-aluminio.png"],
        },
        {
          id: "al-janelas-linha",
          name: "Linhas 2.5 e 3.2",
          description:
            "Suprema, Ecoline, Gold e Chroma: escolha da espessura de perfil conforme vão, vento e exigência arquitetônica da fachada.",
          tags: ["2.5", "3.2", "Performance"],
          images: ["/imagens/aluminio/04-janelas-linha-25.png"],
        },
        {
          id: "al-janela-mao-amiga",
          name: "Janela mão amiga",
          description:
            "Bandeiras que correm para o mesmo lado, liberando área útil de abertura e facilitando o uso diário em sacadas e dormitórios.",
          tags: ["Abertura ampla", "Ergonomia"],
          images: ["/imagens/aluminio/05-janela-mao-amiga.png"],
        },
        {
          id: "al-gold-chroma",
          name: "Gold & Chroma",
          description:
            "Linhas premium com leitura de perfil mais fina e reforço estrutural para grandes vãos com visual contemporâneo.",
          tags: ["Premium", "Grande vão"],
          images: ["/imagens/aluminio/06-gold-chroma.png"],
        },
        {
          id: "al-janela-tela",
          name: "Com tela mosquiteiro",
          description:
            "Proteção contra insetos sem sacrificar ventilação: integração limpa entre folhas de alumínio e tela de alta durabilidade.",
          tags: ["Ventilação", "Proteção"],
          images: ["/imagens/aluminio/07-janela-tela-mosquiteiro.png"],
        },
        {
          id: "al-janela-camarao",
          name: "Janela camarão",
          description:
            "Sistema sanfonado que libera praticamente todo o vão, excelente para áreas de serviço e integração com áreas externas.",
          tags: ["Sanfona", "Vão total"],
          images: ["/imagens/aluminio/08-janela-camarao.png"],
        },
      ],
    },
    {
      id: "portas-aluminio",
      title: "Portas de alumínio",
      subtitle:
        "Correr, camarão, veneziana e integrações com tela: versatilidade para sacadas, halls e divisões com fechamento seguro.",
      products: [
        {
          id: "al-portas-visao",
          name: "Portas em alumínio",
          description:
            "Visão geral das famílias de portas com esquadrias em alumínio, combinando leveza, durabilidade e baixa manutenção.",
          tags: ["Portfólio", "Durabilidade"],
          images: ["/imagens/aluminio/10-portas-aluminio.png"],
        },
        {
          id: "al-porta-tradicional",
          name: "Porta tradicional",
          description:
            "Correr em 2 ou 4 folhas com opções de travessa, bandeiras fixas e integração com tela mosquiteiro quando necessário.",
          tags: ["2 e 4 folhas", "Travessa"],
          images: ["/imagens/aluminio/11-porta-tradicional.png"],
        },
        {
          id: "al-porta-mao-amiga",
          name: "Porta mão amiga",
          description:
            "Abertura ampla com bandeiras direcionadas para um ou ambos os lados — solução sofisticada para integração com área externa.",
          tags: ["Amplitude", "Sacada"],
          images: ["/imagens/aluminio/12-porta-mao-amiga.png"],
        },
        {
          id: "al-porta-veneziana",
          name: "Porta veneziana",
          description:
            "Ventilação graduável com fechadura e maçaneta; disponível em abrir, pivotar, correr ou dobrar conforme layout do projeto.",
          tags: ["Ventilada", "Flexível"],
          images: ["/imagens/aluminio/13-porta-veneziana.png"],
        },
        {
          id: "al-porta-modelos",
          name: "Modelos diversos",
          description:
            "Combinações de bandeiras, bandeiras com bandeira fixa inferior e soluções para vãos não convencionais com acompanhamento técnico.",
          tags: ["Projeto", "Variações"],
          images: ["/imagens/aluminio/14-varios-modelos-porta.png"],
        },
        {
          id: "al-porta-camarao",
          name: "Porta camarão",
          description:
            "Sistema sanfona em alumínio para banheiros, lavabos e divisórias — otimiza espaço e mantém circulação confortável.",
          tags: ["Sanfona", "Compacto"],
          images: ["/imagens/aluminio/15-porta-camarao.png"],
        },
        {
          id: "al-porta-tela",
          name: "Porta com tela mosquiteiro",
          description:
            "Tela embutida com acabamento alinhado ao portfólio de esquadrias, protegendo o interior sem comprometer a estética da fachada.",
          tags: ["Tela", "Embutida"],
          images: ["/imagens/aluminio/16-porta-tela-mosquiteiro.png"],
        },
        {
          id: "al-porta-veneziana-integrada",
          name: "Veneziana integrada",
          description:
            "Unindo controle de luz e ventilação com desenho único: integração entre folhas corredoras e perfis venezianos coordenados.",
          tags: ["Integrada", "Luz e ar"],
          images: ["/imagens/aluminio/17-porta-veneziana-integrada.png"],
        },
      ],
    },
    {
      id: "pele-vidro",
      title: "Pele de vidro",
      subtitle:
        "Fachadas estruturais com leitura contínua de vidro: performance, brilho e presença urbana para empreendimentos e retrofit.",
      products: [
        {
          id: "al-pele-visao",
          name: "Fachada pele de vidro",
          description:
            "Painéis estruturais que criam um plano visual homogêneo, realçando a arquitetura e ampliando a entrada de luz natural.",
          tags: ["Fachada", "Structural"],
          images: ["/imagens/aluminio/18-pele-de-vidro.png"],
        },
        {
          id: "al-pele-sobre",
          name: "Conceito e aplicação",
          description:
            "Detalhamento de interfaces entre vidro, estrutura e vedação — fundamental para desempenho e longevidade da fachada.",
          tags: ["Detalhe", "Performance"],
          images: ["/imagens/aluminio/19-sobre-pele-de-vidro.png"],
        },
        {
          id: "al-pele-vantagens",
          name: "Vantagens do sistema",
          description:
            "Isolamento, conforto acústico e manutenção planejada: benefícios que sustentam o investimento em uma pele de vidro bem especificada.",
          tags: ["Conforto", "Valor"],
          images: ["/imagens/aluminio/20-vantagens-pele-de-vidro.png"],
        },
      ],
    },
    {
      id: "portoes",
      title: "Portões de alumínio",
      subtitle:
        "Basculante, pivotante e deslizante: segurança perimetral com acabamento que harmoniza com a linguagem da residência ou condomínio.",
      products: [
        {
          id: "al-portoes-visao",
          name: "Portões em alumínio",
          description:
            "Linhas com baixa manutenção, sem ferrugem, compondo com muros, pedras e fachadas contemporâneas ou clássicas.",
          tags: ["Perímetro", "Durável"],
          images: ["/imagens/aluminio/21-portao-aluminio.png"],
        },
        {
          id: "al-portoes-modelos",
          name: "Modelos de portão",
          description:
            "Lambri, veneziana, búzio e gradis: escolha do desenho vazado conforme privacidade, ventilação e identidade visual desejada.",
          tags: ["Lambri", "Veneziana", "Gradil"],
          images: ["/imagens/aluminio/22-modelos-portao-aluminio.png"],
        },
        {
          id: "al-portoes-sistemas",
          name: "Sistemas de abertura",
          description:
            "Soluções basculantes, pivotantes e deslizantes com motorização opcional e detalhes de segurança para acesso veicular e pedestre.",
          tags: ["Automatização", "Segurança"],
          images: ["/imagens/aluminio/23-sistemas-portao.png"],
        },
      ],
    },
    {
      id: "ripados",
      title: "Ripados de alumínio",
      subtitle:
        "Textura amadeirada e geometria controlada para fachadas e interiores: sombra, privacidade e assinatura contemporânea.",
      products: [
        {
          id: "al-ripados-visao",
          name: "Ripados",
          description:
            "Painéis com ritmo vertical ou horizontal para compor brises e revestimentos com excelente resistência às intempéries.",
          tags: ["Brise", "Fachada"],
          images: ["/imagens/aluminio/24-ripados-aluminio.png"],
        },
        {
          id: "al-ripados-sobre",
          name: "Sobre o sistema",
          description:
            "Indicações de instalação, dilatação e integração com esquadrias — projeto coordenado para leitura limpa da arquitetura.",
          tags: ["Projeto", "Instalação"],
          images: ["/imagens/aluminio/25-sobre-ripados.png"],
        },
        {
          id: "al-ripados-acabamentos",
          name: "Acabamentos",
          description:
            "Tonalidades amadeiradas e neutras para diálogo com pedra, madeira natural e grandes panos de vidro da fachada.",
          tags: ["Amadeirado", "Neutro"],
          images: ["/imagens/aluminio/26-acabamentos-ripados.png"],
        },
      ],
    },
    {
      id: "maxim-ar",
      title: "Maxim-ar & guilhotina",
      subtitle:
        "Abertura projetada para fora ou no plano vertical — ventilação controlada em banheiros, lavabos e fachadas técnicas.",
      products: [
        {
          id: "al-maxim-guilhotina",
          name: "Maxim-ar e guilhotina",
          description:
            "Folhas que basculam para o exterior ou deslizam verticalmente, ideais quando a circulação interna é reduzida e a renovação de ar é prioridade.",
          tags: ["Banheiro", "Vertical"],
          images: ["/imagens/aluminio/09-maxim-ar-guilhotina.png"],
        },
      ],
    },
    {
      id: "contramarco-alizar",
      title: "Contramarco & alizar",
      subtitle:
        "Transições precisas entre vão, esquadria e acabamento — base técnica para vedação, alinhamento e estética impecável.",
      products: [
        {
          id: "al-contramarco",
          name: "Contramarco e alizar",
          description:
            "Conjunto de perfis auxiliares para regularizar vãos, receber folhas e facilitar nivelamento na instalação da esquadria.",
          tags: ["Alinhamento", "Instalação"],
          images: ["/imagens/aluminio/27-contramarco-alizar.png"],
        },
        {
          id: "al-contramarco-sobre",
          name: "Sobre contramarco",
          description:
            "Boas práticas de assentamento e vedação para evitar infiltrações e garantir desempenho duradouro da esquadria.",
          tags: ["Vedação", "Detalhe"],
          images: ["/imagens/aluminio/28-sobre-contramarco.png"],
        },
        {
          id: "al-alizar-sobre",
          name: "Sobre alizar",
          description:
            "Função do alizar na proteção da base da folha e na continuidade visual entre piso, vão e marco — acabamento de alto padrão.",
          tags: ["Base", "Acabamento"],
          images: ["/imagens/aluminio/29-sobre-alizar.png"],
        },
      ],
    },
    {
      id: "referencia-aluminio",
      title: "Vidros para esquadrias",
      subtitle:
        "Panorama de tipagens que combinam com cada sistema — apoio à especificação junto ao seu arquiteto ou engenheiro.",
      products: [
        {
          id: "al-tipos-vidro",
          name: "Tipos de vidro",
          description:
            "Resumo visual das opções mais utilizadas em esquadrias — laminado, temperado, cores e tratamentos para desempenho e conforto.",
          tags: ["Especificação", "Consultoria"],
          images: ["/imagens/aluminio/31-tipos-de-vidro.png"],
        },
      ],
    },
  ],
};
