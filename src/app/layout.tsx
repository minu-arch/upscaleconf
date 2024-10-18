import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';

const IBMPlexMono = localFont({
  src: './fonts/IBMPlexMono-Thin.ttf',
  variable: '--font-IBMPlexMono-sans',
  weight: '100 700',
});

export const metadata: Metadata = {
  title: 'UpscaleConf',
  description: 'UpscaleConf',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${IBMPlexMono.variable}`}>{children}</body>
    </html>
  );
}
