import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getStatefulLinks, getHeaderLinks } from '@/lib/linksLib';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_TITLE,
  description: process.env.NEXT_PUBLIC_TAGLINE,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pageLinks = getStatefulLinks('');
  return (
    <html lang="en">
      <body>
        <Header links={pageLinks(getHeaderLinks())} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
