import Image from 'next/image';

const ServiceCard = ({
  title, description, image, alt = '',
}) => (
  <div className="flex flex-col w-[17.5rem] bg-white shadow-xl rounded-md overflow-hidden">
    <div className="flex h-[13rem] w-full relative">
      {image && <Image src={image} placeholder="blur" alt={alt} fill className="object-cover" /> }
    </div>
    <div className="flex h-[8rem] flex-col items-center p-2">
      <h1 className="font-bold text-lg mb-1 text-gray-900">{title}</h1>
      <p className="text-sm text-justify text-gray-500">
        {description}
      </p>
    </div>
  </div>
);

export default ServiceCard;
