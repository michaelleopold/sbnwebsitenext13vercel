import { Player } from '@lottiefiles/react-lottie-player';

const LoadingDownloadCatalog = ({ loading }) => {
  if (loading) {
    return (
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
    );
  }

  return (
    <h1 className="font-bold text-white text-center text-lg xsm:text-xl">Download Catalog</h1>
  );
};

export default LoadingDownloadCatalog;
