"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#servicios", label: "Servicios" },
    { href: "#proceso", label: "Proceso" },
    { href: "#FAQ", label: "FAQ" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - Este se queda con Link porque va a la raíz */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo-preview-white.png"
              alt="MarcaFirme USA"
              className="h-10 lg:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-dark hover:text-brand-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold px-6"
            >
              <a href="#formulario">Agendar asesoría</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-brand-dark" />
            ) : (
              <Menu className="h-6 w-6 text-brand-dark" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-brand-dark hover:text-brand-blue transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button 
                asChild
                className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold mt-2"
              >
                <a href="#formulario" onClick={() => setIsOpen(false)}>
                  Agendar asesoría
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}