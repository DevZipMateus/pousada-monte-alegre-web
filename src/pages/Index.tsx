
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Rooms from '@/components/Rooms';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import InstagramHighlight from '@/components/InstagramHighlight';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Rooms />
      <Services />
      <Testimonials />
      <InstagramHighlight />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
