import Image from 'next/image';

// images
import mdp from '../../../public/images/mdp/mdp.webp';
import DownloadCatalogButton from './DownloadCatalogButton';

const MdpHeroSectionMediumScreen = () => (
  <div className="flex w-full flex-row bg-[#EEEEEE] pt-56 pb-8">
    <div className="w-[60%]">
      <div className="w-full max-w-[90%] mx-auto">
        <Image priority src={mdp} placeholder="blur" alt="team meeting di tambang oleh PT Samudera Biru Nusantara" sizes="80vw" width={763} height={691} className="object-cover" />
      </div>
    </div>

    <div className="w-[40%] px-6 flex flex-col justify-center items-center">
      <div className="w-full max-w-sm mx-auto">
        <div className="w-full max-w-52">
          <h1 className="font-bold text-[3.2rem] leading-none text-black">Mobile Dewatering Pump</h1>
        </div>
        <p className="text-black py-6 text-justify text-lg">
            Empower your journey with amazing mobility, light design,
            high water capacity, cutting-edge technology,
            and a myriad of other exceptional features.
        </p>
        <DownloadCatalogButton sizes="medium" />
      </div>
    </div>
  </div>
);

export default MdpHeroSectionMediumScreen;
