import { CheckCircle } from "lucide-react";
import fabricioPhoto from "@/assets/fabricio.png";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative animate-slide-up">
              <div className="glass-strong rounded-2xl p-2 overflow-hidden">
                <img 
                  src={fabricioPhoto} 
                  alt="Fabricio Sousa - Advogado Trabalhista" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            </div>

            {/* Content Side */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="inline-block glass px-4 py-2 rounded-full text-sm text-primary font-semibold mb-4">
                Sobre Mim
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Experiência e dedicação ao seu lado
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Com ampla experiência no <strong className="text-foreground">Direito Trabalhista</strong>, 
                ajudo trabalhadores e empresas a resolverem conflitos de forma justa e eficiente.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Minha missão é garantir que cada cliente tenha seus direitos respeitados 
                com <strong className="text-foreground">clareza</strong> e{" "}
                <strong className="text-foreground">segurança jurídica</strong>.
              </p>

              {/* Highlights */}
              <div className="space-y-4 pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Atendimento Humanizado</h3>
                    <p className="text-muted-foreground">
                      Cada caso é único e merece atenção personalizada
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Especialização Comprovada</h3>
                    <p className="text-muted-foreground">
                      Anos de experiência focada em Direito do Trabalho
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Acompanhamento Transparente</h3>
                    <p className="text-muted-foreground">
                      Respostas rápidas e clareza em cada etapa do processo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
