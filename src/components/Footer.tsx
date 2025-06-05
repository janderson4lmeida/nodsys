import { MapPin, Mail, Phone, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <img 
                  src="/imagens-uploads/7268abb6-4729-43aa-a7d8-6b3bd207062f.png" 
                  alt="Nodsys Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Nodsys</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transformamos ideias em soluções digitais inovadoras. 
              Sua fábrica de software em Fortaleza.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Fortaleza, Ceará - Brasil</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Sistemas ERP</li>
              <li>Desenvolvimento Web</li>
              <li>Apps Mobile</li>
              <li>Tráfego Pago</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contato@nodesys.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(85) 9 9286-5830</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © 2024 Nodysys. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Redes Sociais:</span>
              <div className="flex space-x-3">
                <a 
                  href="https://www.linkedin.com/in/nodsys-systems-294595369/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-gray-400 hover:text-white" />
                </a>
                <a 
                  href="https://www.instagram.com/nod.sys/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-gray-400 hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
