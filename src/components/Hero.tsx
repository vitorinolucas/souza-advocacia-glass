import { Button } from "@/components/ui/button";
import { Scale, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional law office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="glass-strong p-4 rounded-full inline-block">
              <Scale className="w-12 h-12 text-primary" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Defendendo seus direitos trabalhistas com{" "}
            <span className="text-primary">ética</span>,{" "}
            <span className="text-primary">estratégia</span> e{" "}
            <span className="text-primary">resultados</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Sou o advogado <strong className="text-foreground">Fabricio Sousa</strong>, 
            especialista em causas trabalhistas — do início ao fim do processo, 
            você conta com suporte jurídico personalizado.
          </p>

          {/* CTA Button */}
          <Button 
            variant="hero" 
            size="lg" 
            onClick={scrollToContact}
            className="text-lg px-8 py-6"
          >
            Fale com o Advogado
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Casos Resolvidos</div>
            </div>
            <div className="glass p-6 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="glass p-6 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Taxa de Sucesso</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
