'use client';

import { useRouter } from 'next/navigation';

import ProjectCardLg from '../Project/ProjectCardLg';
import ProjectCardBelowLg from '../Project/ProjectCardBelowLg';

// images
import wika from '../../public/images/projects/project-belawan.webp';
import kpuc from '../../public/images/projects/project-separi-dan-malinau.webp';
import dh from '../../public/images/projects/project-asam-asam-dan-bengalon.webp';
import gie from '../../public/images/projects/project-jetty-dondang.webp';
import jba from '../../public/images/projects/project-melak.webp';

const HomeProjectListHorizontal = () => {
  const router = useRouter();

  return (
    <>
      <div className="hidden lg:flex flex-row w-full bg-white">
        <div className="flex flex-col w-180 pl-24 pr-2 mr-10 justify-center mb-56">
          <div className="flex flex-col items-start">
            <button onClick={() => router.push('/projects')}>
              <h1 className="text-gray-900 font-bold text-3xl tracking-tight cursor-pointer">OUR EXPERIENCES</h1>
            </button>
            <div className="w-12 border-2 border-[#0094DF] mt-2" />
          </div>
          <h1 className="w-[30rem mt-4 text-gray-500 text-lg">we have a lot of experience in pumping projects both in well-known private companies and government companies.</h1>
          <h1 className="w-[30rem] mt-2 text-[#0094DF]">(slide right)</h1>
        </div>
        <div
          className="flex overflow-x-scroll pb-10 hide-scroll-bar hide-scroll-bar pt-10 pl-5 mb-44 mt-20"
        >
          <div
            className="flex flex-nowrap space-x-5"
          >
            <ProjectCardLg title='PT. Wika-Hutama Jo (WIKA)' alt='project di PT. WIKA' description='Working as Sub-Contractor for Dredging Belawan Jetty Phase 2 in Belawan, North Sumatera.' image={wika} />
            <ProjectCardLg title='PT. KALTIM PRIMA UTAMA COAL' alt='project di PT. KPUC' description='Working as Contractor for Slurry Removal in 2 sites namely Separi, East Kalimantan and Malinau, North Kalimantan.' image={kpuc} />
            <ProjectCardLg title='PT. DHARMA HENWA' alt='projet di PT. DH' description='Working as Sub-Contractor for Slurry Removal in 2 sites namely Bengalon, East Kalimantan and Asam-asam, South Kalimantan.' image={dh} />
            <ProjectCardLg title='PT. GLOBALINDO INTI ENERGIE' alt='project di PT. GIE' description='Working as Contractor for Jetty Dredging in Dondang, East Kalimantan.' image={gie} />
            <ProjectCardLg title='PT. JOMIMA BARAMULIA ABADI' alt='project di PT. JBA' description='Working as Contractor for Slurry and Dewatering Removal in Melak, East Kalimantan.' image={jba} />

            <div className="px-3 flex justify-center items-center">
              <button type="button" onClick={() => router.push('/projects')} className="bg-teal-400 flex justify-center items-center py-2 shadow-lg rounded-lg w-24 h-10 hover:shadow-2xl hover:bg-teal-300 active:bg-teal-500 transition-shadow duration-300 ease-in-out cursor-pointer">
                <h1 className="text-white font-bold">see more</h1>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:hidden w-full py-20 bg-white overflow-hidden">
        <div className="flex flex-col w-full max-w-[35rem] justify-center items-center self-center mb-5">
          <div className="flex flex-col">
            <button onClick={() => router.push('/projects')}>
              <h1 className="text-gray-900 font-bold text-3xl tracking-tight cursor-pointer">OUR EXPERIENCES</h1>
            </button>
            <div className="w-12 border-2 border-[#0094DF] mt-2 self-start" />
          </div>
          <h1 className="mx-4 mt-4 text-gray-500 text-center text-lg">we have a lot of experience in pumping projects both in well-known private companies and government companies.</h1>
          <h1 className="w-full mt-2 text-[#0094DF] text-center">(slide right)</h1>
        </div>
        <div
          className="flex overflow-x-scroll pb-10 hide-scroll-bar hide-scroll-bar pt-10 pl-5"
        >
          <div
            className="flex flex-nowrap"
          >
            <ProjectCardBelowLg title='PT. Wika-Hutama Jo (WIKA)' alt='project di PT. WIKA' description='Working as Sub-Contractor for Dredging Belawan Jetty Phase 2 in Belawan, North Sumatera.' image={wika} />
            <ProjectCardBelowLg title='PT. KALTIM PRIMA UTAMA COAL' alt='project di PT. KPUC' description='Working as Contractor for Slurry Removal in 2 sites namely Separi, East Kalimantan and Malinau, North Kalimantan.' image={kpuc} />
            <ProjectCardBelowLg title='PT. DHARMA HENWA' alt='projet di PT. DH' description='Working as Sub-Contractor for Slurry Removal in 2 sites namely Bengalon, East Kalimantan and Asam-asam, South Kalimantan.' image={dh} />
            <ProjectCardBelowLg title='PT. GLOBALINDO INTI ENERGIE' alt='project di PT. GIE' description='Working as Contractor for Jetty Dredging in Dondang, East Kalimantan.' image={gie} />
            <ProjectCardBelowLg title='PT. JOMIMA BARAMULIA ABADI' alt='project di PT. JBA' description='Working as Contractor for Slurry and Dewatering Removal in Melak, East Kalimantan.' image={jba} />
            <div className="px-3 flex justify-center items-center">
              <button type="button" onClick={() => router.push('/projects')} className="bg-teal-400 flex justify-center items-center py-2 shadow-lg rounded-lg w-24 h-10 hover:shadow-2xl hover:bg-teal-300 active:bg-teal-500 transition-shadow duration-300 ease-in-out cursor-pointer">
                <h1 className="text-white font-bold">see more</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProjectListHorizontal;
