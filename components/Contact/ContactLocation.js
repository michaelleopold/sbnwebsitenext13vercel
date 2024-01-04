/* eslint-disable max-len */
import { memo } from 'react';

const ContactLocation = () => (
  <div className="w-full py-20 px-4 bg-gray-100 flex justify-center items-center xl:bg-white">
    <div className="flex flex-col justify-center items-center w-[22rem] md:w-[40rem] lg:w-[50rem] xl:w-[60rem]">
      <h1 className="text-2xl font-bold mb-2 text-gray-900 md:text-3xl">Find Us on Google Maps</h1>
      <p className="text-gray-500 md:text-lg mb-10 text-center">
        Ruko Balikpapan Baru AB 1 No.1, 76114 Balikpapan Selatan, Kalimantan Timur, Indonesia.
      </p>

      <div id="mapouter" className="relative text-right h-110 lg:h-[32rem] w-[22rem] md:w-[40rem] lg:w-[50rem] xl:w-[60rem] shadow-xl">
        <div id="gmap_canvas" className="overflow-hidden bg-none h-110 lg:h-[32rem] w-[22rem] md:w-[40rem] lg:w-[50rem] xl:w-[60rem] rounded-lg">
          <iframe title="Office Location of PT Samudera Biru Nusantara" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1611.1904025608267!2d116.85931000337021!3d-1.2434925821205147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df1473388ea55f7%3A0xe964ff8a0ea5e2f2!2sPT.%20Samudera%20Biru%20Nusantara!5e0!3m2!1sen!2sid!4v1703149159800!5m2!1sen!2sid" className="w-full h-full" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </div>
);

export default memo(ContactLocation);
