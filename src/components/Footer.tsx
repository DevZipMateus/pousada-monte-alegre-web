
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/dd89f9af-141d-40fb-a234-d2fb17e9162a.png" 
                alt="Pousada Campina do Monte Alegre" 
                className="h-16 w-auto mb-4"
              />
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Pousada Campina do Monte Alegre
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Aconchegante, acolhedora: proporciona o conforto e a tranquilidade 
                que seus hóspedes buscam em suas estadias de trabalho ou lazer.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-6">
              Contato
            </h4>
            <div className="space-y-4">
              <a 
                href="tel:+5511994200991"
                className="flex items-center text-gray-300 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 mr-3 text-primary" />
                (11) 99420-0991
              </a>
              <a 
                href="mailto:lcrochel@gmail.com"
                className="flex items-center text-gray-300 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 mr-3 text-primary" />
                lcrochel@gmail.com
              </a>
              <a 
                href="https://maps.app.goo.gl/AFHiVRykBNj9iFUe7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start text-gray-300 hover:text-primary transition-colors"
              >
                <MapPin className="w-5 h-5 mr-3 text-primary mt-0.5" />
                <span>
                  Rua Marcelo Vieira Ramos, 82<br />
                  Campina do Monte Alegre - SP<br />
                  CEP 18246-048
                </span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-6">
              Nossos Serviços
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Quartos com banheiro privativo</li>
              <li>• Café da manhã incluso</li>
              <li>• Wi-Fi gratuito</li>
              <li>• Estacionamento</li>
              <li>• Jardim e área verde</li>
              <li>• Limpeza diária</li>
              <li>• Atendimento 24h</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Pousada Campina do Monte Alegre. Todos os direitos reservados.
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Feito com</span>
              <Heart className="w-4 h-4 mx-1 text-primary fill-current" />
              <span>para nossos hóspedes</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
