import { CheckCircle2, Percent, Calculator, FileCheck, BookOpen, Landmark } from 'lucide-react'
import { Section, Title } from './UI'
import Reveal from './Reveal'
import { services } from '../data'
const icons = [Percent, Calculator, FileCheck, BookOpen, Landmark]
export default function Services() {
  return (
    <Section id="services">
      <div className="grid gap-x-6 gap-y-8 md:grid-cols-2">
        <div className="md:pr-10">
          <Title>Our Services</Title>
          <h3 className="mt-5 text-2xl font-medium text-slate-900">Comprehensive Financial & Professional Services.</h3>
          <p className="mt-5 leading-7 text-slate-800">We offer a range of professional services across taxation, GST, audit and assurance, accounting, and financial advisory. Our focus is on delivering reliable guidance, maintaining regulatory compliance and supporting the financial requirements of individuals and businesses.</p>
        </div>
        {services.map(([title, items], i) => {
          const Icon = icons[i]
          return (
            <Reveal as="article" key={title} delay={(i % 2) * 120} className="group overflow-hidden rounded-md bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <h3 className="flex items-center gap-3 bg-brand-orange px-5 py-3 font-medium text-black transition-colors duration-300 group-hover:bg-brand-teal group-hover:text-white">
                <span className="grid h-7 w-7 place-items-center rounded bg-white transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"><Icon size={15} /></span>{title}
              </h3>
              <ul className="space-y-3 px-6 py-6">
                {items.map(t => <li key={t} className="flex gap-3 text-sm leading-6 text-slate-800 transition-transform duration-200 hover:translate-x-1"><CheckCircle2 size={16} className="mt-1 shrink-0 text-[#2F6BFF] transition-colors duration-300 group-hover:text-brand-teal" />{t}</li>)}
              </ul>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
