
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <img 
                src="/imagens-uploads/7268abb6-4729-43aa-a7d8-6b3bd207062f.png" 
                alt="Nodsys Logo" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Nodsys</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Início
            </a>
            <a href="#servicos" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Serviços
            </a>
            <a href="#sobre" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Sobre
            </a>
            <a href="#contato" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Contato
            </a>
            <button 
              className="px-6 py-2 rounded-md font-medium transition-colors"
              style={{ backgroundColor: '#39ADBE', color: '#fafafa' }}
            >
              Iniciar Projeto
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                Início
              </a>
              <a href="#servicos" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                Serviços
              </a>
              <a href="#sobre" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                Sobre
              </a>
              <a href="#contato" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                Contato
              </a>
              <button 
                className="px-6 py-2 rounded-md font-medium transition-colors text-left"
                style={{ backgroundColor: '#39ADBE', color: '#fafafa' }}
              >
                Iniciar Projeto
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
