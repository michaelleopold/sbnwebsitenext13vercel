import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MenuTextBigScreen = ({ darkMode, routeName, name }) => {
  const pathname = usePathname();

  return (
    <h1 className={`py-1 px-3 rounded-xl ${pathname === routeName ? 'bg-blue-400' : ''} hover:cursor-pointer active:opacity-30 ${darkMode ? 'text-black' : 'text-white'}`}>
      <Link href={routeName}>{name}</Link>
    </h1>
  );
};

export default MenuTextBigScreen;
