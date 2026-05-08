import Link from "next/link";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-3 block">
            Entre em Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Vamos conversar sobre seu projeto
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Entre em contato pelo WhatsApp ou e-mail. Envie medidas, fotos do vão e referências para agilizar o orçamento.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
          {/* WhatsApp Card */}
          <Link
            href="https://wa.me/5511930111496?text=Olá! Gostaria de solicitar um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                <p className="text-sm text-muted-foreground mb-2">Resposta rápida</p>
                <p className="font-medium text-foreground">(11) 93011-1496</p>
                <p className="text-sm text-muted-foreground mt-2 group-hover:text-primary transition-colors flex items-center gap-1">
                  Clique para iniciar uma conversa
                  <ArrowRight className="w-4 h-4" />
                </p>
              </div>
            </div>
          </Link>

          {/* Email Card */}
          <Link
            href="mailto:rovidros1000@gmail.com"
            className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                <p className="text-sm text-muted-foreground mb-2">Para documentos e projetos</p>
                <p className="font-medium text-foreground">rovidros1000@gmail.com</p>
                <p className="text-sm text-muted-foreground mt-2 group-hover:text-primary transition-colors flex items-center gap-1">
                  Clique para enviar um e-mail
                  <ArrowRight className="w-4 h-4" />
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button asChild size="lg" className="font-semibold">
            <Link
              href="https://wa.me/5511930111496?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Solicitar Orçamento pelo WhatsApp
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
