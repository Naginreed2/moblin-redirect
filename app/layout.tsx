// app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import BackgroundLogos from '@/components/BackgroundLogos';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Moblin Links',
  description: 'Mobile streaming companion links',
  icons: {
    icon: '/favicon.svg', // This line tells Next.js to use your SVG favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* make the body a relative container so our fixed logos cover the viewport */}
      <body className={`${inter.className} relative min-h-screen`}>
        {/* sprinkle your faded logos behind everything */}
        <BackgroundLogos />

        {/* main content above logos */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
