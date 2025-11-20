import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, Rocket, BarChart3, Wand2 } from 'lucide-react'
import { useRef } from 'react'

export default function ScrollSections() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.7, 1])

  const features = [
    {
      icon: Sparkles,
      title: 'Estrategia creativa',
      desc: 'Narrativas que elevan percepciones y desbloquean deseo por tu marca.'
    },
    {
      icon: Rocket,
      title: 'Growth & performance',
      desc: 'Embudos inteligentes, iteración continua y presupuesto que rinde.'
    },
    {
      icon: BarChart3,
      title: 'Data & insights',
      desc: 'Medimos lo que importa y accionamos rápido con decisiones informadas.'
    },
    {
      icon: Wand2,
      title: 'Experiencias inmersivas',
      desc: '3D, interactividad y microanimaciones que generan WOW.'
    },
  ]

  return (
    <section ref={ref} id="servicios" className="relative bg-slate-950">
      <motion.div style={{ opacity: bgOpacity }} className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl sm:text-5xl font-bold tracking-tight">Lo que hacemos</h2>
          <p className="mt-4 text-cyan-100/80 max-w-2xl mx-auto">
            Combinamos diseño, tecnología y estrategia para construir marcas con momentum.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl group-hover:bg-cyan-300/20 transition-colors" />
              <f.icon className="h-6 w-6 text-cyan-300" />
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-cyan-100/80">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
