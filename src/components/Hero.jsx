import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[120svh] flex items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.15),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 z-10 grid lg:grid-cols-12 gap-8 w-full">
        <div className="lg:col-span-7 flex flex-col justify-center py-28">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-white drop-shadow-[0_0_40px_rgba(59,130,246,0.35)]"
          >
            Marketing que se siente mágico
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
            className="mt-6 text-lg sm:text-xl text-cyan-100/90 max-w-2xl"
          >
            Elevamos marcas con experiencias digitales inmersivas, contenido que conecta y performance que convierte.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#servicios" className="pointer-events-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_10px_40px_rgba(255,255,255,0.25)] transition-all">
              Ver servicios
            </a>
            <a href="#contacto" className="pointer-events-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900/60 text-white ring-1 ring-white/20 hover:bg-slate-900/80 transition-all">
              Agenda una llamada
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-5" />
      </div>
    </section>
  )
}
