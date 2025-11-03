import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Ex-funcionária de empresa de tecnologia",
    content: "O Dr. Fabricio foi fundamental para recuperar meus direitos trabalhistas. Atendimento impecável e resultado excelente!",
  },
  {
    name: "João Santos",
    role: "Gerente de Recursos Humanos",
    content: "Consultoria precisa e estratégica. Nos ajudou a regularizar toda a parte trabalhista da empresa com segurança.",
  },
  {
    name: "Ana Costa",
    role: "Vendedora autônoma",
    content: "Profissional dedicado que me orientou em todo o processo. Consegui o reconhecimento do vínculo empregatício!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 md:py-20 lg:py-32 relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-fade-in">
            <div className="inline-block glass px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm text-primary font-semibold mb-3 md:mb-4">
              Depoimentos
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 lg:mb-6">
              O que meus clientes dizem
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Histórias reais de pessoas que tiveram seus direitos garantidos
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary/30 mb-4 md:mb-6" />
                
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-border pt-3 md:pt-4">
                  <p className="text-sm md:text-base font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
