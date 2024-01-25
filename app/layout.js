import './globals.css';

export const metadata = {
  title: 'Solusi Pompa Dewatering dan Slurry Dengan Pengalaman 20 Tahun Lebih - PT Samudera Biru Nusantara',
  description: 'SBN bergerak di bidang pemompaan dewatering/air dan slurry/lumpur di tambang batubara sejak tahun 2000 (24 tahun), kami telah bekerja di banyak tambang besar seperti PT Wijaya Karja, PT Berau Coal, PT Dharma Henwa, dan masih banyak lagi',
  metadataBase: new URL('https://samuderabirunusantara.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="in">
      <body>{children}</body>
    </html>
  );
}
