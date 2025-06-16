import { User, Users, Users2, Heart, Bed, Bath, Wifi, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Rooms = () => {
  const rooms = [
    {
      type: "Individual",
      icon: <User className="w-8 h-8 text-primary" />,
      description: "Perfeito para quem viaja sozinho e busca tranquilidade",
      features: ["1 Cama de solteiro", "Banheiro privativo", "Wi-Fi", "Mesa de trabalho"],
      ideal: "Ideal para estudantes e profissionais"
    },
    {
      type: "Duplo",
      icon: <Users2 className="w-8 h-8 text-primary" />,
      description: "Confortável para duas pessoas com camas separadas",
      features: ["2 Camas de solteiro", "Banheiro privativo", "Wi-Fi", "Mesa de trabalho"],
      ideal: "Perfeito para amigos ou colegas"
    },
    {
      type: "Triplo",
      icon: <Users className="w-8 h-8 text-primary" />,
      description: "Espaçoso para grupos pequenos ou famílias",
      features: ["3 Camas de solteiro", "Banheiro privativo", "Wi-Fi", "Ambiente familiar"],
      ideal: "Ideal para pequenas famílias"
    },
    {
      type: "Casal",
      icon: <Heart className="w-8 h-8 text-primary" />,
      description: "Romântico e aconchegante para casais",
      features: ["1 Cama de casal", "Banheiro privativo", "Wi-Fi", "Mesa de trabalho"],
      ideal: "Perfeito para casais"
    }
  ];

  const amenities = [
    { icon: <Bed className="w-6 h-6" />, text: "Roupa de cama limpa" },
    { icon: <Bath className="w-6 h-6" />, text: "Banheiro privativo" },
    { icon: <Wifi className="w-6 h-6" />, text: "Wi-Fi gratuito" },
    { icon: <Coffee className="w-6 h-6" />, text: "Café da manhã incluso" }
  ];

  return (
    <section id="quartos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nossos Quartos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="font-body text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            16 quartos confortáveis e bem equipados, pensados para oferecer o máximo 
            de conforto durante sua estadia
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {rooms.map((room, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-natural-50 to-earth-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  {room.icon}
                </div>
                <h3 className="font-display text-2xl font-bold text-gray-800 mb-2">
                  {room.type}
                </h3>
                <p className="text-sm text-primary font-semibold">
                  {room.ideal}
                </p>
              </div>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {room.description}
              </p>

              <ul className="space-y-3">
                {room.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Amenities Section */}
        <div className="bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-2xl p-8 md:p-12 animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="font-display text-3xl font-bold text-gray-800 mb-4">
              Comodidades Incluídas
            </h3>
            <p className="font-body text-gray-600">
              Tudo o que você precisa para uma estadia confortável
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {amenities.map((amenity, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm"
              >
                <div className="text-primary mb-3">
                  {amenity.icon}
                </div>
                <span className="text-gray-700 font-medium">
                  {amenity.text}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="font-body text-gray-600 mb-6 max-w-2xl mx-auto">
              Todos os quartos incluem limpeza diária, troca de roupas de cama e banho, 
              e o carinho especial da nossa equipe para garantir sua satisfação.
            </p>
            
            <Button 
              onClick={() => window.open('https://wa.me/5511994200991', '_blank')}
              size="lg"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Verificar Disponibilidade
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
