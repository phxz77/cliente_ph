import { Shield, Clock, Sparkles, Ruler, MessageCircle, FileText, Factory, Wrench } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Segurança garantida",
    description: "Vidro temperado é até 5x mais resistente e, em caso de quebra, fragmenta-se em pequenos pedaços sem cortes.",
  },
  {
    icon: Clock,
    title: "Durabilidade superior",
    description: "Resistente a impactos, variações de temperatura e uso intenso no dia a dia.",
  },
  {
    icon: Sparkles,
    title: "Estética premium",
    description: "Acabamentos de alta qualidade em alumínio preto, branco, bronze e natural fosco.",
  },
  {
    icon: Ruler,
    title: "Sob medida",
    description: "Projetos personalizados para atender às necessidades específicas do seu espaço.",
  },
];

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Contato",
    description: "Envie medidas, fotos do vão e referências pelo WhatsApp.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Orçamento",
    description: "Receba um orçamento detalhado e personalizado.",
  },
  {
    number: "03",
    icon: Factory,
    title: "Produção",
    description: "Fabricamos sob medida com materiais de primeira linha.",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Instalação",
    description: "Instalação profissional com garantia de qualidade.",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-3 block">
            Por que escolher a RO Vidros
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Qualidade e confiança em cada projeto
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* How it Works */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Como funciona
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="relative inline-block mb-4">
                  <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
