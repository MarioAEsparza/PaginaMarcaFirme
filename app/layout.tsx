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
  title: 'MarcaFirme USA | Registro de Marca en Estados Unidos',
  description: 'Protege tu marca en USA con expertos. Evaluación legal inicial sin costo y soporte personalizado por WhatsApp.',
  openGraph: {
    title: 'MarcaFirme USA | Registro de Marca en Estados Unidos',
    description: 'Asesoría legal clara y efectiva para proteger tu identidad comercial en el mercado estadounidense.',
    url: 'https://pagina-marca-firme.vercel.app/',
    siteName: 'MarcaFirme USA',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Registro de Marca en USA con MarcaFirme',
      },
    ],
    locale: 'es_US',
    type: 'website',
  },
  twitter: {
  card: 'summary_large_image', // Esto es lo que fuerza el tamaño grande
  title: 'MarcaFirme USA | Registro de Marca en Estados Unidos',
  description: 'Protege tu marca hoy mismo con expertos.',
  images: ['https://pagina-marca-firme.vercel.app/og-image.png'], // Usa la URL absoluta
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
