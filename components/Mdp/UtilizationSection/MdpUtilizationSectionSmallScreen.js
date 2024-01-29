/* eslint-disable max-len */
import MdpInPlantationW400 from '../../../public/images/mdp/MDP in Plantation_w400.webp';
import MdpInRiverW400 from '../../../public/images/mdp/MDP in River_w400.webp';
import MdpInWorkingW400 from '../../../public/images/mdp/MDP in Working_w400.webp';

import MdpUtilizationSmallCard from './MdpUtilizationSmallCard';

const MdpUtilizationSectionSmallScreen = () => (
  <div className="w-full py-20 flex flex-col items-center">

    <div className="w-full max-w-lg px-4 md:max-w-2xl">
      <h1 className="text-main font-semibold text-[1.2rem] md:text-[1.4rem]">MDP Application</h1>
      <h1 className="mt-2 font-bold text-[1.6rem] md:text-3xl text-gray-900">MDP is Applicable in Many Different Fields and Industries</h1>
      <div className="w-12 border-2 border-main mt-2" />
      <p className="mt-5 xsm:text-lg  md:text-xl text-gray-500 text-justify">
        Mobile Dewatering Pumps excel in diverse applications—from
        irrigation in plantations, flood control in urban areas,
        regulating water levels along rivers, and many more.
      </p>
    </div>

    <div className="flex flex-col w-full max-w-[25rem] sm:max-w-[30rem] items-center pt-14 space-y-12">
      <MdpUtilizationSmallCard title="Flood" alt="Mobile Dewatering Pump Use to Control Flood Elevation in Urban Areas" image={MdpInWorkingW400} sizes="100vw" description="Use to Control Flood Elevation in Urban Areas." />
      <MdpUtilizationSmallCard title="River" alt="Mobile Dewatering Pump Use to Control Water Elevation in The River" image={MdpInRiverW400} sizes="100vw" description="Use to Control Water Elevation in The River." />
      <MdpUtilizationSmallCard title="Plantation" alt="Mobile Dewatering Pump Use in Plantation" image={MdpInPlantationW400} sizes="100vw" description="Use in Plantations for Controlling Irrigation and Water Elevation." />
    </div>

  </div>
);

export default MdpUtilizationSectionSmallScreen;
