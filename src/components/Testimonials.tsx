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
    <section id="testimonials" className="py-20 md:py-32 relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block glass px-4 py-2 rounded-full text-sm text-primary font-semibold mb-4">
              Depoimentos
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O que meus clientes dizem
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Histórias reais de pessoas que tiveram seus direitos garantidos
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-strong rounded-2xl p-8 transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Quote className="w-10 h-10 text-primary/30 mb-6" />
                
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
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
