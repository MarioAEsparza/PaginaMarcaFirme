import { Button } from "@/components/ui/button"
import { CheckCircle, MessageCircle } from "lucide-react"
import Link from "next/link"

const BULLETS = ["Evaluacion inicial sin costo", "Proceso simple y transparente", "Soporte por WhatsApp"]
const WHATSAPP_URL = "https://wa.me/15550127842"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-[#0C1937]/60" />

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Columna izquierda - Contenido */}
          <div>
            <h1 className="font-[family-name:var(--font-poppins)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Protegemos tu <span className="text-[#29D3D3]">Marca</span> en USA
            </h1>

            <p className="text-lg md:text-xl text-white mb-8 max-w-xl leading-relaxed">
              Te guiamos para registrar tu marca sin enredos, con asesoria clara en espanol.
            </p>

            <ul className="space-y-3 mb-8">
              {BULLETS.map((text) => (
                <li key={text} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#29D3D3] shrink-0" />
                  <span className="text-white font-medium">{text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button asChild size="lg" className="bg-[#0658F6] hover:bg-[#0658F6]/90 text-white font-semibold px-8 py-6">
                <Link href="#formulario">Agendar asesoria</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[#29D3D3] bg-white/10 backdrop-blur text-white hover:bg-white/20 font-semibold px-8 py-6">
                <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-[#29D3D3]" />
                  Hablar por WhatsApp
                </Link>
              </Button>
            </div>

            <p className="text-sm text-white/60">Confidencialidad garantizada. Respuesta en horario habil.</p>
          </div>

          {/* Columna derecha - YouTube Player */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
              <iframe
                src="https://www.youtube.com/embed/k2cpTLKvgKE"
                title="Video MarcaFirme USA"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            {/* Badge decorativo */}
            <div className="absolute -bottom-4 -left-4 bg-[#29D3D3] text-[#0C1937] px-4 py-2 rounded-lg font-semibold text-sm shadow-lg">
              Conoce el proceso
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  )
}
