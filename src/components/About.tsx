import { Target, Lightbulb, Rocket, Heart } from "lucide-react";
const About = () => {
  const values = [{
    icon: Target,
    title: "Foco no Cliente",
    description: "Cada projeto é desenvolvido pensando nas necessidades específicas do cliente."
  }, {
    icon: Lightbulb,
    title: "Inovação",
    description: "Utilizamos as mais modernas tecnologias para criar soluções únicas."
  }, {
    icon: Rocket,
    title: "Agilidade",
    description: "Entregamos projetos de qualidade dentro dos prazos estabelecidos."
  }, {
    icon: Heart,
    title: "Paixão",
    description: "Amamos o que fazemos e isso se reflete em cada linha de código."
  }];
  return <section id="sobre" className="py-20 bg-gradient-to-br from-[#fafafa] to-green-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Sobre a
              <span className="block bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Nodsys</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Somos uma startup de tecnologia nascida em Fortaleza, com a missão de 
              transformar ideias em soluções digitais inovadoras. Nossa equipe de 5 
              especialistas combina experiência técnica com criatividade para entregar 
              projetos que fazem a diferença.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Desde sistemas ERP complexos até campanhas de tráfego pago estratégicas, 
              oferecemos um portfólio completo de serviços digitais para empresas que 
              buscam crescer no mundo digital.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-gray-600">Projetos Entregues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">5</div>
                <div className="text-gray-600">Especialistas</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {value.description}
                </p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;