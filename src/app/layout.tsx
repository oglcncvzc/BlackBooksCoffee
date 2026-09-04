import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BLACK BOOKS & COFFEE • Kadıköy Moda | QR Menü & Sahaf',
  description: 'Black Books & Coffee Kadıköy Moda içecek menüsü, nadir kitap seçkisi ve sahaf dükkanı.',
  keywords: ['Black Books', 'Moda Sahaf', 'Kadıköy Kahve', 'QR Menü', 'Nadir Kitap', 'Boutique Coffee'],
  authors: [{ name: 'Burak' }],
  icons: {
    icon: '/images/logo.jpeg',
    apple: '/images/logo.jpeg',
  },
  openGraph: {
    title: 'BLACK BOOKS & COFFEE • QR Menü',
    description: 'Moda’nın kalbinde; nadir kitaplar, edebiyat sohbetleri ve özenle hazırlanan artisanal kahveler.',
    images: ['/images/logo.jpeg'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0b0a08',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
