import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrollSections from './components/ScrollSections'
import CaseStudies from './components/CaseStudies'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <ScrollSections />
      <CaseStudies />
      <CTA />
      <footer className="bg-slate-950 border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Alberi MKT. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4 text-white/70 text-sm">
            <a href="https://www.alberi.com.mx" target="_blank" className="hover:text-white">Sitio actual</a>
            <a href="#contacto" className="hover:text-white">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
