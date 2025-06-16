import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const GallerySection = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Todas as imagens da galeria combinadas
  const allImages = [
  // Área Externa
  {
    src: '/lovable-uploads/area-externa/area-externa-02.jpg',
    alt: 'Área Externa 2'
  }, {
    src: '/lovable-uploads/area-externa/area-externa-03.jpg',
    alt: 'Área Externa 3'
  }, {
    src: '/lovable-uploads/area-externa/area-externa-04.jpg',
    alt: 'Área Externa 4'
  }, {
    src: '/lovable-uploads/area-externa/area-externa-05.jpg',
    alt: 'Área Externa 5'
  }, {
    src: '/lovable-uploads/area-externa/area-externa-06.jpg',
    alt: 'Área Externa 6'
  }, {
    src: '/lovable-uploads/area-externa/area-externa-07.jpg',
    alt: 'Área Externa 7'
  }, {
    src: '/lovable-uploads/area-externa/area-externa-08.jpg',
    alt: 'Área Externa 8'
  }, {
    src: '/lovable-uploads/area-externa/area-externa-09.jpg',
    alt: 'Área Externa 9'
  }, {
    src: '/lovable-uploads/area-externa/area-externa-10.jpg',
    alt: 'Área Externa 10'
  }, {
    src: '/lovable-uploads/area-externa/frente.jpg',
    alt: 'Frente da Pousada'
  }, {
    src: '/lovable-uploads/area-externa/mesa-externa-01.jpg',
    alt: 'Mesa Externa'
  }, {
    src: '/lovable-uploads/area-externa/pousada.jpg',
    alt: 'Pousada'
  }, {
    src: '/lovable-uploads/58e1b315-a9f5-4165-8440-14af5b10e23c.png',
    alt: 'Vista Noturna da Pousada'
  }, {
    src: '/lovable-uploads/7d925a05-ae93-4235-a22c-6841d262dc37.png',
    alt: 'Placa Paraíso'
  }, {
    src: '/lovable-uploads/07f1fe8d-13a2-4365-a58e-fbba8a1b33e5.png',
    alt: 'Fachada da Pousada'
  }, {
    src: '/lovable-uploads/f477a638-a3e8-4b39-9eea-2ee76f6cc20b.png',
    alt: 'Área Externa com Árvores'
  },
  // Área Interna
  {
    src: '/lovable-uploads/area-interna/area-interna-01.jpg',
    alt: 'Área Interna 1'
  }, {
    src: '/lovable-uploads/area-interna/area-interna-02.jpg',
    alt: 'Área Interna 2'
  }, {
    src: '/lovable-uploads/area-interna/area-interna-03.jpg',
    alt: 'Área Interna 3'
  }, {
    src: '/lovable-uploads/area-interna/area-interna-04.jpg',
    alt: 'Área Interna 4'
  }, {
    src: '/lovable-uploads/area-interna/area-interna-05.jpg',
    alt: 'Área Interna 5'
  }, {
    src: '/lovable-uploads/area-interna/banheiro-01.jpg',
    alt: 'Banheiro'
  }, {
    src: '/lovable-uploads/1fe01332-ea88-47ba-8033-cef79572a913.png',
    alt: 'Entrada do Quarto'
  }, {
    src: '/lovable-uploads/d72e5a3d-e118-465c-ac50-99cb604ea836.png',
    alt: 'Corredor Interno'
  }, {
    src: '/lovable-uploads/4a0a0f17-6cc2-4cc2-900b-5b5dcd226c99.png',
    alt: 'Sala de Estar'
  },
  // Quartos
  {
    src: '/lovable-uploads/quartos/quarto-casal-01.jpg',
    alt: 'Quarto Casal 1'
  }, {
    src: '/lovable-uploads/quartos/quarto-casal-02.jpg',
    alt: 'Quarto Casal 2'
  }, {
    src: '/lovable-uploads/quartos/quarto-duas-camas-01.jpg',
    alt: 'Quarto Duas Camas 1'
  }, {
    src: '/lovable-uploads/quartos/quarto-duas-camas-02.jpg',
    alt: 'Quarto Duas Camas 2'
  }, {
    src: '/lovable-uploads/quartos/quarto-solteiro-01.jpg',
    alt: 'Quarto Solteiro 1'
  }, {
    src: '/lovable-uploads/quartos/quarto-solteiro-02.jpg',
    alt: 'Quarto Solteiro 2'
  }, {
    src: '/lovable-uploads/quartos/quarto-solteiro-03.jpg',
    alt: 'Quarto Solteiro 3'
  }, {
    src: '/lovable-uploads/quartos/quarto-solteiro-04.jpg',
    alt: 'Quarto Solteiro 4'
  }, {
    src: '/lovable-uploads/quartos/quarto-solteiro-05.jpg',
    alt: 'Quarto Solteiro 5'
  }, {
    src: '/lovable-uploads/quartos/quarto-solteiro-06.jpg',
    alt: 'Quarto Solteiro 6'
  }, {
    src: '/lovable-uploads/quartos/quartocasal.jpg',
    alt: 'Quarto Casal'
  }, {
    src: '/lovable-uploads/quartos/quartosolteiro.jpg',
    alt: 'Quarto Solteiro'
  }, {
    src: '/lovable-uploads/475c78b4-0d64-4688-9607-1a6f5ba3f64b.png',
    alt: 'Detalhe da Cama'
  }, {
    src: '/lovable-uploads/6b4617ce-3faf-4142-b718-6f6fc30ffdeb.png',
    alt: 'Quarto Duplo com Duas Camas'
  }, {
    src: '/lovable-uploads/f4c5de6d-3284-40b8-a93a-d7b9fa367c8b.png',
    alt: 'Quarto com Mesa de Trabalho'
  }, {
    src: '/lovable-uploads/c14ca854-3883-4276-b9ef-6f3725200b90.png',
    alt: 'Quarto de Trabalho com Laptop'
  }, {
    src: '/lovable-uploads/0ccbcb83-cb79-42e1-b478-ff659205212e.png',
    alt: 'Toalhas no Quarto'
  }, {
    src: '/lovable-uploads/7dbd15f2-c7a8-4dff-a814-338660e5ad78.png',
    alt: 'Quarto Solteiro com Guarda-roupa'
  }, {
    src: '/lovable-uploads/3b97a7e5-2e0d-4b62-b696-141a0d95df35.png',
    alt: 'Amenidades do Banheiro'
  }, {
    src: '/lovable-uploads/ba5efb04-e283-4333-81be-804d1a6273d2.png',
    alt: 'Quarto Duplo com Mesa de Trabalho'
  }];

  // Troca automática a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % allImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [allImages.length]);
  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % allImages.length);
  };
  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + allImages.length) % allImages.length);
  };
  const handleImageClick = () => {
    navigate('/galeria');
  };
  return;
};
export default GallerySection;