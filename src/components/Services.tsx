
import { 
  Coffee, 
  Wifi, 
  Car, 
  Flower2, 
  Users, 
  Heart, 
  Clock, 
  Shield, 
  Sparkles,
  UserCheck
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: <Coffee className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />,
      title: "Café da Manhã",
      description: "Simples e de qualidade, com produtos frescos para começar bem o seu dia",
      features: ["Café fresco", "Pães e bolos", "Frutas da estação", "Produtos regionais"]
    },
    {
      icon: <Wifi className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />,
      title: "Wi-Fi Gratuito",
      description: "Internet de alta velocidade em todos os ambientes da pousada",
      features: ["Cobertura total", "Alta velocidade", "Sem limite de tempo", "Suporte técnico"]
    },
    {
      icon: <Car className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />,
      title: "Estacionamento",
      description: "Vagas seguras e gratuitas para todos os hóspedes",
      features: ["Vagas descobertas", "Segurança 24h", "Sem custo adicional", "Fácil acesso"]
    },
    {
      icon: <Flower2 className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />,
      title: "Jardim",
      description: "Espaço verde para relaxar e contemplar a natureza",
      features: ["Área verde", "Bancos para descanso", "Flores e plantas", "Ambiente tranquilo"]
    }
  ];

  const additionalServices = [
    {
      icon: <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />,
      title: "Limpeza dos Quartos",
      description: "Serviço diário de limpeza e organização"
    },
    {
      icon: <UserCheck className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />,
      title: "Troca de Roupas",
      description: "Troca regular de roupas de cama e banho"
    },
    {
      icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />,
      title: "Recepção Amigável",
      description: "Atendimento caloroso e personalizado"
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />,
      title: "Check-in Flexível",
      description: "Horários adaptados às suas necessidades"
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />,
      title: "Ambiente Seguro",
      description: "Local tranquilo e protegido"
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />,
      title: "Ideal para UFSCar",
      description: "Localização estratégica para universitários"
    }
  ];

  return (
    <section id="servicos" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-natural-50 to-earth-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 sm:mb-8"></div>
          <p className="font-body text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Oferecemos tudo o que você precisa para uma estadia confortável e acolhedora
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {mainServices.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-4 sm:mb-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  {service.icon}
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    <span className="leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12 animate-fade-in">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Serviços Inclusos
            </h3>
            <p className="font-body text-gray-600 max-w-2xl mx-auto px-4">
              Todos estes serviços estão incluídos na sua diária, sem custos adicionais
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="flex items-start p-3 sm:p-4 bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-lg hover:from-primary/10 hover:to-primary-light/10 transition-all duration-300"
              >
                <div className="mr-3 sm:mr-4 mt-1 flex-shrink-0">
                  {service.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-tight">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Focus on Target Audience */}
          <div className="bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-xl p-6 sm:p-8 text-center">
            <h4 className="font-display text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
              Foco no seu Público
            </h4>
            <p className="font-body text-gray-600 mb-4 sm:mb-6 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
              Especializados em atender <strong className="text-primary">professores</strong>, 
              <strong className="text-primary"> estudantes da UFSCar</strong>, 
              <strong className="text-primary"> representantes comerciais</strong> e 
              <strong className="text-primary"> profissionais</strong> que buscam 
              um ambiente tranquilo com <strong className="text-primary">bom atendimento</strong> e 
              <strong className="text-primary"> baixo custo</strong>.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-700">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                <span>Ambiente de estudo</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                <span>Preços acessíveis</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                <span>Localização estratégica</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                <span>Ambiente profissional</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
