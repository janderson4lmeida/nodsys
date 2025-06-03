
import { Database, Globe, Smartphone, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Database,
      title: "Sistemas ERP",
      description: "Soluções completas de gestão empresarial para otimizar processos e aumentar a produtividade do seu negócio.",
      features: ["Gestão Financeira", "Controle de Estoque", "Recursos Humanos", "Relatórios Avançados"]
    },
    {
      icon: Globe,
      title: "Desenvolvimento Web",
      description: "Websites e aplicações web modernas, responsivas e otimizadas para performance e conversão.",
      features: ["Sites Institucionais", "E-commerce", "Dashboards", "APIs RESTful"]
    },
    {
      icon: Smartphone,
      title: "Apps Mobile",
      description: "Aplicativos nativos e híbridos para iOS e Android que oferecem experiências excepcionais aos usuários.",
      features: ["iOS & Android", "React Native", "UI/UX Design", "Publicação nas Stores"]
    },
    {
      icon: TrendingUp,
      title: "Tráfego Pago",
      description: "Estratégias de marketing digital e campanhas de tráfego pago para maximizar seu ROI e alcançar mais clientes.",
      features: ["Google Ads", "Facebook Ads", "Analytics", "Otimização de Conversão"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossos
            <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent"> Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas para transformar sua empresa digitalmente, 
            desde o desenvolvimento até a estratégia de marketing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6 text-center">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
