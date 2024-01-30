'use client';

import { Player } from '@lottiefiles/react-lottie-player';
import { useState } from 'react';

const url = 'https://samuderabirunusantara.com/documents/Slurry & Dewatering Company Profile.pdf';

const CompanyProfileButton = () => {
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  function downloadCompanyProfile() {
    fetch(url)
      .then((response) => {
        setFetchError(null);
        setLoading(true);
        return response.blob();
      })
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = blobUrl;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      }).catch(() => {
        setFetchError('please try again');
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="relative">
      <button onClick={downloadCompanyProfile} disabled={loading} className="disabled:hover:opacity-100 disabled:active:opacity-100 disabled:cursor-progress relative rounded-md shadow-lg flex justify-center items-center bg-main hover:opacity-60 active:opacity-20 w-52 md:w-60 h-[3rem] py-3 cursor-pointer transition-all">
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Player
              loop
              src="lotties/download-loading.json"
              play
              autoplay
              speed={2}
              className="w-20 h-20"
            />
          </div>
        ) : (
          <h1 className="font-bold text-white text-center text-lg">Company Profile</h1>
        )}
      </button>
      {fetchError && <div className="text-red-500 absolute right-0">{fetchError}</div>}
    </div>
  );
};

export default CompanyProfileButton;
