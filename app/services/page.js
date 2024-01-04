/* eslint-disable max-len */
import Image from 'next/image';

// components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServiceContent from '../../components/Service/ServiceContent';

// images
import boosterpumpworkshop from '../../public/images/boosterpumpworkshop.webp';
import aboutusW400 from '../../public/images/services/aboutus_w400.webp';

export const metadata = {
  title: 'Jasa Yang Ditawarkan PT Samudera Biru Nusantara - Pompa Dewatering, Slurry, Pasir, Reklamasi, dan lainnya',
  description: 'SBN melayani segala jasa pemompaan mulai dari pemompaan slurry untuk lumpur biasanya tambang batu bara, pemompaan dewatering biasanya di tambang batu bara, tambang kelapa sawit, hingga pemompaan pasir untuk konstruksi pasir, pengerukan, pendangkalan dermaga, pendangkalan jalur kapal, dan lain-lain.',
};

const Services = () => (
  <div className="min-h-screen w-full bg-white">
    <section id="banner">
      <div className="w-full h-170 pt-6 flex flex-col absolute top-0 z-10">
        <Header />
        <div className="self-center mt-52">
          <h1 className="text-5xl md:text-[3.1rem] md:mb-1 lg:mb-0 lg:text-6xl font-bold text-white">OUR SERVICES</h1>
        </div>
      </div>
      {/* Mobile Screen */}
      <div className="relative w-full h-170 xsm:hidden">
        <Image priority src={aboutusW400} placeholder="blur" alt="slurry submersible pump/pompa celup lumpur di jalankan oleh PT Samudera Biru Nusantara" sizes="(max-width: 300px) 85vw, 100vw" fill className="object-cover brightness-50" />
      </div>
      {/* Desktop Screen */}
      <div className="hidden xsm:relative xsm:block w-full h-170">
        <Image priority src={boosterpumpworkshop} placeholder="blur" alt="booster pump/slurry pump/pompa lumpur di workshop atau gudang PT Samudera Biru Nusantara" sizes="(max-width: 600px) 40vw, (max-width: 1000) 70vw, 100vw" fill className="object-cover brightness-50" />
      </div>
    </section>

    <main>
      <section id="services">
        <ServiceContent />
      </section>
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
);

export default Services;
