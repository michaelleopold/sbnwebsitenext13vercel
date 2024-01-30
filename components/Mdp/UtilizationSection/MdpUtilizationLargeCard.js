import Image from 'next/image';

const MdpUtilizationLargeCard = ({
  description, image, alt = '', sizes = '100vw', top = 'top-[20.5rem]', topXl = 'xl:top-[22.5rem]', top2Xl = '2xl:top-[24.5rem]', maxWdith = 'max-w-[34.5rem]',
}) => (
  <div className="relative">
    <div className="relative drop-shadow-xl h-96 xl:h-100 2xl:h-110 w-170 xl:w-[50rem] 2xl:w-[57rem] rounded-xl overflow-hidden z-0">
      {image && <Image src={image} placeholder="blur" sizes={sizes} alt={alt} fill className="object-cover brightness-[0.82]" /> }
    </div>
    <h1 className={`absolute ${top} ${topXl} ${top2Xl} left-7 text-white font-semibold text-[1.75rem] xl:text-[1.8rem] 2xl:text-[2rem] leading-9 w-full ${maxWdith} 2xl:max-w-[36rem] z-10`}>{description}</h1>
  </div>
);

export default MdpUtilizationLargeCard;
