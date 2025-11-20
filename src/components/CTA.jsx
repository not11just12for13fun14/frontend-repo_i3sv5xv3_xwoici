import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contacto" className="relative bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,253,255,0.06),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-10 sm:p-16 overflow-hidden">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-bold text-white"
              >
                ¿Listo para crear algo que haga scroll y se hable solo?
              </motion.h3>
              <p className="mt-4 text-cyan-100/80 max-w-xl">
                Agenda una sesión estratégica de 20 minutos. Te compartimos ideas accionables y una ruta clara para las próximas 4 semanas.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Nombre" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/40" />
                <input type="email" required placeholder="Email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/40" />
              </div>
              <input placeholder="Empresa / Marca" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/40" />
              <textarea placeholder="Cuéntanos el reto" rows={4} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/40" />
              <div className="flex flex-wrap gap-3">
                <button className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition">Enviar</button>
                <a href="mailto:hola@alberi.com.mx" className="inline-flex items-center justify-center px-6 py-3 rounded-xl ring-1 ring-white/20 text-white hover:bg-white/5 transition">Escríbenos</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
