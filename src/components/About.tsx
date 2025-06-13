
import { Heart, Shield, Coffee, Users, Wifi, Car, Flower2, TreePine } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const About = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Atendimento Acolhedor",
      description: "Recepção amigável e cuidado especial com cada hóspede"
    },
    {
      icon: <Coffee className="w-8 h-8 text-primary" />,
      title: "Café da Manhã",
      description: "Simples e de qualidade, para começar bem o dia"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Segurança",
      description: "Ambiente tranquilo e seguro para sua estadia"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Atendimento Caloroso",
      description: "Individual, duplo, triplo e casal com banheiro privativo"
    },
    {
      icon: <Wifi className="w-8 h-8 text-primary" />,
      title: "Wi-Fi Gratuito",
      description: "Internet de qualidade em todos os ambientes"
    },
    {
      icon: <Car className="w-8 h-8 text-primary" />,
      title: "Estacionamento",
      description: "Vaga garantida para seu veículo"
    }
  ];

  const images = [
    {
      src: "/lovable-uploads/area-externa/pousada.jpg",
      alt: "Vista geral da Pousada Campina do Monte Alegre"
    },
    {
      src: "/lovable-uploads/area-externa/frente.jpg",
      alt: "Fachada da pousada"
    },
    {
      src: "/lovable-uploads/area-externa/area-externa-05.jpg",
      alt: "Área externa da pousada"
    },

  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-natural-50 to-earth-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-4 opacity-10">
        <TreePine className="w-32 h-32 text-primary" />
      </div>
      <div className="absolute bottom-10 right-4 opacity-10">
        <Flower2 className="w-24 h-24 text-primary" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nossa História
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="font-body text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Uma pousada simples, acolhedora e confortável que proporciona o ambiente ideal 
            para professores, estudantes da UFSCar, representantes comerciais e profissionais 
            que buscam tranquilidade durante suas estadias.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="animate-fade-in">
            <h3 className="font-display text-3xl font-bold text-gray-800 mb-6">
              Ambiente Familiar e Acolhedor
            </h3>
            <div className="space-y-6 text-gray-600 font-body leading-relaxed">
              <p className="text-lg">
                Nossa pousada é conhecida pelo <strong className="text-primary">atendimento caloroso</strong> e 
                pela atmosfera tranquila que oferecemos. Somos o lar longe de casa para quem 
                visita Campina do Monte Alegre.
              </p>
              <p>
                Com foco em <strong className="text-primary">bom atendimento</strong> e 
                <strong className="text-primary"> baixo custo</strong>, atendemos especialmente 
                quem viaja a trabalho ou estuda, oferecendo um ambiente propício ao descanso 
                e à concentração.
              </p>
              <p>
                Nosso jardim e a proximidade com a natureza criam um ambiente único, onde 
                até mesmo nosso <strong className="text-primary">"Dog"</strong>, um gigante 
                e dócil dog alemão, faz parte da experiência especial que oferecemos.
              </p>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="animate-scale-in">
            <Carousel className="w-full max-w-md mx-auto">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-natural-200"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h4 className="font-semibold text-gray-800 mb-3 text-lg">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Localização Estratégica
            </h3>
            <p className="font-body text-lg text-gray-600 leading-relaxed mb-8">
              Estrategicamente localizada próxima à <strong className="text-primary">UFSCar</strong>, 
              nossa pousada é a escolha ideal para pais de alunos, professores visitantes e 
              profissionais que precisam de um local tranquilo e acessível para suas estadias.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                <span>Próximo à UFSCar</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                <span>Fácil acesso</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                <span>Ambiente tranquilo</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                <span>Estacionamento próprio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
