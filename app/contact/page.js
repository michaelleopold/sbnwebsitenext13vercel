import Image from 'next/image';

// components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactInformations from '../../components/Contact/ContactInformations';
import ContactMessage from '../../components/Contact/ContactMessage';
import ContactLocation from '../../components/Contact/ContactLocation';

// images
import contactus from '../../public/images/contactus.webp';
import contactusW400 from '../../public/images/contactus_w400.webp';

export const metadata = {
  title: 'Hubungi Kami - PT Samudera Biru Nusantara',
  description: 'PT Samudera Biru Nusantara memiliki kantor utama di Ruko Balikpapan Baru AB 1 No.1, 76114 Balikpapan Selatan, Kalimantan Timur, Indonesia. Tertera Nomor Telepon, Nomor Whatsapp, dan Instagram dari PT Samudera Biru Nusantara',
};

const Contact = () => (
  <div className="min-h-screen w-full bg-white">
    <section id="banner">
      <div className="w-full h-170 pt-6 flex flex-col absolute top-0 z-10">
        <Header />
        <div className="flex flex-col items-center mt-52 px-4 w-full max-w-[34rem] sm:max-w-[39rem] md:max-w-[44rem] lg:max-w-[50rem] mx-auto">
          <h1 className="text-center text-5xl md:text-[3.1rem] lg:text-6xl font-bold text-white mb-5">CONTACT INFORMATIONS</h1>
          <h2 className="text-center text-lg md:text-[1.4rem] md:mb-1 lg:mb-0 lg:text-2xl font-extralight text-white w-full">
              Looking for All in One Pump Provider Solution?
              You found it here.
          </h2>
        </div>
        <a href="http://api.whatsapp.com/send?phone=6285251455565" className="self-center rounded-md shadow-lg flex justify-center items-center bg-whatsapp hover:opacity-60 active:opacity-20 w-fit py-2 px-6 space-x-3 cursor-pointer transition-all mt-6">
          <h3 className="font-bold text-white">Contact Us</h3>
          <div className="ml-2 flex justify-center">
            <Image src="/icons/whatsapp-white.png" alt="whatsapp" width={28} height={28} />
          </div>
        </a>
      </div>
      {/* Mobile Screen */}
      <div className="relative w-full h-170 xsm:hidden">
        <Image priority src={contactusW400} placeholder="blur" alt="pengangkatan booster pump atau slurry pump di workshop PT Samudera Biru Nusantara" sizes="(max-width: 350px) 90vw, 100vw" fill className="object-cover brightness-50" />
      </div>
      {/* Desktop Screen */}
      <div className="hidden xsm:relative xsm:block w-full h-170">
        <Image priority src={contactus} placeholder="blur" alt="instalasi pipa HDPE 10 inch dan 12 inch untuk pekerjaan pemompaan lumpur oleh PT Samudera Biru Nusantara" sizes="(max-width: 600px) 45vw, (max-width: 1000) 70vw, 100vw" fill className="object-cover brightness-50" />
      </div>
    </section>

    <main>
      <section id="informations">
        <ContactInformations />
      </section>

      <section id="message" className="xl:hidden">
        <ContactMessage />
      </section>

      <section id="location">
        <ContactLocation />
      </section>
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
);

export default Contact;
