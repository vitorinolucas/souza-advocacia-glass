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
    <section id="services" className="py-20 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background -z-10"></div>
      
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block glass px-4 py-2 rounded-full text-sm text-primary font-semibold mb-4">
              Serviços
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Como posso ajudar você
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluções jurídicas completas em Direito Trabalhista, 
              com foco em resultados e satisfação do cliente.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-strong rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:bg-white/10 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary">
                    <service.icon className="w-7 h-7" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
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
