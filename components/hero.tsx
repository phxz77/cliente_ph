import Image from "next/image";
import Link from "next/link";
import { Shield, Sparkles, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Shield, label: "Segurança e resistência" },
  { icon: Sparkles, label: "Acabamentos premium" },
  { icon: Ruler, label: "Projetos sob medida" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
          alt="Interior moderno com vidros temperados"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-2xl">
          {/* Logo Badge */}
          <div className="mb-8">
            <Image
              src="/logo.png"
              alt="RO Vidros"
              width={140}
              height={56}
              className="h-14 w-auto"
            />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
            Elegância e transparência para seu projeto
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-xl text-pretty">
            Soluções sob medida para ambientes residenciais e comerciais:
            janelas, portas, box, guarda-corpos, escadas e espelhos.
          </p>

          {/* Features Pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="flex items-center gap-2 bg-secondary/80 backdrop-blur-sm text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium"
              >
                <feature.icon className="w-4 h-4" />
                {feature.label}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button asChild size="lg" className="font-semibold">
              <Link
                href="https://wa.me/5511930111496?text=Olá! Gostaria de solicitar um orçamento."
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Orçamento
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-semibold bg-background/50 backdrop-blur-sm">
              <Link href="#produtos">Ver Produtos</Link>
            </Button>
          </div>

          {/* Helper Text */}
          <p className="text-sm text-muted-foreground">
            Envie medidas, fotos do vão e referências para agilizar o orçamento.
          </p>
        </div>
      </div>
    </section>
  );
}
