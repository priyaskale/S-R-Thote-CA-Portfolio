import { Section, Title } from './UI'
import Reveal from './Reveal'
import { serve } from '../data'
// Optional photos: public/serve-1.jpg … serve-4.jpg
const pos = ['-bottom-6 -right-6', '-bottom-6 -left-6', '-top-6 -right-6', '-top-6 -left-6']
export default function Serve() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <Title>Who We Serve</Title>
        <h3 className="mt-5 text-2xl font-medium text-slate-900">Professional Support for Every Stage of Your Financial Journey.</h3>
        <p className="mt-5 leading-7 text-slate-800">We provide accounting, taxation, audit and financial advisory services to support the requirements of different types of clients.</p>
      </div>
      <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
        {serve.map(([t, d], i) => (
          <Reveal key={t} delay={(i % 2) * 120} className={`group relative h-44 overflow-hidden rounded bg-brand-teal p-7 text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-brand-orange hover:shadow-xl ${i % 2 ? 'sm:pl-36' : 'sm:pr-36'}`}>
            <h4 className="font-semibold">{t}</h4><p className="mt-2 text-sm leading-6">{d}</p>
            <span aria-hidden className={`absolute hidden h-32 w-32 rounded-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110 sm:block ${pos[i]}`} style={{ backgroundImage: `url(/serve-${i + 1}.jpg), linear-gradient(135deg,#4fb6c6,#007a90)` }} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
