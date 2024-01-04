/* eslint-disable max-len */

import Image from 'next/image';

import aboutus from '../../public/images/about/aboutus.webp';

const StoryAbout = () => (
  <div className="flex w-full px-4 py-20 justify-center xl:flex-row">
    <div className="flex w-[30rem] md:w-[45rem] xl:w-[78rem] xl:flex-row">
      <div className="flex flex-col flex-1 xl:w-[53rem] xl:flex-none xl:pr-14">
        <h1 className="mt-2 font-bold text-3xl text-gray-900 text-center xl:text-left">Our Story</h1>
        <h1 className="hidden xl:block text-[#0094DF] text-xl">(Know More About PT. SBN)</h1>
        <p className="mt-5 text-gray-500 text-justify text-lg md:text-xl">
        PT. Samudera Biru Nusantara (SBN) is a privately owned independent company in Indonesia established since 2000. We have specializing in 2 main scopes of business, namely <span className="inline font-bold text-gray-600">slurry & dewatering services</span> and <span className="inline font-bold text-gray-600">underwater & marine services</span>.
        </p>
        <p className="text-gray-500 text-justify mt-5 text-lg md:text-xl">
        SBN is experienced in working on slurry and water management in mining, sand pumping, dredging, land reclamation, construction, and oil and gas industries. With quality pump units and a reliable and professional team, SBN provides a total solution for your pumping problems.
        </p>
        <p className="text-gray-500 text-justify mt-5 text-lg md:text-xl">
        As a member of IMCA (International Marine Contractor Association), we currently operates 5 (five) sets of Surface Gas and Air Diving Equipment designed to meet and comply with all the required HSE regulations and IMCA standards.
        </p>
      </div>

      <div className="hidden xl:flex justify-center w-[25rem]">
        <div className="relative w-full h-[35rem]">
          {aboutus && <Image src={aboutus} alt="PT Samudera Biru Nusantara bekerja menggunakan submersible pump" sizes="50vh" fill className="object-cover" />}
        </div>
      </div>
    </div>
  </div>
);

export default StoryAbout;
