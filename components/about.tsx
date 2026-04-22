"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const ICON_URL = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-512-CFQRB65qULMyjExUTQoV1zzs4aacbJ.png"

const SLIDES = [
  {
    title: "Un equipo legal que habla claro",
    description: "En MarcaFirme USA simplificamos el registro de marcas para emprendedores y empresas, con comunicación directa y procesos ordenados."
  },
  {
    title: "Más de 500 marcas registradas",
    description: "Hemos ayudado a cientos de emprendedores latinos a proteger sus marcas en Estados Unidos con un proceso simple y transparente."
  },
  {
    title: "Asesoría en tu idioma",
    description: "Nuestro equipo habla español y entiende las necesidades de los negocios hispanos que buscan crecer en el mercado estadounidense."
  },
  {
    title: "Respuesta en menos de 24 horas",
    description: "Valoramos tu tiempo. Cada consulta recibe atención personalizada y respuesta rápida para que avances sin demoras."
  }
]

export function About() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const goTo = (index: number) => {
    setCurrent(index)
    setIsAutoPlaying(false)
  }

  const prev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length)
  const next = () => goTo((current + 1) % SLIDES.length)

  return (
    <section className="py-20 lg:py-28 bg-[#0658F6] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center relative">
        <img src={ICON_URL} alt="" className="h-16 w-16 mx-auto mb-8" />
        
        <div className="relative min-h-[180px] md:min-h-[160px]">
          {SLIDES.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 ${
                index === current 
                  ? "opacity-100 translate-x-0" 
                  : index < current 
                    ? "opacity-0 -translate-x-full" 
                    : "opacity-0 translate-x-full"
              }`}
            >
              <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                {slide.description}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-white/60 hover:text-white transition-colors"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-white/60 hover:text-white transition-colors"
          aria-label="Siguiente"
        >
          <ChevronRight className="h-8 w-8" />
        </button>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}