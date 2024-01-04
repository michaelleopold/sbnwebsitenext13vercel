'use client';

import Link from 'next/link';
import { useState, memo } from 'react';

import Image from 'next/image';
import MenuTextBigScreen from './Header/MenuTextBigScreen';

const Header = ({ darkMode = false }) => {
  const [mobileMenuClicked, setMobileMenuClicked] = useState(false);

  return (
    <>
      <div className="hidden lg:flex items-center justify-between">
        <div className="w-40 ml-24 flex items-center z-10">
          <Image src="/logos/sbn.webp" alt="PT Samudera Biru Nusantara logo" width={160} height={86} />
        </div>
        <div className="flex flex-row space-x-6 text-white font-mono pr-24">
          <MenuTextBigScreen routeName='/' darkMode={darkMode} name="Home" />
          <MenuTextBigScreen routeName='/services' darkMode={darkMode} name="Services" />
          <MenuTextBigScreen routeName='/projects' darkMode={darkMode} name="Projects" />
          <MenuTextBigScreen routeName='/about' darkMode={darkMode} name="About" />
          <MenuTextBigScreen routeName='/contact' darkMode={darkMode} name="Contact" />
        </div>
      </div>

      <div className="lg:hidden flex justify-between items-center w-full">
        <div className="ml-10 w-28 md:w-40 flex items-center z-10">
          <Image src="/logos/sbn.webp" alt="PT Samudera Biru Nusantara logo" width={256} height={138} />
        </div>
        <div className="pr-10">
          <button type="button" onClick={() => {
            setMobileMenuClicked(true);
          }}>
            <Image src="/icons/menu.png" alt="menu icon" width={32} height={32} className="w-7 md:w-8 hover:opacity-60 active:opacity-30" />
          </button>
        </div>
      </div>

      <div className={`lg:hidden z-20 fixed h-[35rem] inset-x-0 top-0 bg-gray-800 transform ${mobileMenuClicked ? 'translate-x-0' : '-translate-x-full'} transition duration-300 ease-in-out flex flex-col shadow-sm`}>
        <div className="flex flex-row w-full items-center justify-between shadow-md shadow-gray-900 px-10 py-2">
          <div className="w-[7rem] flex justify-center items-center">
            <Image src="/logos/sbn.webp" alt="PT Samudera Biru Nusantara logo" width={256} height={138} />
          </div>
          <button type="button" className="flex justify-center" onClick={() => {
            setMobileMenuClicked(false);
          }}>
            <Image src="/icons/close.png" alt="close icon" width={20} height={20} className="hover:opacity-60 active:opacity-30" />
          </button>
        </div>
        <div className="flex flex-col w-full items-start space-y-5 p-5">
          <h1 className="text-white text-lg">
            <Link href="/">Home</Link>
          </h1>
          <h1 className="text-white text-lg">
            <Link href="/services">Services</Link>
          </h1>
          <h1 className="text-white text-lg">
            <Link href="/projects">Projects</Link>
          </h1>
          <h1 className="text-white text-lg">
            <Link href="/about">About</Link>
          </h1>
          <h1 className="text-white text-lg">
            <Link href="/contact">Contact</Link>
          </h1>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
