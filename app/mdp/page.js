// components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MdpHeroSection from '../../components/Mdp/MdpHeroSection';
import MdpUtilizationSection from '../../components/Mdp/MdpUtilizationSection';

export const metadata = {
  title: 'Mobile Dewatering Pump: Masa depan dari pompa',
  description: 'Mobilitas, bobot sangat ringan, kapasitas air tinggi, teknologi modern menjadi kekuatan dari Mobile Dewatering Pump (MDP). Disediakan oleh PT Samudera Biru Nusantara (SBN), Mobile Dewatering Pump dapat digunakan di perkebunan (plantation), banjir (flood), sungai (river), bendungan (dam), dan masih banyak lagi.',
};

const MDP = () => (
  <div className="min-h-screen w-full bg-white">
    <section id="banner">
      <div className="w-full pt-6 flex flex-col absolute top-0 z-0">
        <Header darkMode={true} />
      </div>
    </section>

    <main>
      <MdpHeroSection />

      <MdpUtilizationSection />
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
);

export default MDP;
