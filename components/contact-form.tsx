"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="formulario" className="py-20 lg:py-28 bg-[#F6F6F6]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center">
            <div className="w-16 h-16 rounded-full bg-[#29D3D3]/20 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#29D3D3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-[#0C1937] mb-3">
              ¡Solicitud enviada!
            </h3>
            <p className="text-[#0C1937]/70">
              Te contactaremos hoy o el siguiente día hábil.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="formulario" className="py-20 lg:py-28 bg-[#F6F6F6]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl font-bold text-[#0C1937] mb-4">
              Evaluación rápida
            </h2>
            <p className="text-[#0C1937]/70">
              Déjanos tus datos y te contactamos hoy o el siguiente día hábil.
            </p>
          </div>

          {/* Form */}
          <form 
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-lg"
          >
            <div className="space-y-6">
              {/* Nombre */}
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-[#0C1937] font-medium">
                  Nombre completo <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className="border-[#E2E8F0] focus:border-[#0658F6] focus:ring-[#0658F6]"
                />
              </div>

              {/* Correo */}
              <div className="space-y-2">
                <Label htmlFor="correo" className="text-[#0C1937] font-medium">
                  Correo <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="correo"
                  name="correo"
                  type="email"
                  required
                  placeholder="tu@correo.com"
                  className="border-[#E2E8F0] focus:border-[#0658F6] focus:ring-[#0658F6]"
                />
              </div>

              {/* Teléfono */}
              <div className="space-y-2">
                <Label htmlFor="telefono" className="text-[#0C1937] font-medium">
                  Teléfono <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  className="border-[#E2E8F0] focus:border-[#0658F6] focus:ring-[#0658F6]"
                />
              </div>

              {/* Servicio */}
              <div className="space-y-2">
                <Label htmlFor="servicio" className="text-[#0C1937] font-medium">
                  Servicio <span className="text-red-500">*</span>
                </Label>
                <Select name="servicio" required>
                  <SelectTrigger className="border-[#E2E8F0] focus:border-[#0658F6] focus:ring-[#0658F6]">
                    <SelectValue placeholder="Selecciona un servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="registro">Registro de marca</SelectItem>
                    <SelectItem value="renovacion">Renovación</SelectItem>
                    <SelectItem value="vigilancia">Vigilancia</SelectItem>
                    <SelectItem value="oposicion">Oposición</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Privacy Policy */}
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="privacidad" 
                  name="privacidad" 
                  required
                  className="mt-1 border-[#E2E8F0] data-[state=checked]:bg-[#0658F6] data-[state=checked]:border-[#0658F6]"
                />
                <Label htmlFor="privacidad" className="text-sm text-[#0C1937]/70 leading-relaxed cursor-pointer">
                  Acepto la{" "}
                  <a href="#" className="text-[#0658F6] hover:underline">
                    Política de privacidad
                  </a>
                </Label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0658F6] hover:bg-[#0658F6]/90 text-white font-semibold py-6 text-base"
              >
                {isSubmitting ? "Enviando..." : "Solicitar evaluación"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
