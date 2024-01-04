import Image from 'next/image';

const SingleProjectComponent = ({
  year, companyName, description, projectName, image, alt,
}) => (
  <>
    <div className="flex flex-row w-full">
      <h1 className="font-normal text-7xl text-purple-900">{year}</h1>
      <div className="flex flex-col ml-5">
        <h3 className="font-medium text-xl text-purple-900 mb-[0.2rem]">{companyName}</h3>
        <p className="text-gray-500 text-justify">{description}</p>
      </div>
    </div>
    <div className="relative h-[20rem] w-[35rem] mt-5 rounded-md shadow-lg overflow-hidden">
      {image && <Image src={image} placeholder="blur" sizes="(max-width: 1450px) 33vw, 50vw" alt={alt} fill className="object-cover" />}
    </div>
    <h1 className="self-center mt-6 font-bold text-purple-900 text-4xl">PROJECT</h1>
    <h1 className="self-center mt-6 font-bold text-purple-900 text-4xl text-center">{projectName}</h1>
  </>
);

export default SingleProjectComponent;
