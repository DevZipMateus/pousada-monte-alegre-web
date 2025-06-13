
import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <a href="tel:+5511994200991" className="flex items-center gap-1 hover:text-primary-light transition-colors">
              <Phone className="w-4 h-4" />
              (11) 99420-0991
            </a>
            <a href="mailto:lcrochel@gmail.com" className="flex items-center gap-1 hover:text-primary-light transition-colors">
              <Mail className="w-4 h-4" />
              lcrochel@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <MapPin className="w-3 h-3" />
            Rua Marcelo Vieira Ramos, 82 - Campina do Monte Alegre
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <img 
                  src="/lovable-uploads/dd89f9af-141d-40fb-a234-d2fb17e9162a.png" 
                  alt="Pousada Campina do Monte Alegre" 
                  className="h-16 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/"
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Início
              </Link>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('quartos')}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Quartos
              </button>
              <Link 
                to="/acomodacoes"
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Acomodações
              </Link>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Serviços
              </button>
              <Link 
                to="/galeria"
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Galeria
              </Link>
              <button 
                onClick={() => scrollToSection('depoimentos')}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Contato
              </button>
            </nav>

            {/* CTA Button Desktop */}
            <div className="hidden md:block">
              <Button 
                onClick={() => window.open('https://wa.me/5511994200991', '_blank')}
                className="bg-primary hover:bg-primary-dark text-white px-6 py-2"
              >
                Reservar Agora
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-4 space-y-4">
              <Link 
                to="/"
                className="block w-full text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('quartos')}
                className="block w-full text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
              >
                Quartos
              </button>
              <Link 
                to="/acomodacoes"
                className="block w-full text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Acomodações
              </Link>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="block w-full text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
              >
                Serviços
              </button>
              <Link 
                to="/galeria"
                className="block w-full text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Galeria
              </Link>
              <button 
                onClick={() => scrollToSection('depoimentos')}
                className="block w-full text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
              >
                Contato
              </button>
              <Button 
                onClick={() => window.open('https://wa.me/5511994200991', '_blank')}
                className="w-full bg-primary hover:bg-primary-dark text-white mt-4"
              >
                Reservar Agora
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
