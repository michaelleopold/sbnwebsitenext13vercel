/* eslint-disable max-len */

import CompanyProfileButton from './Button/CompanyProfileButton';
import WhatsappButton from './Button/WhatsappButton';

const HomeHeaderContent = () => (
  <div className="flex-grow flex flex-col justify-center items-center text-white">
    <h1 className="text-2xl text-center md:text-[1.6rem] lg:text-3xl font-light mb-3">PT Samudera Biru Nusantara</h1>
    <h1 className="text-5xl text-center md:text-[3.1rem] md:mb-1 lg:mb-0 lg:text-6xl font-bold">SLURRY & DEWATERING</h1>
    <h1 className="text-3xl text-center md:text-[3.1rem] lg:text-6xl font-bold text-[#0094DF]">TOTAL PUMPING SOLUTION</h1>
    <div className="flex flex-col mt-6 space-y-3">
      <WhatsappButton />
      <CompanyProfileButton />
    </div>
  </div>
);

export default HomeHeaderContent;
