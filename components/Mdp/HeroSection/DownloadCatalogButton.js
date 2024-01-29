'use client';

const url = 'http://localhost:3000/catalog/Mobile Dewatering Pump Catalog SBN_EN.pdf';

const DownloadCatalogButton = ({ sizes = 'small' }) => {
  function downloadCatalog() {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = blobUrl;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  }

  if (sizes === 'small') {
    return (
      <button onClick={downloadCatalog} className="rounded-md shadow-lg flex justify-center items-center bg-main hover:opacity-60 active:opacity-20 px-7 py-3 my-7 md:my-9 md:px-12 cursor-pointer transition-all">
        <h1 className="font-bold text-white text-center text-lg xsm:text-xl">Download Catalog</h1>
      </button>
    );
  } if (sizes === 'medium') {
    return (
      <button onClick={downloadCatalog} className="rounded-md shadow-lg flex justify-center items-center bg-main hover:opacity-60 active:opacity-20 w-full py-3 cursor-pointer transition-all">
        <h1 className="font-bold text-white text-center text-xl">Download Catalog</h1>
      </button>
    );
  }
  return (
    <button onClick={downloadCatalog} className="rounded-md shadow-lg flex justify-center items-center bg-main hover:opacity-60 active:opacity-20 w-full py-3 cursor-pointer transition-all">
      <h1 className="font-bold text-white text-center text-xl">Download Catalog</h1>
    </button>
  );
};

export default DownloadCatalogButton;
