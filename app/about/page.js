import Image from 'next/image';

// components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AboutUs from '../../components/About/AboutUs';
import AboutVisi from '../../components/About/AboutVisi';
import AboutMisi from '../../components/About/AboutMisi';

// images
import meeting from '../../public/images/meeting.webp';
import teammeeting from '../../public/images/about/teammeeting.webp';

export const metadata = {
  title: 'Tentang Kami - PT Samudera Biru Nusantara',
  description: 'PT Samudera Biru Nusantara didirikan sejak tahun 2000 dan sudah beroperasi selama 23 tahun lebih. PT Samudera Biru Nusantara memiliki 2 bisnis utama yaitu pemompaan slurry/lumpur & dewatering/air di tambang batubara dan underwater & marine services di industry oil and gas',
};

const About = () => (
  <div className="min-h-screen w-full bg-white">
    <section id="banner">
      <div className="w-full h-170 pt-6 flex flex-col absolute top-0 z-10">
        <Header />
        <div className="mt-52 flex flex-col items-center px-4 w-full max-w-[28rem] sm:max-w-[32rem] md:max-w-[35rem] mx-auto">
          <h1 className="text-center text-5xl md:text-[3.1rem] lg:text-6xl font-bold text-white mb-5">ABOUT US</h1>
          <h2 className="text-center text-lg md:text-[1.4rem] md:mb-1 lg:mb-0 lg:text-2xl font-extralight text-white w-full">PT. Samudera Biru Nusantara has been established since 2000 and has been operating until now.</h2>
        </div>
      </div>
      {/* Mobile Screen */}
      <div className="relative w-full h-170 xsm:hidden">
        <Image priority src={teammeeting} placeholder="blur" alt="team meeting di tambang oleh PT Samudera Biru Nusantara" sizes="(max-width: 300px) 85vw, 100vw" fill className="object-cover brightness-50" />
      </div>
      {/* Desktop Screen */}
      <div className="hidden xsm:relative xsm:block w-full h-170">
        <Image priority src={meeting} placeholder="blur" alt="team meeting di tambang oleh PT Samudera Biru Nusantara" sizes="(max-width: 500px) 40vw, (max-width: 800px) 60vw, (max-width: 1100) 80vw, 100vw" fill className="object-cover brightness-50" />
      </div>
    </section>

    <main>
      <section>
        <AboutUs />
      </section>

      <section id="visi">
        <AboutVisi />
      </section>

      <section id="misi">
        <AboutMisi />
      </section>

      {/* <section id="board">
        <div className="w-full h-100 bg-white">
          <h1>Board</h1>
        </div>
      </section> */}
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
);

export default About;
