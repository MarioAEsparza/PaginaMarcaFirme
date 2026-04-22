import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Process } from "@/components/process"
import { Services } from "@/components/services"
import { Cases } from "@/components/cases"
import { About } from "@/components/about"
import { ContactForm } from "@/components/contact-form"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Process />
      <Services />
      <Cases />
      <About />
      <ContactForm />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
