import { Scale, FileText, Calculator, Briefcase } from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Ações Trabalhistas Individuais",
    description: "Defesa completa de direitos em demissões, verbas rescisórias e reconhecimento de vínculo empregatício.",
  },
  {
    icon: FileText,
    title: "Revisão de Contratos e Cargos",
    description: "Análise preventiva e correção de riscos em contratos de trabalho e classificações de cargo.",
  },
  {
    icon: Calculator,
    title: "Cálculos Trabalhistas",
    description: "Avaliação técnica precisa de horas extras, adicional noturno e indenizações devidas.",
  },
  {
    icon: Briefcase,
    title: "Consultoria para Empresas",
    description: "Orientação especializada para prevenir passivos trabalhistas e garantir conformidade legal.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 md:py-20 lg:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background -z-10"></div>
      
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-fade-in">
            <div className="inline-block glass px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm text-primary font-semibold mb-3 md:mb-4">
              Serviços
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 lg:mb-6">
              Como posso ajudar você
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluções jurídicas completas em Direito Trabalhista, 
              com foco em resultados e satisfação do cliente.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-card rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 transition-all duration-300 hover:scale-105 hover:bg-white/10 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 md:mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 text-primary">
                    <service.icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                </div>
                
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 lg:mb-4">
                  {service.title}
                </h3>
                
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
