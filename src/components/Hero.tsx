
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Users, Flower, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  
  const images = ['/lovable-uploads/1ba8bdea-51f6-484e-a90c-08ffba8a2fd2.png'];
  
  // Imagens da galeria para exibir na seção hero
  const galleryImages = [
    { src: '/lovable-uploads/area-externa/area-externa-02.jpg', alt: 'Área Externa 2' },
    { src: '/lovable-uploads/area-externa/area-externa-03.jpg', alt: 'Área Externa 3' },
    { src: '/lovable-uploads/quartos/quarto-casal-01.jpg', alt: 'Quarto Casal 1' },
    { src: '/lovable-uploads/quartos/quarto-solteiro-01.jpg', alt: 'Quarto Solteiro 1' },
    { src: '/lovable-uploads/area-interna/area-interna-01.jpg', alt: 'Área Interna 1' },
    { src: '/lovable-uploads/area-externa/frente.jpg', alt: 'Frente da Pousada' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Troca automática da galeria a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGalleryIndex(prev => (prev + 1) % galleryImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [galleryImages.length]);

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

  const nextGalleryImage = () => {
    setCurrentGalleryIndex(prev => (prev + 1) % galleryImages.length);
  };

  const prevGalleryImage = () => {
    setCurrentGalleryIndex(prev => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleGalleryClick = () => {
    navigate('/galeria');
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image carousel with optimization */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out" style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        willChange: 'transform'
      }}></div>
      
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
        <div className="text-center max-w-6xl mx-auto">
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

            {/* Seção Nossa Galeria integrada */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 drop-shadow-lg">
                Nossa Galeria
              </h2>
              
              {/* Carrossel da galeria */}
              <div className="relative max-w-3xl mx-auto">
                <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden rounded-lg shadow-lg bg-gray-200">
                  {/* Imagem principal da galeria */}
                  <div 
                    className="absolute inset-0 cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={handleGalleryClick}
                  >
                    <img
                      src={galleryImages[currentGalleryIndex].src}
                      alt={galleryImages[currentGalleryIndex].alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    
                    {/* Overlay com ícone de câmera */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                        <Camera className="w-6 h-6 text-gray-800" />
                      </div>
                    </div>
                  </div>

                  {/* Botões de navegação da galeria */}
                  <button
                    onClick={prevGalleryImage}
                    className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 shadow-lg transition-all duration-200 z-10"
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-800" />
                  </button>

                  <button
                    onClick={nextGalleryImage}
                    className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 shadow-lg transition-all duration-200 z-10"
                    aria-label="Próxima imagem"
                  >
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-800" />
                  </button>

                  {/* Indicadores de posição da galeria */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                    {galleryImages.slice(0, 6).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentGalleryIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          currentGalleryIndex === index 
                            ? 'bg-white' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Ir para imagem ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Informações da galeria */}
                <div className="text-center mt-4">
                  <p className="text-white/90 text-sm md:text-base mb-4 drop-shadow-md">
                    {galleryImages[currentGalleryIndex].alt} ({currentGalleryIndex + 1} de {galleryImages.length})
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center justify-center mb-6 sm:mb-8 text-white/90 drop-shadow-md px-4">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary flex-shrink-0" />
              <span className="font-body text-sm sm:text-base">Campina do Monte Alegre - SP</span>
            </div>

            {/* CTA Buttons - Stack on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 mb-6">
              <Button onClick={() => window.open('https://wa.me/5511994200991', '_blank')} size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <img src="/lovable-uploads/0aba352a-0b5a-4bf7-a909-66f7907e2418.png" alt="WhatsApp" className="w-5 h-5 sm:w-6 sm:h-6 mr-2" loading="eager" />
                Reservar pelo WhatsApp
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToAbout} className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-gray-800 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold backdrop-blur-sm bg-white/10">
                Conhecer a Pousada
              </Button>
              <Button 
                onClick={handleGalleryClick}
                variant="outline"
                size="lg" 
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-gray-800 px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-semibold backdrop-blur-sm bg-white/10"
              >
                Ver Galeria Completa
              </Button>
            </div>

            {/* Trust indicators - Stack on small screens */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-white/80 drop-shadow-md px-4">
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
