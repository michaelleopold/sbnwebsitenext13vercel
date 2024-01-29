/* eslint-disable max-len */
import Image from 'next/image';

// images
import mdp from '../../../public/images/mdp/mdp.webp';
import DownloadCatalogButton from './DownloadCatalogButton';

// Mobile Dewatering Pump Catalog SBN_EN.pdf

const MdpHeroSectionLargeScreen = () => (
  <div className="w-full h-fit bg-[#EEEEEE] z-10 pt-52 pb-8">
    <div className="flex w-full flex-row max-w-[90rem] mx-auto">
      <div className="w-[27.5%] flex justify-end items-center space-y-5 text-black">
        <div className="w-full max-w-[21rem] flex items-start flex-col space-y-10 pl-6">
          <div className="">
            <h1 className="font-bold text-2xl">P-S-P Auto Switch System</h1>
            <p className="text-gray-500 text-lg">Automatic switch once finished</p>
          </div>
          <div className="">
            <h1 className="font-bold text-2xl">Cooling System</h1>
            <p className="text-gray-500 text-lg">Low temperature & long lifespan</p>
          </div>
          <div className="">
            <h1 className="font-bold text-2xl">Auto Start/Stop Control</h1>
            <p className="text-gray-500 text-lg">Start/stop pump automatically</p>
          </div>
        </div>
      </div>

      <div className="w-[45%] flex justify-center items-center">
        <div className="w-[85%] max-w-xl">
          <Image priority src={mdp} placeholder="blur" alt="team meeting di tambang oleh PT Samudera Biru Nusantara" sizes="(max-width: 576px) 60vw, 73vw" width={763} height={691} className="object-cover" />
        </div>
      </div>

      <div className="w-[27.5%] px-6 flex flex-col justify-center items-start">
        <div className="w-full max-w-96 mx-auto">
          <div className="w-full max-w-52">
            <h1 className="font-bold text-[3.4rem] leading-none text-black">Mobile Dewatering Pump</h1>
          </div>
          <div>
            <p className="text-black text-lg py-7 text-justify">
              Empower your journey with amazing mobility, light design,
              high water capacity, cutting-edge technology,
              and a myriad of other exceptional features.
            </p>
          </div>
          <DownloadCatalogButton sizes="large" />
        </div>
      </div>
    </div>
  </div>
);

export default MdpHeroSectionLargeScreen;
