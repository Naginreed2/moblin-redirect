import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import BackgroundLogos from '@/components/BackgroundLogos';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Moblin Links',
  description: 'Mobile streaming companion links',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative min-h-screen`}>
        <BackgroundLogos />

        {/* Centered large logo and title with tight spacing */}
        <div className="w-full flex justify-center mt-4 z-20 relative pointer-events-none select-none">
          <div className="flex items-center gap-3">
            <img
              src="/favicon.svg"
              alt="Moblin Logo"
              className="w-16 h-16 shrink-0"
              style={{ minWidth: '3rem', minHeight: '3rem' }}
            />
            <h1 className="text-2xl font-bold whitespace-nowrap">Moblin</h1>
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
