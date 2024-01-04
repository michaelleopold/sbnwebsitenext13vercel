import { memo } from 'react';

import ServiceCard from './ServiceCard';

// images
import lifting from '../../public/images/services/lifting.webp';
import dredging from '../../public/images/services/dredging.webp';
import reclamation from '../../public/images/services/reclamation.webp';
import fabrication from '../../public/images/services/fabrication.webp';

const ServiceContent = () => (
  <>
    <div className="w-full py-20 flex flex-col items-center xl:hidden">
      <div className="w-full max-w-[25rem] px-4 sm:px-0 sm:max-w-[30rem]">
        <h1 className="text-[#0094DF] font-semibold text-[1.2rem]">Our Services</h1>
        <h1 className="mt-2 font-bold text-[1.6rem] text-gray-900">We Offer a Wide Range Of Services And Provide Complete Client Satisfaction</h1>
        <div className="w-12 border-2 border-[#0094DF] mt-2" />
        <p className="mt-5 text-gray-500">
        We, SBN offers various scopes of services thoroughly and will be carried out by
            experienced experts. Our scope of services covers, but not limited
            to, the following jobs:
        </p>
      </div>

      <div className="flex md:hidden flex-col w-full max-w-[25rem] sm:max-w-[30rem] items-center pt-20 space-y-12">
        <ServiceCard title="MINE PUMP" alt="mine pump" image={lifting} description="Complete Slurry or Mud removal, Dewatering removal, others." />
        <ServiceCard title="DREDGING" alt="dredging" image={dredging} description="All types of dredging including silting of the jetty area, silting of the path to the jetty, and others." />
        <ServiceCard title="SAND PUMP & RECLAMATION" alt="sand pump" image={reclamation} description="Pumping sand as construction sand, quartz sand, complete reclamation, others." />
        <ServiceCard title="FABRICATION" alt="fabrication" image={fabrication} description="We can manufacture mine slurry pumps, dewatering pumps, sand pumps, slurry tanks, pontoons and more." />
      </div>

      <div className="hidden md:flex flex-row w-[40rem] pt-20">
        <div className="flex flex-1 flex-col space-y-12 items-center">
          <ServiceCard title="MINE PUMP" alt="mine pump" image={lifting} description="Complete Slurry or Mud removal, Dewatering removal, others." />
          <ServiceCard title="DREDGING" alt="dredging" image={dredging} description="All types of dredging including silting of the jetty area, silting of the path to the jetty, and others." />
        </div>
        <div className="flex flex-1 flex-col space-y-12 items-center">
          <ServiceCard title="SAND PUMP & RECLAMATION" alt="sand pump" image={reclamation} description="Pumping sand as construction sand, quartz sand, complete reclamation, others." />
          <ServiceCard title="FABRICATION" alt="fabrication" image={fabrication} description="We can manufacture mine slurry pumps, dewatering pumps, sand pumps, slurry tanks, pontoons and more." />
        </div>
      </div>
    </div>

    <div className="hidden xl:flex w-full h-[55rem] bg-white flex-row py-20 px-[2rem] 2xl:px-[7rem]">
      <div className="flex flex-1 flex-col h-full justify-start pt-20 items-center">
        <div className="w-[36rem] 2xl:w-[42rem]">
          <h1 className="text-[#0094DF] font-semibold text-xl">Our Services</h1>
          <h1 className="mt-2 font-bold text-3xl 2xl:text-4xl text-gray-900">We Offer a Wide Range Of Services And Provide Complete Client Satisfaction</h1>
          <div className="w-12 border-2 border-[#0094DF] mt-2" />
          <p className="mt-5 text-gray-500 text-lg">
            We, SBN offers various scopes of services thoroughly and will be carried out by
            experienced experts. Our scope of services covers, but not limited
            to, the following jobs:
          </p>
        </div>
      </div>
      <div className="w-2" />
      <div className="flex flex-1">
        <div className="flex flex-row w-[41rem]">
          <div className="relative top-5 flex flex-1 flex-col space-y-12 items-center">
            <ServiceCard title="MINE PUMP" alt="mine pump" image={lifting} description="Complete Slurry or Mud removal, Dewatering removal, others." />
            <ServiceCard title="DREDGING" alt="dredging" image={dredging} description="All types of dredging including silting of the jetty area, silting of the path to the jetty, and others." />
          </div>
          <div className="relative -top-5 flex flex-1 flex-col space-y-12 items-center">
            <ServiceCard title="SAND PUMP & RECLAMATION" alt="sand pump" image={reclamation} description="Pumping sand as construction sand, quartz sand, complete reclamation, others." />
            <ServiceCard title="FABRICATION" alt="fabrication" image={fabrication} description="We can manufacture mine slurry pumps, dewatering pumps, sand pumps, slurry tanks, pontoons and more." />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default memo(ServiceContent);
