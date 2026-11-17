import { MapPin } from 'lucide-react'
// Put the approved hero photo at public/hero.jpg. Until then the dark fallback shows.
const bg = "linear-gradient(90deg,rgba(0,0,0,.45),rgba(0,0,0,.2)),linear-gradient(0deg,rgba(0,0,0,.55),transparent 40%),url(/hero.jpg),linear-gradient(135deg,#2b3a4d,#101820)"
export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[560px] items-end bg-cover bg-center px-5 pb-24 pt-40 text-white" style={{ backgroundImage: bg }}>
      <div className="mx-auto w-full max-w-6xl">
        <p style={{ '--d': '100ms' }} className="hero-in font-title text-xl font-semibold text-brand-orange">CHARTERED ACCOUNTANTS</p>
        <h1 style={{ '--d': '250ms' }} className="hero-in mt-1 text-4xl font-semibold tracking-wide sm:text-6xl">S R Thote &amp; Associates</h1>
        <p style={{ '--d': '400ms' }} className="hero-in mt-6 max-w-3xl text-lg font-medium sm:text-xl">Delivering professional services in Audit and Assurance, Taxation, Accounting and Business Advisory.</p>
        <p style={{ '--d': '550ms' }} className="hero-in mt-4 max-w-2xl leading-relaxed">We aim to support businesses, professionals and individuals with practical financial, taxation and compliance assistance. Our approach is focused on professional diligence, clear communication and solutions aligned with each client's requirements.</p>
        <a href="#services" style={{ '--d': '700ms' }} className="hero-in mt-8 inline-block rounded-full bg-[#0A84FF] px-7 py-3 font-medium shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-brand-orange hover:shadow-xl">Explore Our Services</a>
      </div>
      <span className="absolute bottom-6 right-5 inline-flex items-center gap-1.5 rounded bg-white px-3 py-1.5 text-xs font-semibold text-brand-purple sm:right-10"><MapPin size={14} />Latur, Maharashtra</span>
    </section>
  )
}
