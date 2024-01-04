/* eslint-disable max-len */

import Image from 'next/image';

const HomeHeaderContent = () => (
  <div className="flex-grow flex flex-col justify-center items-center text-white">
    <h1 className="text-2xl md:text-[1.6rem] lg:text-3xl font-light mb-3">We are Certified Engineers</h1>
    <h1 className="text-5xl text-center md:text-[3.1rem] md:mb-1 lg:mb-0 lg:text-6xl font-bold">PUMPING SERVICES</h1>
    <h1 className="text-3xl text-center md:text-[3.1rem] lg:text-6xl font-bold text-[#0094DF]">EXPERIENCED & PROFESSIONAL</h1>
    <div className="w-fit mt-6">
      <a href="http://api.whatsapp.com/send?phone=6285251455565" className="rounded-md shadow-lg flex justify-center items-center bg-whatsapp hover:opacity-60 active:opacity-20 w-full py-2 px-6 mt-[0.3rem] space-x-3 cursor-pointer transition-all">
        <h1 className="font-bold text-white">Contact Us</h1>
        <div className='ml-2 flex justify-center'>
          <Image src="/icons/whatsapp-white.png" alt="whatsapp" width={28} height={28} />
        </div>
      </a>
    </div>
  </div>
);

export default HomeHeaderContent;
