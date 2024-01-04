/* eslint-disable max-len */
import Image from 'next/image';

// components
import ProjectHistory from './ProjectHistory';
import SingleProjectComponent from './ProjectComponent/SingleProjectComponent';

import belawan from '../../public/images/projects/project-belawan.webp';
import separimalinau from '../../public/images/projects/project-separi-dan-malinau.webp';
import bengalonasam from '../../public/images/projects/project-asam-asam-dan-bengalon.webp';
import amborawang from '../../public/images/projects/project-jetty-ambalat.webp';
import dondang from '../../public/images/projects/project-jetty-dondang.webp';
import melak from '../../public/images/projects/project-melak.webp';

const ProjectListVertical = () => (
  <div className="w-full py-20 xl:pt-28 xl:pb-[30rem] flex flex-col justify-center items-center bg-white">
    <div className="flex flex-col w-full mb-20">
      <div className="flex flex-col mx-auto justify-center w-full max-w-[25rem] px-4 sm:max-w-[32rem] md:max-w-[42rem]">
        <h1 className="text-gray-900 font-bold text-3xl tracking-tight">OUR PAST & CURRENT PROJECTS</h1>
        <div className="w-12 border-2 border-[#0094DF] mt-2" />
        <h1 className="mt-4 text-gray-500 text-lg md:text-xl">We have a lot of experience in pumping projects from well-known private companies, public listed companies, and government companies.</h1>
      </div>

      <div className="mx-auto w-full max-w-[25rem] px-4 sm:max-w-[32rem] md:max-w-[42rem] mt-12 flex flex-col space-y-16 xl:hidden">
        <div className="w-full flex flex-col">
          <h1 className="font-medium text-2xl text-gray-900">Project Dredging - PT. Wika-Hutama Jo (WIKA)</h1>
          <h3 className="font-light mb-3 text-gray-500 md:text-lg">(Lokasi Belawan, Medan) - 2018</h3>
          <div className="relative h-60 md:h-80 w-full md:w-[35rem] rounded-md shadow-lg overflow-hidden">
            {belawan && <Image src={belawan} placeholder="blur" alt="Project PT Samudera Biru Nusantara di PT WIKA Dredging Project" sizes="(max-width: 640px): 33vw, (max-width: 768px): 40vw, (max-width: 1000) 50vw, 60vw" fill className="object-cover" />}
          </div>
        </div>

        <div className="w-full flex flex-col">
          <h1 className="font-medium text-2xl text-gray-900">Project Slurry Removal - PT. Kayan Putra Utama Coal (KPUC)</h1>
          <h3 className="font-light mb-3 text-gray-500">(Lokasi Separi, Kalimantan Timur & Malinau, Kalimantan Utara) - 2019</h3>
          <div className="relative h-60 md:h-80 w-full md:w-[35rem] rounded-md shadow-lg overflow-hidden">
            {separimalinau && <Image src={separimalinau} placeholder="blur" alt="Project Pompa Slurry/Lumpur PT Samudera Biru Nusantara di PT Kaltim Prima Utama Coal" sizes="(max-width: 640px): 33vw, (max-width: 768px): 40vw, (max-width: 1000) 55vw, 70vw" fill className="object-cover" />}
          </div>
        </div>

        <div className="w-full flex flex-col">
          <h1 className="font-medium text-2xl text-gray-900">Project Slurry Removal - PT. Dharma Henwa (DH)</h1>
          <h3 className="font-light mb-3 text-gray-500">(Lokasi Asam-Asam, Kalimantan Selatan & Bengalon, Kalimantan Timur) - 2019</h3>
          <div className="relative h-60 md:h-80 w-full md:w-[35rem] rounded-md shadow-lg overflow-hidden">
            {bengalonasam && <Image src={bengalonasam} placeholder="blur" alt="Project Pompa Slurry/Lumpur PT Samudera Biru Nusantara di PT Dharma Henwa" sizes="(max-width: 640px): 33vw, (max-width: 768px): 40vw, (max-width: 1000) 55vw, 70vw" fill className="object-cover" />}
          </div>
        </div>

        <div className="w-full flex flex-col">
          <h1 className="font-medium text-2xl text-gray-900">Project Jetty Dredging - PT. TBS</h1>
          <h3 className="font-light mb-3 text-gray-500">(Lokasi Amborawang Laut, Kalimantan Timur) - 2021</h3>
          <div className="relative h-60 md:h-80 w-full md:w-[35rem] rounded-md shadow-lg overflow-hidden">
            {dondang && <Image src={dondang} placeholder="blur" alt="Project Dredging Atau Pengerukan PT Samudera Biru Nusantara di PT TBS" sizes="(max-width: 640px): 33vw, (max-width: 768px): 40vw, (max-width: 1000) 55vw, 70vw" fill className="object-cover" />}
          </div>
        </div>

        <div className="w-full flex flex-col">
          <h1 className="font-medium text-2xl text-gray-900">Project Jetty Dredging - PT. Globalindo Inti Energi</h1>
          <h3 className="font-light mb-3 text-gray-500">(Lokasi Dondang, Kalimantan Timur) - 2021</h3>
          <div className="relative h-60 md:h-80 w-full md:w-[35rem] rounded-md shadow-lg overflow-hidden">
            {amborawang && <Image src={amborawang} placeholder="blur" alt="Project Dredging Atau Pengerukan PT Samudera Biru Nusantara di PT Globalindo Intie Energi" sizes="(max-width: 640px): 33vw, (max-width: 768px): 40vw, (max-width: 1000) 55vw, 70vw" fill className="object-cover" />}
          </div>
        </div>

        <div className="w-full flex flex-col">
          <h1 className="font-medium text-2xl text-gray-900">Project Slurry Removal & Dewatering - PT. Jomima Baramulia Abadi</h1>
          <h3 className="font-light mb-3 text-gray-500">(Lokasi Melak, Kalimantan Timur) - 2021</h3>
          <div className="relative h-60 md:h-80 w-full md:w-[35rem] rounded-md shadow-lg overflow-hidden">
            {melak && <Image src={melak} placeholder="blur" alt="Project Pompa Slurry/Lumpur dan Dewatering/Air PT Samudera Biru Nusantara di PT JBA" sizes="(max-width: 640px): 33vw, (max-width: 768px): 40vw, (max-width: 1000) 55vw, 70vw" fill className="object-cover" />}
          </div>
        </div>

      </div>

      <div className="hidden relative xl:flex w-150 mt-12 flex-col self-center">
        <ProjectHistory />

        <div className="absolute top-24 right-[22rem] flex flex-col w-[35rem]">
          {belawan && <SingleProjectComponent image={belawan} alt="Project PT Samudera Biru Nusantara di PT WIKA Dredging Project" year="2018" companyName="PT. WIKA-HUTAMA JO" description="Working as Sub-Contractor for Dredging Belawan Jetty Phase 2 in Belawan, North Sumatera." projectName="JETTY DREDGING" />}
        </div>

        <div className="absolute top-[43rem] left-[22rem] flex flex-col w-[35rem]">
          {separimalinau && <SingleProjectComponent image={separimalinau} alt="Project Pompa Slurry/Lumpur PT Samudera Biru Nusantara di PT Kaltim Prima Utama Coal" year="2019" companyName="PT. KALTIM PRIMA UTAMA COAL" description="Working as Contractor for Slurry Removal in 2 sites namely Separi, East Kalimantan and Malinau, North Kalimantan." projectName="SLURRY REMOVAL" />}
        </div>

        <div className="absolute top-[78rem] right-[22rem] flex flex-col w-[35rem]">
          {bengalonasam && <SingleProjectComponent image={bengalonasam} alt="Project Pompa Slurry/Lumpur PT Samudera Biru Nusantara di PT Dharma Henwa" year="2019" projectName="SLURRY REMOVAL" companyName="PT. Dharma Henwa" description="Working as Contractor for Slurry Removal in 2 sites namely Asam-Asam, South Kalimantan and Bengalon, East Kalimantan" />}
        </div>

        <div className="absolute top-[115rem] left-[22rem] flex flex-col w-[35rem]">
          {amborawang && <SingleProjectComponent image={amborawang} alt="Project Dredging Atau Pengerukan PT Samudera Biru Nusantara di PT Globalindo Intie Energi" year="2021" companyName="PT. TBS" description="Working as Contractor for Jetty Dredging in Amborawang Laut, East Kalimantan." projectName="JETTY DREDGING" />}
        </div>

        <div className="absolute top-[150rem] right-[22rem] flex flex-col w-[35rem]">
          {dondang && <SingleProjectComponent image={dondang} alt="Project Dredging Atau Pengerukan PT Samudera Biru Nusantara di PT TBS" year="2021" companyName="PT. GLOBALINDO INTI ENERGIE" description="Working as Contractor for Jetty Dredging in Dondang, East Kalimantan." projectName="JETTY DREDGING" />}
        </div>

        <div className="absolute top-[187rem] left-[22rem] flex flex-col w-[35rem]">
          {melak && <SingleProjectComponent image={melak} alt="Project Pompa Slurry/Lumpur dan Dewatering/Air PT Samudera Biru Nusantara di PT JBA" year="2021" companyName="PT. JOMIMA BARAMULIA ABADI" description="Working as Contractor for Slurry and Dewatering Removal in Melak, East Kalimantan." projectName="SLURRY & DEWATERING REMOVAL" />}
        </div>
      </div>
    </div>
  </div>
);

export default ProjectListVertical;
