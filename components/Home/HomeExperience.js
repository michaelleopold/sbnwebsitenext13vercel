/* eslint-disable max-len */

import Image from 'next/image';

// images
import workshop from '../../public/images/workshop.webp';

const HomeExperience = () => (
  <div className="w-full flex justify-center py-28">
    <div className="flex flex-row w-full max-w-[25rem] mx-4 sm:max-w-none sm:w-[30rem] lg:w-[62rem] lg:space-x-7 xl:w-[73rem] xl:space-x-10">
      <div className="flex flex-1 flex-col">
        <div className="flex flex-row space-x-2 justify-center">
          <div className="flex flex-1">
            <div className="w-full h-36 xl:h-40 rounded-sm flex flex-col justify-center items-center bg-[#0094DF] shadow-xl">
              <h1 className="text-white font-bold text-5xl xl:text-6xl">20+</h1>
              <h1 className="text-white font-medium text-lg mt-2 xl:text-xl">Years Experience</h1>
            </div>
          </div>
          <div className="flex flex-1 flex-col pl-1">
            <h1 className="tracking-[0.3em] text-gray-400 font-medium lg:text-lg">WELCOME</h1>
            <h1 className="mt-5 font-bold text-xl text-[#0094DF] lg:text-2xl">PT. Samudera Biru Nusantara</h1>
            <h1 className="font-bold text-gray-900 lg:text-lg">Pumping Specialist</h1>
          </div>
        </div>
        <div className="pt-6 text-justify">
          <p className="text-gray-500">PT. Samudera Biru Nusantara (SBN) is a privately owned independent company in Indonesia established since year 2000,
          specializing in the fields of Mine Pump, Slurry and Dewatering Removal, Dredging, Reclamation, Underwater Construction,
          Inspection and Maintenance Services, Fabrication, and many more.</p>
          <p className="text-gray-500 mt-3">We, SBN are managed by a solid team of professionals and
          staffed with national certified workers who had acquired invaluable experiences and exposures in various fields of business.</p>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 relative w-96 h-72">
        <Image src={workshop} placeholder="blur" alt="meeting internal PT Samudera Biru Nusantara" fill className="object-cover" />
      </div>
    </div>
  </div>
);

export default HomeExperience;
