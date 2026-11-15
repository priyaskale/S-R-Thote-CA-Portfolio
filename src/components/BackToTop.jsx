import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
export default function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const f = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', f, { passive: true }); f()
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <a href="#home" aria-label="Back to top" className={`fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full bg-brand-orange text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-brand-teal hover:shadow-xl ${show ? 'opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}>
      <ArrowUp size={20} />
    </a>
  )
}
