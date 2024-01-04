/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable max-len */
// eslint-disable-next-line import/no-unresolved

import Image from 'next/image';

// components
import Header from '../components/Header';
import Footer from '../components/Footer';

// public
import HomeHeaderContent from '../components/Home/HomeHeaderContent';
import HomeExperience from '../components/Home/HomeExperience';
import HomeServices from '../components/Home/HomeServices';
import HomeProjectListHorizontal from '../components/Home/HomeProjectListHorizontal';

// images
import boosterpump from '../public/images/boosterpump.webp';
import visiW400 from '../public/images/about/visi_w400.webp';

export const metadata = {
  title: 'Fokus Utama Di Bidang Pemompaan Tambang Dengan Pengalaman 20 Tahun Lebih - PT Samudera Biru Nusantara',
  description: 'Berfokus di bidang pemompaan dewatering/air dan slurry/lumpur di tambang batubara selama kurang lebih 20 tahun, PT Samudera Biru Nusantara telah bekerja di banyak tambang besar seperti PT Wijaya Karja, PT Berau Coal, PT Dharma Henwa, dan masih banyak lagi',
};

const Home = () => (
  <div className="min-h-screen w-full bg-white">
    <section id="banner">
      <div className="w-full h-170 pt-6 flex flex-col absolute top-0 z-10">
        <Header />
        <HomeHeaderContent />
      </div>

      {/* Mobile Screen */}
      <div className="relative w-full h-170 xsm:hidden">
        <Image src={visiW400} priority placeholder="blur" alt="slurry submersible pump/pompa celup lumpur di pasangkan dengan excavator 20 ton dan filter oleh PT Samudera Biru Nusantara" sizes="(max-widtH: 400px) 90vw, 100vw" fill className="object-cover brightness-35" />
      </div>
      {/* Desktop Screen */}
      <div className="hidden xsm:relative xsm:block w-full h-170">
        <Image src={boosterpump} priority placeholder="blur" alt="booster pump/slurry pump/pompa lumpur di tambang batubara oleh PT Samudera Biru Nusantara" sizes="(max-width: 600px) 60vw, (max-width: 900) 80vw, 100vw" fill className="object-cover brightness-35" />
      </div>
    </section>

    <main>
      <section id="experience">
        <HomeExperience />
      </section>

      <section id="our-services">
        <HomeServices />
      </section>

      <section id="our-projects">
        <HomeProjectListHorizontal />
      </section>

    </main>

    <footer>
      <Footer />
    </footer>
  </div>

);

export default Home;
