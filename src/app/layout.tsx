import './globals.css';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ForMedic - Plataforma de Agendamento Online',
  description:
    'Gerencie os agendamentos da sua clínica com praticidade, reduza faltas e otimize seu atendimento em uma única plataforma.',

  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'ForMedic - Plataforma de Agendamento Online',
    description:
      'Gerencie os agendamentos da sua clínica com praticidade, reduza faltas e otimize seu atendimento em uma única plataforma.',
    type: 'website',
    siteName: 'ForMedic',
    images: [
      {
        url: 'https://formedic-tau.vercel.app/lp.jpg',
        width: 800,
        height: 600,
        alt: 'ForMedic - Plataforma de Agendamento Online',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
