import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#linha-vidro", label: "Vidro" },
  { href: "#linha-aluminio", label: "Alumínio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

const products = [
  { label: "Linha vidro", href: "#linha-vidro" },
  { label: "Linha alumínio", href: "#linha-aluminio" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#inicio" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="RO Vidros"
                width={120}
                height={48}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-background/70 text-sm text-pretty">
              Vidro temperado, espelhos e esquadrias de alumínio com execução cuidadosa e acabamento premium.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-xs tracking-widest uppercase mb-4">
              Navegação
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-xs tracking-widest uppercase mb-4">
              Produtos
            </h4>
            <ul className="flex flex-col gap-2">
              {products.map((product) => (
                <li key={product.href}>
                  <Link
                    href={product.href}
                    className="text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-xs tracking-widest uppercase mb-4">
              Contato
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                href="tel:+5511930111496"
                className="flex items-center gap-2 text-sm text-background/70 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                (11) 93011-1496
              </Link>
              <Link
                href="mailto:rovidros1000@gmail.com"
                className="flex items-center gap-2 text-sm text-background/70 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                rovidros1000@gmail.com
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              &copy; {new Date().getFullYear()} RO Vidros. Todos os direitos reservados.
            </p>
            <p className="text-background/60 text-sm">
              Acabamentos: Preto, Branco, Natural Fosco, Bronze
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
