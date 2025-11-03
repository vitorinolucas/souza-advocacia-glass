import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    // Aqui você pode integrar com um serviço de email ou backend
    toast.success("Mensagem enviada com sucesso! Retornarei em breve.");
    
    // Limpar formulário
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-12 md:py-20 lg:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background -z-10"></div>
      
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-fade-in">
            <div className="inline-block glass px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm text-primary font-semibold mb-3 md:mb-4">
              Contato
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 lg:mb-6">
              Pronto para resolver seu caso trabalhista?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Envie uma mensagem e receba uma avaliação inicial gratuita
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 md:space-y-8 animate-slide-up">
              <div className="glass-card rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6">Entre em contato</h3>
                
                <div className="space-y-4 md:space-y-6">
                  <a 
                    href="mailto:contato@fabriciosousa.adv.br" 
                    className="flex items-center gap-3 md:gap-4 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10">
                      <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-muted-foreground">Email</p>
                      <p className="text-sm md:text-base font-medium text-foreground">contato@fabriciosousa.adv.br</p>
                    </div>
                  </a>

                  <a 
                    href="tel:+5511999999999" 
                    className="flex items-center gap-3 md:gap-4 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-muted-foreground">Telefone</p>
                      <p className="text-sm md:text-base font-medium text-foreground">(11) 99999-9999</p>
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/5511999999999" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 md:gap-4 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10">
                      <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-muted-foreground">WhatsApp</p>
                      <p className="text-sm md:text-base font-medium text-foreground">(11) 99999-9999</p>
                    </div>
                  </a>
                </div>

                <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border">
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    Atendimento de segunda a sexta, das 9h às 18h.
                    Respondo todas as mensagens em até 24 horas.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <form onSubmit={handleSubmit} className="glass-card rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2">
                    Nome *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    required
                    className="bg-background/50 text-sm md:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                    className="bg-background/50 text-sm md:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2">
                    Telefone / WhatsApp
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    className="bg-background/50 text-sm md:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2">
                    Descrição do caso *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte um pouco sobre sua situação..."
                    required
                    rows={4}
                    className="bg-background/50 resize-none text-sm md:text-base"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full text-sm md:text-base">
                  Enviar mensagem
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  * Campos obrigatórios
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
