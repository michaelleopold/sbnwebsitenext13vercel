import Image from 'next/image';

const MdpUtilizationSmallCard = ({
  title, description, image, alt = '', sizes = '100vw',
}) => (
  <div className="flex flex-col w-[17.5rem] md:w-[22rem] bg-white shadow-xl rounded-md overflow-hidden">
    <div className="flex h-[13rem] md:h-[17rem] w-full relative">
      {image && <Image src={image} placeholder="blur" sizes={sizes} alt={alt} fill className="object-cover" /> }
    </div>
    <div className="flex h-[6.6rem] xsm:h-[8.3rem] md:h-[8rem] flex-col items-center pt-3 px-4">
      <h1 className="font-bold text-lg xsm:text-xl md:text-2xl uppercase text mb-2 md:mb-3 text-gray-900">{title}</h1>
      <p className="xsm:text-lg md:text-xl leading-5 xsm:leading-6 md:leading-[1.6rem] text-justify text-gray-500">
        {description}
      </p>
    </div>
  </div>
);

export default MdpUtilizationSmallCard;
