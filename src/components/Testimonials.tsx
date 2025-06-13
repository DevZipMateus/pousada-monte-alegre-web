
import { Star, Quote, Heart, Users, Coffee } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Pousada bem simples, porém muito aconchegante. O café da manhã também é bem simples, mas tudo muito gostoso. O serviço e o tratamento do pessoal que trabalham na pousada é um show à parte. A Laís e o Sr Onofre estão de parabéns. Voltaremos em breve.",
      author: "Hóspede do Google Maps",
      rating: 5,
      highlight: "Atendimento excepcional"
    },
    {
      text: "Lugar tranquilo, simples e receptivo. Ideal para descansar ou viver algumas aventuras com o dono, uma pessoa cheia de histórias. Destaque para o 'Dog', um gigante e dócil dog alemão.",
      author: "Hóspede do Google Maps", 
      rating: 5,
      highlight: "Experiência única"
    },
    {
      text: "Riquíssima em história, pessoas e artes. Um bate-papo com o Vitor e um senhor trajado como coronel transforma a estadia em uma experiência única.",
      author: "Hóspede do Google Maps",
      rating: 5,
      highlight: "Rica em histórias"
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Acolhimento",
      description: "Cada hóspede é recebido como família"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Simplicidade",
      description: "Ambiente simples mas com muito carinho"
    },
    {
      icon: <Coffee className="w-8 h-8 text-primary" />,
      title: "Qualidade",
      description: "Produtos frescos e serviços de qualidade"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            O que Nossos Hóspedes Dizem
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="font-body text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Depoimentos reais de quem já se hospedou conosco e viveu momentos especiais
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-natural-50 to-earth-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 relative animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-20">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Highlight Badge */}
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                {testimonial.highlight}
              </div>

              {/* Testimonial Text */}
              <blockquote className="font-body text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-natural-200 pt-4">
                <cite className="font-semibold text-gray-800 not-italic">
                  {testimonial.author}
                </cite>
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-2xl p-8 md:p-12 animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nossos Valores
            </h3>
            <p className="font-body text-gray-600 max-w-2xl mx-auto">
              O que nos move todos os dias na busca por proporcionar a melhor experiência
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h4 className="font-display text-xl font-bold text-gray-800 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 font-body">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="text-center">
            <p className="font-body text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              É esse cuidado especial que faz nossos hóspedes voltarem e recomendarem 
              nossa pousada. <strong className="text-primary">Simplicidade, qualidade e muito carinho</strong> são 
              os ingredientes da nossa receita de hospitalidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
