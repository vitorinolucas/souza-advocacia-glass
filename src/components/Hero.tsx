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
      <div className="container relative z-10 px-4 py-12 md:py-16 lg:py-20 mx-auto animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="mb-6 md:mb-8 flex justify-center">
            <div className="glass-clean p-3 md:p-4 rounded-full inline-block">
              <Scale className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Defendendo seus direitos trabalhistas com{" "}
            <span className="text-primary">ética</span>,{" "}
            <span className="text-primary">estratégia</span> e{" "}
            <span className="text-primary">resultados</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 lg:mb-10 max-w-2xl mx-auto">
            Sou o advogado <strong className="text-foreground">Fabricio Sousa</strong>, 
            especialista em causas trabalhistas — do início ao fim do processo, 
            você conta com suporte jurídico personalizado.
          </p>

          {/* CTA Button */}
          <Button 
            variant="hero" 
            size="lg" 
            onClick={scrollToContact}
            className="text-base md:text-lg px-6 py-4 md:px-8 md:py-6"
          >
            Fale com o Advogado
            <ArrowDown className="ml-2 h-4 w-4 md:h-5 md:w-5" />
          </Button>

          {/* Trust Indicators */}
          <div className="mt-8 md:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
            <div className="glass-clean p-4 md:p-5 lg:p-6 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">100+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Casos Resolvidos</div>
            </div>
            <div className="glass-clean p-4 md:p-5 lg:p-6 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">15+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="glass-clean p-4 md:p-5 lg:p-6 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">98%</div>
              <div className="text-xs md:text-sm text-muted-foreground">Taxa de Sucesso</div>
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
