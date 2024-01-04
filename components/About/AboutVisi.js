/* eslint-disable max-len */
import Image from 'next/image';

import visi from '../../public/images/about/visi.webp';

const AboutVisi = () => (
  <div className="flex w-full px-4 py-28 justify-center xl:flex-row bg-gray-100">
    <div className="flex w-[30rem] md:w-[45rem] xl:w-[78rem] xl:flex-row">
      <div className="hidden xl:flex justify-center w-[25rem]">
        <div className="relative w-full h-[35rem]">
          {visi && <Image src={visi} alt="Excavator di gabungkan dengan submersible pump" sizes="50vh" fill className="object-cover" />}
        </div>
      </div>

      <div className="flex flex-col flex-1 xl:w-[53rem] xl:flex-none xl:pl-14 xl:pt-20">
        <h1 className="mt-2 font-bold text-3xl text-gray-900 text-center xl:text-left">Our Vision</h1>
        <h1 className="hidden xl:block text-[#0094DF] text-xl">(Leading Pumping Solutions)</h1>
        <p className="mt-5 text-gray-500 text-justify text-lg md:text-xl">
        SBN has a vision of becoming a leading company in Indonesia in mining pumping solutions that is effective and efficient with service standards that pay attention to work safety, health, ad environmental sustainability..
        </p>
      </div>
    </div>
  </div>
);

export default AboutVisi;
