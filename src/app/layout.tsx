import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LocationProvider } from '@/lib/context/LocationContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyEmergencyBar } from '@/components/layout/StickyEmergencyBar';
import { LazyThirdPartyScripts } from '@/components/layout/LazyThirdPartyScripts';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://servicesquadtx.com'),
  title: {
    default: 'Service Squad | 24/7 Disaster Restoration & Multi-Trade Reconstruction',
    template: '%s | Service Squad'
  },
  description:
    'Full-service disaster recovery, 24/7 water extraction, fire & smoke repair, mold remediation, packout, reconstruction, plumbing, and HVAC across Greater Houston (ZIP 77081) and Texas.',
  keywords: [
    'water damage restoration Houston',
    'emergency disaster cleanup Texas',
    'fire damage repair 77081',
    'mold remediation Houston',
    'emergency plumber Houston',
    '24/7 emergency AC repair'
  ],
  authors: [{ name: 'Service Squad Restoration' }],
  openGraph: {
    title: 'Service Squad | 24/7 Disaster Restoration & Reconstruction',
    description:
      'Immediate 60-minute emergency response for water, fire, mold, and property disasters across Greater Houston and Texas.',
    url: 'https://servicesquadtx.com',
    siteName: 'Service Squad',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Service Squad | Disaster Restoration Specialists',
    description: '24/7 Emergency restoration across Greater Houston and Texas.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`} suppressHydrationWarning>
      <body 
        className={`min-h-screen flex flex-col bg-[#F7F7F8] text-slate-900 antialiased selection:bg-[#F4793E] selection:text-white ${inter.className}`}
        suppressHydrationWarning
      >
        <LocationProvider>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
          <StickyEmergencyBar />
          <LazyThirdPartyScripts />
        </LocationProvider>
      </body>
    </html>
  );
}
