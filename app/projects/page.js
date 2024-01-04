/* eslint-disable max-len */
import Image from 'next/image';

// components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProjectListVertical from '../../components/Project/ProjectListVertical';

// images
import pipepumpinstallment from '../../public/images/pipepumpinstallment.webp';
import liftingW400 from '../../public/images/projects/lifting_w400.webp';

export const metadata = {
  title: 'Pengalaman Kerja Kami - PT Samudera Biru Nusantara',
  description: 'PT Samudera Biru Nusantara memiliki banyak pengalaman kerja selama 20 tahun terakhir mulai dari bekerja di project slurry/lumpur di PT Dharma Henwa, project slurry/lumpur di PT Berau Coal, project reklamasi di PT Wijaya Karya (BUMN), project slurry/lumpur dan dewatering/air di PT Kaltim Prima Utama Coal, project dredging di PT Globalindo Intie Energi, dan masih banyak lagi',
};

const Projects = () => (
  <div className="min-h-screen w-full bg-white">
    <section id="banner">
      <div className="w-full h-170 pt-6 flex flex-col absolute top-0 z-10">
        <Header />
        <div className="self-center mt-52">
          <h1 className="text-center text-5xl md:text-[3.1rem] md:mb-1 lg:mb-0 lg:text-6xl font-bold text-white">OUR PROJECTS</h1>
        </div>
      </div>
      {/* Mobile Screen */}
      <div className="relative w-full h-170 xsm:hidden">
        <Image priority src={liftingW400} placeholder="blur" alt="pengangkatan booster pump atau slurry pump di workshop PT Samudera Biru Nusantara" sizes="(max-width: 300px) 85vw, 100vw" fill className="object-cover brightness-50" />
      </div>
      {/* Desktop Screen */}
      <div className="hidden xsm:relative xsm:block w-full h-170">
        <Image priority src={pipepumpinstallment} placeholder="blur" alt="instalasi pipa HDPE 10 inch dan 12 inch untuk pekerjaan pemompaan lumpur oleh PT Samudera Biru Nusantara" sizes="(max-width: 600px) 50vw, (max-width: 1000) 80vw, 100vw" fill className="object-cover brightness-50" />
      </div>
    </section>

    <main>
      <section id="listProjects">
        <ProjectListVertical />
      </section>
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
);

export default Projects;
