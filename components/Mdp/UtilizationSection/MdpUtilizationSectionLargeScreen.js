// components
import MdpUtilizationLargeCard from './MdpUtilizationLargeCard';

// images
import urban from '../../../public/images/mdp/MDP in Working.webp';
import river from '../../../public/images/mdp/MDP in River.webp';
import plantation from '../../../public/images/mdp/MDP in Plantation.webp';

const MdpUtilizationSectionLargeScreen = () => (
  <div className="w-full py-[6rem] flex flex-col items-center">

    <div className="w-full px-4 max-w-[60rem]">
      <h1 className="text-main font-semibold text-[1.7rem]">MDP Application</h1>
      <h1 className="mt-2 font-bold text-[2.1rem] leading-9 text-gray-900">MDP is Applicable in Many Different Fields and Industries</h1>
      <div className="w-12 border-2 border-main mt-2" />
      <p className="mt-5 text-xl text-gray-500 text-justify">
        Mobile Dewatering Pumps excel in diverse applications—from
        irrigation in plantations, flood control in urban areas,
        regulating water levels along rivers, and many more.
      </p>
    </div>

    <div className="flex flex-col w-full max-w-[25rem] sm:max-w-[30rem] items-center pt-14 space-y-14">
      <MdpUtilizationLargeCard alt="Mobile Dewatering Pump Use to Control Flood Elevation in Urban Areas" image={urban} sizes="100vw" description="Control Flood Elevation in Urban Areas." />
      <MdpUtilizationLargeCard alt="Mobile Dewatering Pump Use to Control Water Elevation in The River" image={river} sizes="100vw" description="Control Water Elevation in The River." />
      <MdpUtilizationLargeCard alt="Mobile Dewatering Pump Use in Plantation" image={plantation} sizes="100vw" description="Plantations for Controlling Irrigation and Water Elevation." top='top-[18rem]' maxWdith='max-w-[26rem]' topXl='xl:top-[20rem]' top2Xl='2xl:top-[22rem]' />
    </div>

  </div>
);

export default MdpUtilizationSectionLargeScreen;
