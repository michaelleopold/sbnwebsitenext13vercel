import Image from 'next/image';

const ProjectCardBelowLg = ({
  image, alt, title, description,
}) => (
  <div className="inline-block px-3">
    <div
      className="relative w-72 h-96 max-w-xs overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
    >
      {image && <Image src={image} placeholder="blur" alt={alt} fill className="object-cover" />}
    </div>
    <div className="mt-6">
      <h1 className="font-bold tracking-wide mb-1">{title}</h1>
      <p className="text-teal-500">{description}</p>
    </div>
  </div>
);

export default ProjectCardBelowLg;
