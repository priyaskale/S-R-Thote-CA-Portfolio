import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav, firm } from '../data'
export default function Header() {
  const [open, setOpen] = useState(false), [logo, setLogo] = useState(true), [scrolled, setScrolled] = useState(false)
  useEffect(() => { const f = () => setScrolled(window.scrollY > 10); f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f) }, [])
  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="mx-auto max-w-6xl flex items-center justify-between px-5 py-3">
        <a href="#home" className="flex items-center gap-3">
          {logo && <img src="/logo.png" alt="" className="h-14 w-auto" onError={() => setLogo(false)} />}
          <span className="leading-tight">
            <span className="block text-xl font-semibold text-slate-800">S R Thote &amp;<br />Associates</span>
            <span className="block text-[9px] font-medium text-brand-orange">{firm.subtitle}</span>
          </span>
        </a>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-800">
          {nav.map(([l, id]) => l === 'Contact'
            ? <a key={id} href={`#${id}`} className="rounded-full bg-brand-orange px-6 py-2.5 text-white hover:-translate-y-0.5 hover:bg-brand-teal hover:shadow-md transition duration-300">{l}</a>
            : <a key={id} href={`#${id}`} className="relative pb-1 transition-colors hover:text-brand-teal after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand-orange after:transition-transform hover:after:scale-x-100">{l}</a>)}
        </nav>
        <button className="md:hidden p-2" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav aria-label="Mobile" className="md:hidden border-t bg-white px-5 py-2 flex flex-col">
        {nav.map(([l, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="py-3 border-b border-slate-100 last:border-0">{l}</a>)}
      </nav>}
    </header>
  )
}
