import MdpHeroSectionLargeScreen from './HeroSection/MdpHeroSectionLargeScreen';
import MdpHeroSectionMediumScreen from './HeroSection/MdpHeroSectionMediumScreen';
import MdpHeroSectionSmallScreen from './HeroSection/MdpHeroSectionSmallScreen';

const MdpHeroSection = () => (
  <>
    {/* SMALL SCREEN (0 px - lg) */}
    <div className="lg:hidden">
      <MdpHeroSectionSmallScreen />
    </div>

    {/* MEDIUM SCREEN (lg - xl) */}
    <div className="hidden lg:block xl:hidden">
      <MdpHeroSectionMediumScreen />
    </div>

    {/* LARGE SCREEN (xl - 2xl) */}
    <div className="hidden xl:block">
      <MdpHeroSectionLargeScreen />
    </div>

  </>
);

export default MdpHeroSection;
