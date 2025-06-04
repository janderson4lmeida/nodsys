
import { ArrowRight, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="inicio" className="pt-24 pb-16 bg-gradient-to-br from-[#fafafa] via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0 animate-fade-in">
            <div className="flex items-center mb-4 space-x-2">
              <MapPin className="w-5 h-5 text-green-600" />
              <span className="text-green-600 font-medium">Fortaleza, Ceará</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Fábrica de
              <span className="block bg-gradient-to-r from-green-600 via-green-500 to-teal-500 bg-clip-text text-transparent">
                Software
              </span>
              <span className="block text-4xl lg:text-5xl">Inovadora</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transformamos ideias em soluções digitais poderosas. Desenvolvemos ERPs, 
              sistemas web e mobile, além de estratégias de tráfego pago que impulsionam 
              seu negócio para o próximo nível.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-4 text-lg"
              >
                Começar Projeto
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg"
              >
                Ver Portfólio
              </Button>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Time de 5 especialistas</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <span>Startup em crescimento</span>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-green-400 via-green-500 to-teal-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/3cf8a56c-fb96-498b-8c04-2b7e5c8fa76f.png" 
                    alt="Team working" 
                    className="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-full"
                  />
                  <div className="absolute inset-0 bg-green-500 opacity-15 rounded-full mix-blend-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
