import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Casos', href: '#casos' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3 shadow-lg">
          <a href="#inicio" className="inline-flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 ring-2 ring-white/20 shadow-md" />
            <span className="text-white font-semibold tracking-tight">ALBERI</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contacto" className="text-sm px-4 py-2 rounded-lg bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors">Hablemos</a>
          </nav>

          <button className="md:hidden text-white/90" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block text-white/80 hover:text-white transition-colors" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contacto" className="block text-center px-4 py-2 rounded-lg bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors">Hablemos</a>
          </div>
        )}
      </div>
    </header>
  )
}
