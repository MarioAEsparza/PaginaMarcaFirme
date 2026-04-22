import { FileText, RefreshCw, Eye, Shield } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: FileText,
      title: "Registro de marca",
      description: "Te acompañamos desde la revisión hasta la radicación.",
    },
    {
      icon: RefreshCw,
      title: "Renovación",
      description: "Evita perder tu marca por fechas o requisitos.",
    },
    {
      icon: Eye,
      title: "Vigilancia",
      description: "Detecta marcas parecidas y actúa a tiempo.",
    },
    {
      icon: Shield,
      title: "Oposición",
      description: "Responde o inicia una oposición con respaldo legal.",
    },
  ]

  return (
    <section 
      id="servicios" 
      className="py-20 lg:py-28 relative"
      style={{
        backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/section-bg-YNFm4WPDSA7uOYygEFqgDeTHHaK3AK.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#0C1937] mb-4">
            Servicios
          </h2>
          <p className="text-lg text-[#0C1937]/70 max-w-2xl mx-auto">
            Soluciones legales especializadas para proteger tu marca
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#29D3D3]/20 to-[#14BAE8]/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-7 w-7 text-[#0658F6]" />
              </div>
              
              {/* Content */}
              <h3 className="font-[family-name:var(--font-poppins)] text-lg font-bold text-[#0C1937] mb-2">
                {service.title}
              </h3>
              <p className="text-[#0C1937]/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
