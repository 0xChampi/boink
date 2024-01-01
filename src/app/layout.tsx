import type { Metadata } from 'next';
import { Antonio, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const antonio = Antonio({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Deez the Dragon',
  description: 'Meet Deez, the friendly dragon',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={antonio.className}>
          {children}
        </div>
      </body>
    </html>
  );
}
