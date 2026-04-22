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
  description: 'Asesoría legal clara para registrar tu marca en USA. Evaluación inicial sin costo y soporte por WhatsApp.',
  generator: 'v0.app',
  icons: {
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-3v12VyklmEIjEIzdyu275KM0u6qYTZ.png',
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
