import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins"
});

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: {
    default: 'MarcaFirme USA | Registro de Marca en Estados Unidos',
    template: '%s | MarcaFirme USA'
  },
  description: 'Protege tu identidad comercial con expertos. Registro de marcas en USA, evaluación legal inicial sin costo y soporte personalizado por WhatsApp.',
  keywords: ['registro de marca usa', 'registrar marca estados unidos', 'propiedad intelectual', 'USPTO español', 'asesoría legal marcas'],
  authors: [{ name: 'MarcaFirme USA' }],
  creator: 'MarcaFirme USA',
  openGraph: {
    type: 'website',
    locale: 'es_US',
    url: 'https://marcafirmeusa.com',
    title: 'MarcaFirme USA | Registro de Marca en Estados Unidos',
    description: 'Asesoría legal clara y efectiva para proteger tu marca en el mercado estadounidense.',
    siteName: 'MarcaFirme USA',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Registro de Marca en USA con MarcaFirme',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MarcaFirme USA | Registro de Marca en Estados Unidos',
    description: 'Evaluación inicial sin costo para tu registro de marca en USA.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
