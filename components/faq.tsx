"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "¿Cuánto demora el proceso?",
      answer: "Depende del caso. Te damos tiempos estimados en la asesoría.",
    },
    {
      question: "¿Necesito LLC para registrar?",
      answer: "No siempre. Te orientamos según tu situación.",
    },
    {
      question: "¿Puedo registrar si estoy fuera de USA?",
      answer: "Sí. Evaluamos tu caso y te guiamos.",
    },
  ]

  return (
    <section id="preguntas" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-(family-name:--font-poppins) text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-brand-dark/70">
              Registro de Marca
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-[#E2E8F0] rounded-xl px-6 data-[state=open]:bg-brand-light transition-colors"
              >
                <AccordionTrigger className="text-left font-(family-name:--font-poppins) font-semibold text-brand-dark hover:text-brand-blue hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-brand-dark/70 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
