/* eslint-disable max-len */
import Image from 'next/image';

import misi from '../../public/images/about/misi.webp';

const AboutMisi = () => (
  <div className="flex w-full px-4 py-28 justify-center xl:flex-row">
    <div className="flex w-[30rem] md:w-[45rem] xl:w-[78rem] xl:flex-row">
      <div className="flex flex-col flex-1 xl:w-[42rem] xl:flex-none xl:pr-10">
        <h1 className="mt-2 font-bold text-3xl text-gray-900 text-center xl:text-left">Our Mission</h1>
        <h1 className="hidden xl:block text-[#0094DF] text-xl">(Commitment to Achieve Our Vision)</h1>
        <p className="mt-5 text-gray-500 text-justify text-lg md:text-xl">
        1. Provide efficient and effective pumping and dewatering pumps.
        </p>
        <p className="text-gray-500 text-justify mt-5 text-lg md:text-xl">
        2. Underwater & marine services with the right technical approach to needs and prioritizing customer satisfaction.
        </p>
        <p className="text-gray-500 text-justify mt-5 text-lg md:text-xl">
        3. Always develop good quality work and professionalism for every individual involved in our business.
        </p>
        <p className="text-gray-500 text-justify mt-5 text-lg md:text-xl">
        4. Commitment to always paying attention to and improving health, safety, and environmental sustainability standards from time to time.
        </p>
      </div>

      <div className="hidden xl:flex justify-center w-[36rem] items-end">
        <div className="relative w-full h-[20rem]">
          {misi && <Image src={misi} alt="Excavator di gabungkan dengan submersible pump" sizes="45vw" fill className="object-cover" />}
        </div>
      </div>
    </div>
  </div>
);

export default AboutMisi;
