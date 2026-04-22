import { MessageSquare, Search, FileCheck } from "lucide-react"

export function Process() {
  const steps = [
    {
      number: "1",
      icon: MessageSquare,
      title: "Asesoría inicial",
      subtitle: "15 min",
      description: "Conversamos sobre tu marca y resolvemos tus dudas iniciales.",
    },
    {
      number: "2",
      icon: Search,
      title: "Búsqueda y estrategia",
      subtitle: "",
      description: "Investigamos la disponibilidad y definimos el mejor camino.",
    },
    {
      number: "3",
      icon: FileCheck,
      title: "Radicación y seguimiento",
      subtitle: "",
      description: "Presentamos tu solicitud y te mantenemos informado.",
    },
  ]

  return (
    <section id="proceso" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-(family-name:--font-poppins) text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-lg text-brand-dark/70">
            Tres pasos y listo.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-linear-to-r from-brand-teal to-brand-cyan" />
              )}
              
              <div className="flex flex-col items-center text-center">
                {/* Icon circle */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full bg-linear-to-br from-brand-teal/20 to-brand-cyan/20 flex items-center justify-center">
                    <step.icon className="h-10 w-10 text-brand-blue" />
                  </div>
                  {/* Number badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-blue text-white font-bold text-sm flex items-center justify-center">
                    {step.number}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="font-(family-name:--font-poppins) text-xl font-bold text-brand-dark mb-1">
                  {step.title}
                </h3>
                {step.subtitle && (
                  <span className="text-sm text-brand-teal font-medium mb-3">
                    ({step.subtitle})
                  </span>
                )}
                <p className="text-brand-dark/70 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
