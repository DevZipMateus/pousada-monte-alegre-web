
import { Instagram, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InstagramHighlight = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-full p-4">
                <Instagram className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Siga-nos no Instagram
            </h2>
            
            <p className="font-body text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
              Acompanhe nosso dia a dia, veja fotos dos nossos quartos e jardins, 
              e fique por dentro das novidades da Pousada Campina do Monte Alegre
            </p>

            <div className="mb-8">
              <span className="font-display text-2xl font-bold text-primary">
                @pousadacampinadomontealegre
              </span>
            </div>

            <Button 
              onClick={() => window.open('https://www.instagram.com/pousadacampinadomontealegre/', '_blank')}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Seguir no Instagram
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto">
              <div className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg flex items-center justify-center">
                <Instagram className="w-8 h-8 text-gray-600" />
              </div>
              <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg flex items-center justify-center">
                <Instagram className="w-8 h-8 text-gray-600" />
              </div>
              <div className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg flex items-center justify-center">
                <Instagram className="w-8 h-8 text-gray-600" />
              </div>
              <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg flex items-center justify-center">
                <Instagram className="w-8 h-8 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramHighlight;
