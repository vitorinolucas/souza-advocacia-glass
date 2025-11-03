import { Scale, Linkedin, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent -z-10"></div>
      
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="glass-clean p-2 rounded-lg">
                  <Scale className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Fabricio Sousa</h3>
                  <p className="text-sm text-muted-foreground">Advocacia Trabalhista</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Defesa ética e estratégica dos seus direitos trabalhistas.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-clean w-10 h-10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="mailto:contato@fabriciosousa.adv.br"
                  className="glass-clean w-10 h-10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-clean w-10 h-10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-border/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>
                © {currentYear} Fabricio Sousa – Advocacia Trabalhista. Todos os direitos reservados.
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary transition-colors">
                  Termos de Uso
                </a>
                <span>|</span>
                <a href="#" className="hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
