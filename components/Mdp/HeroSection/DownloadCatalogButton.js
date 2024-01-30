'use client';

import React, { useState } from 'react';
import LoadingDownloadCatalog from './LoadingDownloadCatalog';

const url = 'https://samuderabirunusantara.com/documents/Mobile Dewatering Pump Catalog SBN_EN.pdf';

const DownloadCatalogButton = ({ sizes = 'small' }) => {
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  function downloadCatalog() {
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

  if (sizes === 'small') {
    return (
      <div className="relative">
        <button onClick={downloadCatalog} disabled={loading} className='disabled:hover:opacity-100 disabled:active:opacity-100 disabled:cursor-progress relative rounded-md shadow-lg flex justify-center items-center bg-main hover:opacity-60 active:opacity-20 h-[3.3rem] w-56 md:w-72 my-7 mb:my-9 cursor-pointer transition-all'>
          <LoadingDownloadCatalog loading={loading} />
        </button>
        {fetchError && <div className="text-red-500 absolute right-0 top-20">{fetchError}</div>}
      </div>
    );
  } if (sizes === 'medium') {
    return (
      <div className="relative">
        <button onClick={downloadCatalog} disabled={loading} className="disabled:hover:opacity-100 disabled:active:opacity-100 disabled:cursor-progress relative rounded-md shadow-lg flex justify-center items-center bg-main hover:opacity-60 active:opacity-20 w-full h-[3.3rem] py-3 cursor-pointer transition-all">
          <LoadingDownloadCatalog loading={loading} />
        </button>
        {fetchError && <div className="text-red-500 absolute right-0">{fetchError}</div>}
      </div>
    );
  } if (sizes === 'large') {
    return (
      <div className="relative">
        <button onClick={downloadCatalog} disabled={loading} className="disabled:hover:opacity-100 disabled:active:opacity-100 disabled:cursor-progress relative rounded-md shadow-lg flex justify-center items-center bg-main hover:opacity-60 active:opacity-20 w-full h-[3.3rem] py-3 cursor-pointer transition-all">
          <LoadingDownloadCatalog loading={loading} />
        </button>
        {fetchError && <div className="text-red-500 absolute right-0">{fetchError}</div>}
      </div>
    );
  }

  return (
    <div />
  );
};

export default DownloadCatalogButton;
