import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, User, Bed, Monitor, Bath, Shirt, TreePine, Archive } from 'lucide-react';

const Accommodations = () => {
  const coupleRoomImages = [
    '/lovable-uploads/quartos/quarto-casal-01.jpg',
    '/lovable-uploads/quartos/quarto-casal-02.jpg',
    '/lovable-uploads/quartos/quartocasal.jpg'
  ];

  const singleRoomImages = [
    '/lovable-uploads/quartos/quarto-solteiro-01.jpg',
    '/lovable-uploads/quartos/quarto-solteiro-02.jpg',
    '/lovable-uploads/quartos/quarto-solteiro-03.jpg',
    '/lovable-uploads/quartos/quarto-solteiro-04.jpg',
    '/lovable-uploads/quartos/quarto-solteiro-05.jpg',
    '/lovable-uploads/quartos/quarto-solteiro-06.jpg',
    '/lovable-uploads/quartos/quartosolteiro.jpg'
  ];

  const coupleAmenities = [
    { icon: <Bed className="w-5 h-5" />, text: "Cama de casal confortável" },
    { icon: <Monitor className="w-5 h-5" />, text: "Mesa de trabalho" },
    { icon: <Bath className="w-5 h-5" />, text: "Banheiro privativo" },
    { icon: <Shirt className="w-5 h-5" />, text: "Roupa de cama e toalhas" },
    { icon: <TreePine className="w-5 h-5" />, text: "Terraço com vista para o jardim" },
    { icon: <Archive className="w-5 h-5" />, text: "Guarda-roupa espaçoso" }
  ];

  const singleAmenities = [
    { icon: <Bed className="w-5 h-5" />, text: "Cama individual confortável" },
    { icon: <Monitor className="w-5 h-5" />, text: "Mesa de trabalho" },
    { icon: <Bath className="w-5 h-5" />, text: "Banheiro privativo" },
    { icon: <Shirt className="w-5 h-5" />, text: "Roupa de cama e toalhas" },
    { icon: <TreePine className="w-5 h-5" />, text: "Terraço com vista para o jardim" },
    { icon: <Archive className="w-5 h-5" />, text: "Guarda-roupa espaçoso" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary-light/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Conheça nossas Acomodações
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="font-body text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Nossos quartos foram pensados para oferecer uma experiência acolhedora e confortável. 
            Cada detalhe foi cuidadosamente planejado para que você se sinta em casa, com comodidades 
            que garantem uma estadia relaxante e tranquila, em perfeita harmonia com a natureza ao redor. 
            Convidamos você a conhecer mais e explorar as fotos de nossos quartos para descobrir o 
            ambiente perfeito para sua próxima estadia.
          </p>
        </div>
      </section>

      {/* Quartos de Casal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-12 h-12 text-primary mr-4" />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800">
                Quartos de Casal
              </h2>
            </div>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="font-body text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nossos quartos de casal são ideais para casais que buscam conforto e tranquilidade. 
              Com uma decoração aconchegante e todas as comodidades necessárias, eles oferecem o 
              ambiente perfeito para uma estadia romântica ou relaxante.
            </p>
          </div>

          {/* Images Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {coupleRoomImages.map((image, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <img 
                    src={image} 
                    alt={`Quarto de Casal ${index + 1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Amenities */}
          <div className="bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-2xl p-8">
            <h3 className="font-display text-2xl font-bold text-gray-800 mb-6 text-center">
              Comodidades
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {coupleAmenities.map((amenity, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-primary">
                    {amenity.icon}
                  </div>
                  <span className="text-gray-700 font-medium">
                    {amenity.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quartos de Solteiro */}
      <section className="py-20 bg-natural-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <User className="w-12 h-12 text-primary mr-4" />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800">
                Quartos de Solteiros
              </h2>
            </div>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="font-body text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nossos quartos de solteiro são perfeitos para quem busca um espaço aconchegante e funcional. 
              Com uma decoração agradável e todas as comodidades essenciais, eles proporcionam o ambiente 
              ideal para uma estadia confortável e tranquila.
            </p>
          </div>

          {/* Images Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {singleRoomImages.map((image, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <img 
                    src={image} 
                    alt={`Quarto de Solteiro ${index + 1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Amenities */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h3 className="font-display text-2xl font-bold text-gray-800 mb-6 text-center">
              Comodidades
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {singleAmenities.map((amenity, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-natural-50 rounded-lg">
                  <div className="text-primary">
                    {amenity.icon}
                  </div>
                  <span className="text-gray-700 font-medium">
                    {amenity.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Pronto para sua Estadia?
          </h3>
          <p className="font-body text-lg mb-8 max-w-2xl mx-auto">
            Reserve agora e garante o conforto e tranquilidade que você merece 
            na Pousada Campina do Monte Alegre.
          </p>
          <Button 
            onClick={() => window.open('https://wa.me/5511994200991', '_blank')}
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Reservar Agora
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Accommodations;
