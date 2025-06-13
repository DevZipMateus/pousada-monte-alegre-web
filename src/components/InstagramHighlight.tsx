
import { Instagram, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InstagramHighlight = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-6 h-6 text-pink-500" />
            <h3 className="font-display text-xl font-semibold text-gray-700">
              Siga-nos no Instagram
            </h3>
          </div>
          
          <p className="font-body text-gray-600 mb-4">
            Acompanhe nosso dia a dia e veja fotos dos nossos quartos e jardins
          </p>

          <div className="mb-4">
            <span className="font-display text-lg font-medium text-primary">
              @pousadacampinadomontealegre
            </span>
          </div>

          <Button 
            onClick={() => window.open('https://www.instagram.com/pousadacampinadomontealegre/', '_blank')}
            variant="outline"
            size="sm"
            className="text-pink-600 border-pink-300 hover:bg-pink-50"
          >
            <Instagram className="w-4 h-4 mr-2" />
            Seguir
            <ExternalLink className="w-3 h-3 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramHighlight;
