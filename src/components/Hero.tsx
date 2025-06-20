import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Users, Coffee, Wifi, Car, Flower, Heart } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/lovable-uploads/1ba8bdea-51f6-484e-a90c-08ffba8a2fd2.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % images.length);
    }, 5000); // Troca a cada 5 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToAbout = () => {
    const element = document.getElementById('sobre');
    if (element) {
      const headerHeight = 100;
      const offset = 20;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navigateToGallery = () => {
    navigate('/galeria');
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image carousel with optimization */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out" 
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          willChange: 'transform' // Optimize for animations
        }}
      ></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Decorative elements - hidden on mobile for performance */}
      <div className="absolute top-20 left-10 opacity-20 hidden xl:block">
        <Flower className="w-24 h-24 text-white transform rotate-12" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 hidden xl:block">
        <Flower className="w-32 h-32 text-white transform -rotate-12" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="animate-fade-in">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg leading-tight">
              Pousada Campina do
              <span className="text-primary block">Monte Alegre</span>
            </h1>
            
            <p className="font-body text-lg sm:text-xl md:text-2xl text-white mb-3 sm:mb-4 leading-relaxed drop-shadow-md px-2">
              Aconchegante, acolhedora
            </p>
            
            <p className="font-body text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md px-4">
              Proporciona o conforto e a tranquilidade que seus hóspedes buscam em suas estadias de trabalho ou lazer
            </p>

            {/* Features Grid - Optimized for mobile */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              <div className="flex flex-col items-center p-2 sm:p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm font-medium text-gray-700 text-center leading-tight">Atendimento caloroso</span>
              </div>
              <div className="flex flex-col items-center p-2 sm:p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
                <Coffee className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm font-medium text-gray-700 text-center leading-tight">Café Manhã</span>
              </div>
              <div className="flex flex-col items-center p-2 sm:p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
                <Wifi className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm font-medium text-gray-700 text-center leading-tight">Wi-Fi</span>
              </div>
              <div className="flex flex-col items-center p-2 sm:p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
                <Car className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm font-medium text-gray-700 text-center leading-tight">Estacionamento</span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center justify-center mb-6 sm:mb-8 text-white/90 drop-shadow-md px-4">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary flex-shrink-0" />
              <span className="font-body text-sm sm:text-base">Campina do Monte Alegre - SP</span>
            </div>

            {/* CTA Buttons - Stack on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <Button 
                onClick={() => window.open('https://wa.me/5511994200991', '_blank')} 
                size="lg" 
                className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <img src="/lovable-uploads/0aba352a-0b5a-4bf7-a909-66f7907e2418.png" alt="WhatsApp" className="w-5 h-5 sm:w-6 sm:h-6 mr-2" loading="eager" />
                Reservar pelo WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={navigateToGallery} 
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-gray-800 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold backdrop-blur-sm bg-white/10"
              >
                Galeria
              </Button>
            </div>

            {/* Trust indicators - Stack on small screens */}
            <div className="flex flex-col sm:flex-row items-center justify-center mt-6 sm:mt-8 gap-3 sm:gap-6 text-sm text-white/80 drop-shadow-md px-4">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-1 flex-shrink-0" />
                <span>Avaliações positivas</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 text-primary mr-1 flex-shrink-0" />
                <span>Ideal para UFSCar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
