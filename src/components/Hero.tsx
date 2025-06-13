
import { Button } from '@/components/ui/button';
import { MapPin, Star, Users, Coffee, Wifi, Car, Flower } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/1ba8bdea-51f6-484e-a90c-08ffba8a2fd2.png)'
        }}
      ></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-20 hidden lg:block">
        <Flower className="w-24 h-24 text-white transform rotate-12" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 hidden lg:block">
        <Flower className="w-32 h-32 text-white transform -rotate-12" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="animate-fade-in">
            {/* Logo instead of title */}
            <div className="mb-8 flex justify-center">
              <img 
                src="/lovable-uploads/dd89f9af-141d-40fb-a234-d2fb17e9162a.png" 
                alt="Pousada Campina do Monte Alegre" 
                className="h-32 md:h-40 lg:h-48 w-auto drop-shadow-2xl"
              />
            </div>
            
            <p className="font-body text-xl md:text-2xl text-white mb-4 leading-relaxed drop-shadow-md">
              Aconchegante, acolhedora
            </p>
            
            <p className="font-body text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Proporciona o conforto e a tranquilidade que seus hóspedes buscam em suas estadias de trabalho ou lazer
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto">
              <div className="flex flex-col items-center p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
                <Users className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-medium text-gray-700">Atendimento Caloroso</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
                <Coffee className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-medium text-gray-700">Café Manhã</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
                <Wifi className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-medium text-gray-700">Wi-Fi</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
                <Car className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-medium text-gray-700">Estacionamento</span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center justify-center mb-8 text-white/90 drop-shadow-md">
              <MapPin className="w-5 h-5 mr-2 text-primary" />
              <span className="font-body">Campina do Monte Alegre - SP</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => window.open('https://wa.me/5511994200991', '_blank')}
                size="lg"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <img 
                  src="/lovable-uploads/0aba352a-0b5a-4bf7-a909-66f7907e2418.png" 
                  alt="WhatsApp" 
                  className="w-6 h-6 mr-2"
                />
                Reservar pelo WhatsApp
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-white/10"
              >
                Conhecer a Pousada
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center mt-8 gap-6 text-sm text-white/80 drop-shadow-md">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span>Avaliações positivas</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 text-primary mr-1" />
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
