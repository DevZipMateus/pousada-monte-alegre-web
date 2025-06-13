
import { Button } from '@/components/ui/button';
import { MapPin, Star, Users, Coffee, Wifi, Car, Flower } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-natural-100/80 to-earth-100/60"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-20 hidden lg:block">
        <Flower className="w-24 h-24 text-primary transform rotate-12" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 hidden lg:block">
        <Flower className="w-32 h-32 text-primary-light transform -rotate-12" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="animate-fade-in">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6">
              Pousada Campina do
              <span className="text-primary block">Monte Alegre</span>
            </h1>
            
            <p className="font-body text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed">
              Aconchegante, acolhedora
            </p>
            
            <p className="font-body text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Proporciona o conforto e a tranquilidade que seus hóspedes buscam em suas estadias de trabalho ou lazer
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto">
              <div className="flex flex-col items-center p-4 bg-white/80 rounded-lg shadow-sm">
                <Users className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-medium text-gray-700">16 Quartos</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white/80 rounded-lg shadow-sm">
                <Coffee className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-medium text-gray-700">Café Manhã</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white/80 rounded-lg shadow-sm">
                <Wifi className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-medium text-gray-700">Wi-Fi</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white/80 rounded-lg shadow-sm">
                <Car className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-medium text-gray-700">Estacionamento</span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center justify-center mb-8 text-gray-600">
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
                Reservar pelo WhatsApp
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold"
              >
                Conhecer a Pousada
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center mt-8 gap-6 text-sm text-gray-600">
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
