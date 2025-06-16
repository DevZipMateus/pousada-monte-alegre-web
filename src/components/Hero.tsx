
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Users, Flower, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [currentBgIndex, setBgCurrentIndex] = useState(0);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  
  // Imagens para o fundo do hero
  const heroBackgrounds = [
    { src: '/lovable-uploads/area-externa/frente.jpg', alt: 'Frente da Pousada' },
    { src: '/lovable-uploads/area-externa/pousada.jpg', alt: 'Pousada' },
    { src: '/lovable-uploads/58e1b315-a9f5-4165-8440-14af5b10e23c.png', alt: 'Vista Noturna da Pousada' },
    { src: '/lovable-uploads/07f1fe8d-13a2-4365-a58e-fbba8a1b33e5.png', alt: 'Fachada da Pousada' },
    { src: '/lovable-uploads/area-externa/area-externa-02.jpg', alt: 'Área Externa' }
  ];
  
  // Todas as imagens da galeria
  const allImages = [
    // Área Externa
    { src: '/lovable-uploads/area-externa/area-externa-02.jpg', alt: 'Área Externa 2' },
    { src: '/lovable-uploads/area-externa/area-externa-03.jpg', alt: 'Área Externa 3' },
    { src: '/lovable-uploads/area-externa/area-externa-04.jpg', alt: 'Área Externa 4' },
    { src: '/lovable-uploads/area-externa/area-externa-05.jpg', alt: 'Área Externa 5' },
    { src: '/lovable-uploads/area-externa/area-externa-06.jpg', alt: 'Área Externa 6' },
    { src: '/lovable-uploads/area-externa/area-externa-07.jpg', alt: 'Área Externa 7' },
    { src: '/lovable-uploads/area-externa/area-externa-08.jpg', alt: 'Área Externa 8' },
    { src: '/lovable-uploads/area-externa/area-externa-09.jpg', alt: 'Área Externa 9' },
    { src: '/lovable-uploads/area-externa/area-externa-10.jpg', alt: 'Área Externa 10' },
    { src: '/lovable-uploads/area-externa/frente.jpg', alt: 'Frente da Pousada' },
    { src: '/lovable-uploads/area-externa/mesa-externa-01.jpg', alt: 'Mesa Externa' },
    { src: '/lovable-uploads/area-externa/pousada.jpg', alt: 'Pousada' },
    { src: '/lovable-uploads/58e1b315-a9f5-4165-8440-14af5b10e23c.png', alt: 'Vista Noturna da Pousada' },
    { src: '/lovable-uploads/7d925a05-ae93-4235-a22c-6841d262dc37.png', alt: 'Placa Paraíso' },
    { src: '/lovable-uploads/07f1fe8d-13a2-4365-a58e-fbba8a1b33e5.png', alt: 'Fachada da Pousada' },
    { src: '/lovable-uploads/f477a638-a3e8-4b39-9eea-2ee76f6cc20b.png', alt: 'Área Externa com Árvores' },
    
    // Área Interna
    { src: '/lovable-uploads/area-interna/area-interna-01.jpg', alt: 'Área Interna 1' },
    { src: '/lovable-uploads/area-interna/area-interna-02.jpg', alt: 'Área Interna 2' },
    { src: '/lovable-uploads/area-interna/area-interna-03.jpg', alt: 'Área Interna 3' },
    { src: '/lovable-uploads/area-interna/area-interna-04.jpg', alt: 'Área Interna 4' },
    { src: '/lovable-uploads/area-interna/area-interna-05.jpg', alt: 'Área Interna 5' },
    { src: '/lovable-uploads/area-interna/banheiro-01.jpg', alt: 'Banheiro' },
    { src: '/lovable-uploads/1fe01332-ea88-47ba-8033-cef79572a913.png', alt: 'Entrada do Quarto' },
    { src: '/lovable-uploads/d72e5a3d-e118-465c-ac50-99cb604ea836.png', alt: 'Corredor Interno' },
    { src: '/lovable-uploads/4a0a0f17-6cc2-4cc2-900b-5b5dcd226c99.png', alt: 'Sala de Estar' },
    
    // Quartos
    { src: '/lovable-uploads/quartos/quarto-casal-01.jpg', alt: 'Quarto Casal 1' },
    { src: '/lovable-uploads/quartos/quarto-casal-02.jpg', alt: 'Quarto Casal 2' },
    { src: '/lovable-uploads/quartos/quarto-duas-camas-01.jpg', alt: 'Quarto Duas Camas 1' },
    { src: '/lovable-uploads/quartos/quarto-duas-camas-02.jpg', alt: 'Quarto Duas Camas 2' },
    { src: '/lovable-uploads/quartos/quarto-solteiro-01.jpg', alt: 'Quarto Solteiro 1' },
    { src: '/lovable-uploads/quartos/quarto-solteiro-02.jpg', alt: 'Quarto Solteiro 2' },
    { src: '/lovable-uploads/quartos/quarto-solteiro-03.jpg', alt: 'Quarto Solteiro 3' },
    { src: '/lovable-uploads/quartos/quarto-solteiro-04.jpg', alt: 'Quarto Solteiro 4' },
    { src: '/lovable-uploads/quartos/quarto-solteiro-05.jpg', alt: 'Quarto Solteiro 5' },
    { src: '/lovable-uploads/quartos/quarto-solteiro-06.jpg', alt: 'Quarto Solteiro 6' },
    { src: '/lovable-uploads/quartos/quartocasal.jpg', alt: 'Quarto Casal' },
    { src: '/lovable-uploads/quartos/quartosolteiro.jpg', alt: 'Quarto Solteiro' },
    { src: '/lovable-uploads/475c78b4-0d64-4688-9607-1a6f5ba3f64b.png', alt: 'Detalhe da Cama' },
    { src: '/lovable-uploads/6b4617ce-3faf-4142-b718-6f6fc30ffdeb.png', alt: 'Quarto Duplo com Duas Camas' },
    { src: '/lovable-uploads/f4c5de6d-3284-40b8-a93a-d7b9fa367c8b.png', alt: 'Quarto com Mesa de Trabalho' },
    { src: '/lovable-uploads/c14ca854-3883-4276-b9ef-6f3725200b90.png', alt: 'Quarto de Trabalho com Laptop' },
    { src: '/lovable-uploads/0ccbcb83-cb79-42e1-b478-ff659205212e.png', alt: 'Toalhas no Quarto' },
    { src: '/lovable-uploads/7dbd15f2-c7a8-4dff-a814-338660e5ad78.png', alt: 'Quarto Solteiro com Guarda-roupa' },
    { src: '/lovable-uploads/3b97a7e5-2e0d-4b62-b696-141a0d95df35.png', alt: 'Amenidades do Banheiro' },
    { src: '/lovable-uploads/ba5efb04-e283-4333-81be-804d1a6273d2.png', alt: 'Quarto Duplo com Mesa de Trabalho' }
  ];

  // Troca automática do fundo a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setBgCurrentIndex(prev => (prev + 1) % heroBackgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroBackgrounds.length]);

  // Troca automática da galeria a cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGalleryIndex(prev => (prev + 1) % allImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [allImages.length]);

  const nextGalleryImage = () => {
    setCurrentGalleryIndex(prev => (prev + 1) % allImages.length);
  };

  const prevGalleryImage = () => {
    setCurrentGalleryIndex(prev => (prev - 1 + allImages.length) % allImages.length);
  };

  const handleImageClick = () => {
    navigate('/galeria');
  };

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

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image carousel with optimization */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out" style={{
        backgroundImage: `url(${heroBackgrounds[currentBgIndex].src})`,
        willChange: 'transform'
      }}></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
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

            {/* Location */}
            <div className="flex items-center justify-center mb-6 sm:mb-8 text-white/90 drop-shadow-md px-4">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary flex-shrink-0" />
              <span className="font-body text-sm sm:text-base">Campina do Monte Alegre - SP</span>
            </div>

            {/* CTA Buttons - Stack on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 mb-8">
              <Button onClick={() => window.open('https://wa.me/5511994200991', '_blank')} size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <img src="/lovable-uploads/0aba352a-0b5a-4bf7-a909-66f7907e2418.png" alt="WhatsApp" className="w-5 h-5 sm:w-6 sm:h-6 mr-2" loading="eager" />
                Reservar pelo WhatsApp
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToAbout} className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-gray-800 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold backdrop-blur-sm bg-white/10">
                Conhecer a Pousada
              </Button>
            </div>

            {/* Trust indicators - Stack on small screens */}
            <div className="flex flex-col sm:flex-row items-center justify-center mb-12 gap-3 sm:gap-6 text-sm text-white/80 drop-shadow-md px-4">
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

      {/* Gallery Section Integrated */}
      <div className="container mx-auto px-4 relative z-10 pb-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 drop-shadow-lg">
            Nossa Galeria
          </h2>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Conheça nossos ambientes através de uma seleção especial de fotos
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative max-w-3xl mx-auto">
          <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden rounded-lg shadow-lg bg-gray-200">
            {/* Imagem principal */}
            <div 
              className="absolute inset-0 cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={handleImageClick}
            >
              <img
                src={allImages[currentGalleryIndex].src}
                alt={allImages[currentGalleryIndex].alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
              {/* Overlay com ícone de câmera */}
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                  <Camera className="w-6 h-6 md:w-8 md:h-8 text-gray-800" />
                </div>
              </div>
            </div>

            {/* Botões de navegação */}
            <button
              onClick={prevGalleryImage}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 md:p-3 shadow-lg transition-all duration-200 z-10"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-800" />
            </button>

            <button
              onClick={nextGalleryImage}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 md:p-3 shadow-lg transition-all duration-200 z-10"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-800" />
            </button>

            {/* Indicadores de posição */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {allImages.slice(0, 5).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGalleryIndex(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
                    currentGalleryIndex % 5 === index 
                      ? 'bg-white' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Informações da imagem */}
          <div className="text-center mt-4">
            <p className="text-white/80 text-sm mb-4 drop-shadow-md">
              {allImages[currentGalleryIndex].alt} ({currentGalleryIndex + 1} de {allImages.length})
            </p>
            
            <Button 
              onClick={handleImageClick}
              size="lg"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Ver Galeria Completa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
