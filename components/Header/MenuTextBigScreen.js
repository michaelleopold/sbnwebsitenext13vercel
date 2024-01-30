import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const MenuTextBigScreen = ({ darkMode, routeName, name }) => {
  const pathname = usePathname();

  if (name === 'MDP') {
    return (
      <div className={`relative ${pathname === routeName ? 'bg-blue-400' : ''} py-1 px-3 rounded-xl`}>
        <h1 className={`relative z-40 hover:cursor-pointer active:opacity-30 ${darkMode ? 'text-black' : 'text-white'} ${pathname === routeName ? 'text-white' : 'text-black'}`}>
          <Link href={routeName}>{name}</Link>
        </h1>
        <div className='absolute -top-[0.7rem] -right-[0.13rem] z-0'>
          <Image src="/icons/new.png" alt="New Icon" width={32} height={32} />
        </div>
      </div>
    );
  }

  return (
    <h1 className={`py-1 px-3 rounded-xl ${pathname === routeName ? 'bg-blue-400' : ''} hover:cursor-pointer active:opacity-30 ${darkMode ? 'text-black' : 'text-white'}`}>
      <Link href={routeName}>{name}</Link>
    </h1>
  );
};

export default MenuTextBigScreen;
