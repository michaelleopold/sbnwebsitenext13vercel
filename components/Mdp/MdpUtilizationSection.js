import MdpUtilizationSectionLargeScreen from './UtilizationSection/MdpUtilizationSectionLargeScreen';
import MdpUtilizationSectionSmallScreen from './UtilizationSection/MdpUtilizationSectionSmallScreen';

const MdpUtilizationSection = () => (
  <>
    {/* Small Screen (0 - lg) */}
    <div className="lg:hidden">
      <MdpUtilizationSectionSmallScreen />
    </div>

    {/* Large Screen (lg - 2xl) */}
    <div className="hidden lg:block">
      <MdpUtilizationSectionLargeScreen />
    </div>

  </>
);

export default MdpUtilizationSection;
