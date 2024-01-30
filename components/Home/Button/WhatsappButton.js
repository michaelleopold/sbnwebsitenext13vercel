import Image from 'next/image';

const WhatsappButton = () => (
  <a href="http://api.whatsapp.com/send?phone=6285251455565" className="rounded-md shadow-lg flex justify-center items-center bg-whatsapp hover:opacity-60 active:opacity-20 w-52 md:w-60 h-[3rem] py-3 mt-[0.3rem] space-x-3 cursor-pointer transition-all">
    <h1 className="font-bold text-white text-lg">Contact Us</h1>
    <div className='ml-2 flex justify-center'>
      <Image src="/icons/whatsapp-white.png" alt="whatsapp" width={28} height={28} />
    </div>
  </a>
);

export default WhatsappButton;
