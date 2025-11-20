import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const cases = [
  {
    tag: 'Brand + Performance',
    title: 'Lanzamiento D2C con +340% ROAS',
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop',
  },
  {
    tag: 'Experiencia 3D',
    title: 'Micrositio interactivo para fintech',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop',
  },
  {
    tag: 'Content Studio',
    title: 'Sistema de contenidos para retail',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function CaseStudies() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1])

  return (
    <section ref={ref} id="casos" className="relative bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <div className="text-center mb-14">
          <h2 className="text-white text-4xl sm:text-5xl font-bold tracking-tight">Casos recientes</h2>
          <p className="mt-4 text-cyan-100/80 max-w-2xl mx-auto">Resultados reales que nos obsesiona superar cada trimestre.</p>
        </div>

        <motion.div style={{ scale }} className="grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.title} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              <img src={c.img} alt={c.title} className="h-64 w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-6">
                <span className="text-cyan-300 text-xs uppercase tracking-widest">{c.tag}</span>
                <h3 className="mt-2 text-white text-lg font-semibold">{c.title}</h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
