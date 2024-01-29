import Image from 'next/image';

// images
import mdpW400 from '../../../public/images/mdp/mdp_w400.webp';
import DownloadCatalogButton from './DownloadCatalogButton';

const MdpHeroSectionSmallScreen = () => (
  <div className="flex flex-col items-center w-full z-10 bg-[#EEEEEE] pt-32 md:pt-44 ">
    <div className="max-w-xl md:max-w-2xl">
      <Image priority src={mdpW400} placeholder="blur" alt="team meeting di tambang oleh PT Samudera Biru Nusantara" sizes="100vw" width={440} height={398} className="object-cover" />
    </div>

    <div className="px-4 mt-6 md:mt-12 w-full max-w-lg md:max-w-2xl flex flex-col items-center text-black text-justify">
      <h1 className="font-bold text-3xl text-black text-center xsm:text-4xl md:text-5xl">Mobile Dewatering Pump</h1>
      <p className="mt-4 xsm:text-lg md:text-xl max-w-lg sm:max-w-xl md:max-w-2xl">
      Empower your journey with amazing mobility, light design,
      high water capacity, cutting-edge technology,
      and a myriad of other exceptional features.
      </p>
    </div>

    <DownloadCatalogButton sizes="small" />
  </div>
);

export default MdpHeroSectionSmallScreen;
