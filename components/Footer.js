import Image from 'next/image';

const Footer = () => (
  <>
    <div className="w-full h-16 lg:h-24 bg-gray-800 flex flex-row justify-around lg:justify-between items-center lg:px-10">
      <div className="hidden lg:flex">
        <Image src="/logos/sbn.webp" alt="PT Samudera Biru Nusantara Logo" width={96} height={52} className="lg:flex" />
      </div>
      <div className="flex flex-row space-x-5">
        <a className="flex items-center" href="https://www.facebook.com/PTSamudera-Biru-Nusantara-105645351036978/" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/facebook-white.png" alt="facebook icon" width={24} height={24} className="shadow-lg hover:opacity-60 active:opacity-30" />
        </a>
        <a className="flex items-center" href="https://www.instagram.com/samuderabirunusantara/" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/instagram-white.png" alt="instagram icon" width={24} height={24} className="shadow-lg hover:opacity-60 active:opacity-30" />
        </a>
        <a className="flex items-center" href="https://www.linkedin.com/company/pt-samudera-biru-nusantara/about/" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/linkedin-white.png" alt="linkedin icon" width={24} height={24} className="shadow-lg hover:opacity-60 active:opacity-30" />
        </a>
        <a className="flex items-center" href="http://api.whatsapp.com/send?phone=6285251455565" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/whatsapp-white.png" alt="whatsapp icon" width={24} height={24} className="shadow-lg hover:opacity-60 active:opacity-30" />
        </a>
      </div>
      <div>
        <h1 className="text-white text-sm font-light lg:hidden">© 2022 PT. SBN</h1>
        <h1 className="hidden lg:flex text-white text-sm font-light">© 2022 PT. Samudera Biru Nusantara</h1>
      </div>
    </div>
  </>
);

export default Footer;
