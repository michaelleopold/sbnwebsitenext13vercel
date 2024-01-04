import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Fokus Utama Di Bidang Pemompaan Tambang Dengan Pengalaman 20 Tahun Lebih - PT Samudera Biru Nusantara',
  description: 'Berfokus di bidang pemompaan dewatering/air dan slurry/lumpur di tambang batubara selama kurang lebih 20 tahun, PT Samudera Biru Nusantara telah bekerja di banyak tambang besar seperti PT Wijaya Karja, PT Berau Coal, PT Dharma Henwa, dan masih banyak lagi',
  metadataBase: new URL('https://www.samuderabirunusantara.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="in">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
