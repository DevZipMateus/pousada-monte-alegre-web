import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { X, ZoomIn, ZoomOut } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  // Imagens da área externa
  const areaExternaImages = [
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
    { src: '/lovable-uploads/f477a638-a3e8-4b39-9eea-2ee76f6cc20b.png', alt: 'Área Externa com Árvores' }
  ];

  // Imagens da área interna
  const areaInternaImages = [
    { src: '/lovable-uploads/area-interna/area-interna-01.jpg', alt: 'Área Interna 1' },
    { src: '/lovable-uploads/area-interna/area-interna-02.jpg', alt: 'Área Interna 2' },
    { src: '/lovable-uploads/area-interna/area-interna-03.jpg', alt: 'Área Interna 3' },
    { src: '/lovable-uploads/area-interna/area-interna-04.jpg', alt: 'Área Interna 4' },
    { src: '/lovable-uploads/area-interna/area-interna-05.jpg', alt: 'Área Interna 5' },
    { src: '/lovable-uploads/area-interna/banheiro-01.jpg', alt: 'Banheiro' },
    { src: '/lovable-uploads/1fe01332-ea88-47ba-8033-cef79572a913.png', alt: 'Entrada do Quarto' },
    { src: '/lovable-uploads/d72e5a3d-e118-465c-ac50-99cb604ea836.png', alt: 'Corredor Interno' },
    { src: '/lovable-uploads/4a0a0f17-6cc2-4cc2-900b-5b5dcd226c99.png', alt: 'Sala de Estar' }
  ];

  // Imagens dos quartos
  const quartosImages = [
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

  const ImageGrid = ({ images }: { images: { src: string; alt: string }[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {images.map((image, index) => (
        <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-0">
            <AspectRatio ratio={4/3}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedImage(image.src)}
              />
            </AspectRatio>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedImage(null);
      setIsZoomed(false);
    }
  };

  const handleZoomToggle = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Galeria de Fotos
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça nossas instalações e ambientes acolhedores
            </p>
          </div>

          <Tabs defaultValue="area-externa" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="area-externa" className="text-sm md:text-base">
                Área Externa
              </TabsTrigger>
              <TabsTrigger value="area-interna" className="text-sm md:text-base">
                Área Interna
              </TabsTrigger>
              <TabsTrigger value="quartos" className="text-sm md:text-base">
                Quartos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="area-externa" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-display font-semibold text-gray-900 mb-2">
                  Área Externa
                </h2>
                <p className="text-gray-600">
                  Nossos jardins e espaços externos para relaxar
                </p>
              </div>
              <ImageGrid images={areaExternaImages} />
            </TabsContent>

            <TabsContent value="area-interna" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-display font-semibold text-gray-900 mb-2">
                  Área Interna
                </h2>
                <p className="text-gray-600">
                  Nossos ambientes internos aconchegantes
                </p>
              </div>
              <ImageGrid images={areaInternaImages} />
            </TabsContent>

            <TabsContent value="quartos" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-display font-semibold text-gray-900 mb-2">
                  Quartos
                </h2>
                <p className="text-gray-600">
                  Conforto e tranquilidade em nossos quartos
                </p>
              </div>
              <ImageGrid images={quartosImages} />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Modal responsivo para visualizar imagem ampliada */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={handleModalClick}
        >
          <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-4 md:p-8">
            {/* Botões de controle */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 flex gap-2">
              <button
                onClick={handleZoomToggle}
                className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-all duration-200"
                aria-label={isZoomed ? "Diminuir zoom" : "Aumentar zoom"}
              >
                {isZoomed ? <ZoomOut className="w-4 h-4 sm:w-5 sm:h-5" /> : <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
              <button
                onClick={() => {
                  setSelectedImage(null);
                  setIsZoomed(false);
                }}
                className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-all duration-200"
                aria-label="Fechar"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Container da imagem */}
            <div className={`
              relative transition-all duration-300 ease-in-out
              ${isZoomed 
                ? 'w-full h-full overflow-auto' 
                : 'max-w-[95vw] max-h-[95vh] sm:max-w-[90vw] sm:max-h-[90vh] md:max-w-[85vw] md:max-h-[85vh]'
              }
            `}>
              <img
                src={selectedImage}
                alt="Imagem ampliada"
                className={`
                  transition-all duration-300 ease-in-out
                  ${isZoomed 
                    ? 'w-auto h-auto min-w-full min-h-full object-contain cursor-move' 
                    : 'w-full h-full object-contain cursor-pointer'
                  }
                `}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!isZoomed) handleZoomToggle();
                }}
                style={{
                  maxWidth: isZoomed ? 'none' : '100%',
                  maxHeight: isZoomed ? 'none' : '100%',
                }}
              />
            </div>

            {/* Indicador de toque no mobile */}
            {!isZoomed && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xs sm:text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full sm:hidden">
                Toque para ampliar
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
