import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
    { src: '/lovable-uploads/quartos/quartosolteiro.jpg', alt: 'Quarto Solteiro' }
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

      {/* Modal para visualizar imagem ampliada */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Imagem ampliada"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
