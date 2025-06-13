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
      icon: <Coffee className="w-12 h-12 text-primary" />,
      title: "Café da Manhã",
      description: "Simples e de qualidade, com produtos frescos para começar bem o seu dia",
      features: ["Café fresco", "Pães e bolos", "Frutas da estação", "Produtos regionais"]
    },
    {
      icon: <Wifi className="w-12 h-12 text-primary" />,
      title: "Wi-Fi Gratuito",
      description: "Internet de alta velocidade em todos os ambientes da pousada",
      features: ["Cobertura total", "Alta velocidade", "Sem limite de tempo", "Suporte técnico"]
    },
    {
      icon: <Car className="w-12 h-12 text-primary" />,
      title: "Estacionamento",
      description: "Vagas seguras e gratuitas para todos os hóspedes",
      features: ["Vagas descobertas", "Segurança 24h", "Sem custo adicional", "Fácil acesso"]
    },
    {
      icon: <Flower2 className="w-12 h-12 text-primary" />,
      title: "Jardim",
      description: "Espaço verde para relaxar e contemplar a natureza",
      features: ["Área verde", "Bancos para descanso", "Flores e plantas", "Ambiente tranquilo"]
    }
  ];

  const additionalServices = [
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Limpeza dos Quartos",
      description: "Serviço diário de limpeza e organização"
    },
    {
      icon: <UserCheck className="w-8 h-8 text-primary" />,
      title: "Troca de Roupas",
      description: "Troca regular de roupas de cama e banho"
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Recepção Amigável",
      description: "Atendimento caloroso e personalizado"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Check-in Flexível",
      description: "Horários adaptados às suas necessidades"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Ambiente Seguro",
      description: "Local tranquilo e protegido"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Ideal para UFSCar",
      description: "Localização estratégica para universitários"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-natural-50 to-earth-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="font-body text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos tudo o que você precisa para uma estadia confortável e acolhedora
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {mainServices.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Serviços Inclusos
            </h3>
            <p className="font-body text-gray-600 max-w-2xl mx-auto">
              Todos estes serviços estão incluídos na sua diária, sem custos adicionais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="flex items-start p-4 bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-lg hover:from-primary/10 hover:to-primary-light/10 transition-all duration-300"
              >
                <div className="mr-4 mt-1">
                  {service.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Focus on Target Audience */}
          <div className="bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-xl p-8 text-center">
            <h4 className="font-display text-2xl font-bold text-gray-800 mb-4">
              Foco no seu Público
            </h4>
            <p className="font-body text-gray-600 mb-6 max-w-3xl mx-auto">
              Especializados em atender <strong className="text-primary">professores</strong>, 
              <strong className="text-primary"> estudantes da UFSCar</strong>, 
              <strong className="text-primary"> representantes comerciais</strong> e 
              <strong className="text-primary"> profissionais</strong> que buscam 
              um ambiente tranquilo com <strong className="text-primary">bom atendimento</strong> e 
              <strong className="text-primary"> baixo custo</strong>.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                <span>Ambiente de estudo</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                <span>Preços acessíveis</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                <span>Localização estratégica</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
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
