import { Phone, Mail, MapPin, Clock, MessageCircle, Car, Wifi, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Telefone/WhatsApp",
      content: "(11) 99420-0991",
      action: () => window.open('tel:+5511994200991', '_blank')
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "E-mail",
      content: "lcrochel@gmail.com",
      action: () => window.open('mailto:lcrochel@gmail.com', '_blank')
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Endereço",
      content: "R. Marcelo Viêira Ramos, 82\nAraçatubinha, Campina do Monte Alegre - SP\nCEP 18245-000",
      action: () => window.open('https://maps.app.goo.gl/eJ3MD7eqtT3HEYFRA', '_blank')
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Atendimento",
      content: "Das 8h às 22h\n7 dias por semana",
      action: null
    }
  ];

  const quickInfo = [
    { icon: <Car className="w-5 h-5" />, text: "Estacionamento gratuito" },
    { icon: <Wifi className="w-5 h-5" />, text: "Wi-Fi em todos os quartos" },
    { icon: <Coffee className="w-5 h-5" />, text: "Café da manhã incluso" },
    { icon: <MapPin className="w-5 h-5" />, text: "Próximo à UFSCar" }
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-natural-50 to-earth-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="font-body text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para recebê-lo! Entre em contato conosco para fazer sua reserva 
            ou esclarecer qualquer dúvida
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="font-display text-3xl font-bold text-gray-800 mb-8">
              Informações de Contato
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  onClick={info.action || undefined}
                  className={`flex items-start p-6 bg-white rounded-xl shadow-md ${info.action ? 'hover:shadow-lg cursor-pointer' : ''} transition-all duration-300`}
                >
                  <div className="bg-primary/10 rounded-full p-3 mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 whitespace-pre-line">
                      {info.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Info */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-display text-xl font-bold text-gray-800 mb-4">
                Informações Rápidas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {quickInfo.map((info, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-700">
                    <div className="text-primary mr-3">
                      {info.icon}
                    </div>
                    <span>{info.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map and CTA */}
          <div className="animate-fade-in">
            <h3 className="font-display text-3xl font-bold text-gray-800 mb-8">
              COMO CHEGAR - LOCALIZAÇÃO
            </h3>
            <p className="font-body text-lg text-gray-600 mb-6 leading-relaxed">
              <strong>Encontre a Pousada Campina do Monte Alegre com Facilidade</strong><br />
              Estamos à 11 minutos da UFSCar Lagoa do Sino e 5 minutos do centro da cidade.
            </p>
            
            {/* Interactive Map */}
            <div className="relative rounded-xl overflow-hidden shadow-lg mb-8 h-64 md:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.796!2d-47.854!3d-23.012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5eeda8b1f8b41%3A0x1234567890!2sR.%20Marcelo%20Vi%C3%AAira%20Ramos%2C%2082%20-%20Ara%C3%A7atubinha%2C%20Campina%20do%20Monte%20Alegre%20-%20SP%2C%2018245-000!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent"></div>
              <Button
                onClick={() => window.open('https://maps.app.goo.gl/eJ3MD7eqtT3HEYFRA', '_blank')}
                className="absolute bottom-4 left-4 bg-white text-primary hover:bg-primary hover:text-white shadow-lg"
                size="sm"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Abrir no Google Maps
              </Button>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary to-primary-light rounded-xl p-8 text-white text-center">
              <h4 className="font-display text-2xl font-bold mb-4">
                Pronto para se Hospedar?
              </h4>
              <p className="mb-6 opacity-90">
                Entre em contato conosco pelo WhatsApp e garanta já sua reserva. 
                Estamos aqui para tornar sua estadia inesquecível!
              </p>
              <Button 
                onClick={() => window.open('https://wa.me/5511994200991?text=Olá! Gostaria de fazer uma reserva na Pousada Campina do Monte Alegre.', '_blank')}
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <img 
                  src="/lovable-uploads/0aba352a-0b5a-4bf7-a909-66f7907e2418.png" 
                  alt="WhatsApp" 
                  className="w-5 h-5 mr-2" 
                />
                Reservar pelo WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Responsible Person */}
        <div className="bg-white rounded-xl p-8 shadow-md text-center animate-fade-in">
          <h4 className="font-display text-2xl font-bold text-gray-800 mb-4">
            Responsável
          </h4>
          <p className="font-body text-lg text-gray-600 mb-2">
            <strong className="text-primary">Luiz Cezar Elias Rochel</strong>
          </p>
          <p className="text-gray-600">
            Proprietário e responsável pela Pousada Campina do Monte Alegre
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
