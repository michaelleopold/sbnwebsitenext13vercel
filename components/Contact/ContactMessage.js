'use client';

/* eslint-disable no-alert */
import { memo, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Player } from '@lottiefiles/react-lottie-player';
import loadingLottie from '../../public/lotties/general-loading.json';

const ContactMessage = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [successOrFailMessage, setSuccessOrFailMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      setSuccessOrFailMessage('');
      setLoading(true);
      await emailjs.sendForm('service_vmn3enh', 'template_m4eedfq', form.current, 'gqFXv52IsbUQO8y5G');
      setLoading(false);
      setSuccessOrFailMessage('true');
    } catch (err) {
      setLoading(false);
      setSuccessOrFailMessage('fail');
    }
  };

  return (
    <div className="w-full bg-white py-20 flex justify-center items-center">
      <div className="flex flex-col w-100 md:w-130">
        <h1 className="text-2xl font-bold mb-2 text-gray-900 md:text-3xl">SEND MESSAGE</h1>
        <p className="text-gray-500 md:text-lg">
          Get in touch with us. Send us a message.
        </p>
        <div className="mt-8 w-full border-gray-300 border-[0.03rem] bg-gray-300" />
        <form ref={form} onSubmit={onSubmit}>
          <div className="flex flex-row w-full mt-3 space-x-4 md:mt-4">
            <input placeholder="First Name" required name='first_name' className="flex flex-1 h-[2.75rem] pl-3 items-center rounded-md shadow-sm overflow-hidden border-[0.12rem] border-gray-300 text-gray-900 text-sm" />
            <input placeholder="Last Name" required name='last_name' className="flex flex-1 h-[2.75rem] pl-3 items-center rounded-md shadow-sm overflow-hidden border-[0.12rem] border-gray-300 text-gray-900 text-sm" />
          </div>
          <div className="flex flex-row w-full mt-3 space-x-4 md:mt-4">
            <input placeholder="Phone Number" required name='phone_number' className="flex flex-1 h-[2.75rem] pl-3 items-center rounded-md shadow-sm overflow-hidden border-[0.12rem] border-gray-300 text-gray-900 text-sm" />
            <input placeholder="Subject" required name='subject' className="flex flex-1 h-[2.75rem] pl-3 items-center rounded-md shadow-sm overflow-hidden border-[0.12rem] border-gray-300 text-gray-900 text-sm" />
          </div>
          <textarea placeholder="Message" required name='message' className="w-full h-32 mt-3 flex rounded-md shadow-sm overflow-hidden border-[0.12rem] border-gray-300 text-gray-900 text-sm p-3 md:mt-3" />
          {loading ? (
            <div className="w-32 md:w-36 h-10 md:h-12 mt-3 flex justify-center items-center bg-gray-200 rounded-md shadow-md md:mt-4">
              <Player
                autoplay
                loop
                src={loadingLottie}
                className="h-20 w-20"
              />
            </div>
          ) : (
            <input type="submit" value="Send Message" className="w-32 md:w-36 h-10 md:h-12 mt-3 flex justify-center items-center text-white font-bold bg-[#0094DF] rounded-md shadow-md hover:opacity-70 active:opacity-30 cursor-pointer md:mt-4" />
          )}
          <h1 className={`${successOrFailMessage === '' ? 'hidden' : 'block'} ${successOrFailMessage === 'fail' ? 'text-red-500' : 'text-[#0094DF]'}`}>{successOrFailMessage === 'fail' ? 'Failed sending mail, please try again' : 'Success sending mail'}</h1>
        </form>
      </div>
    </div>
  );
};

export default memo(ContactMessage);
