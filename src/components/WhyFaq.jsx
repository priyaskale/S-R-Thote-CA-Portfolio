import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Section, Title } from './UI'
import Reveal from './Reveal'
import { why, faqs } from '../data'
const tones = ['bg-[#AE8BD9]', 'bg-[#8FCBD6]', 'bg-[#E6C9A8]', 'bg-[#9EA9DC]']
export default function WhyFaq() {
  const [open, setOpen] = useState(0)
  const [opened, setOpened] = useState([false, false, false, false]) // each Why Choose Us tile toggles on its own
  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <Title>Why Choose Us</Title>
          <ol className="mt-10 space-y-4">
            {why.map((t, i) => (
              <Reveal as="li" key={i} delay={i * 100}>
                <button type="button" aria-expanded={opened[i]} aria-controls={`why-${i}`}
                  onClick={() => setOpened(o => o.map((v, j) => (j === i ? !v : v)))}
                  className="group flex items-stretch rounded-xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal">
                  <span className={`relative z-10 grid h-[90px] w-[150px] shrink-0 place-items-center rounded-xl text-5xl font-semibold text-white shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110 group-hover:saturate-150 sm:w-[185px] ${tones[i]}`}>{String(i + 1).padStart(2, '0')}</span>
                  <span id={`why-${i}`} className={`-ml-5 flex items-center overflow-hidden rounded-xl bg-[#F5F5F5] text-xs leading-5 text-slate-800 transition-all duration-500 ease-out sm:text-sm sm:leading-6 ${opened[i] ? 'max-w-[170px] opacity-100 pl-8 pr-3 sm:max-w-[300px] sm:pl-9 sm:pr-5' : 'max-w-0 pl-0 pr-0 opacity-0'}`}>
                    <span className="w-28 sm:w-56">{t}</span>
                  </span>
                </button>
              </Reveal>
            ))}
          </ol>
        </div>
        <div>
          <Title>Frequently asked questions</Title>
          <p className="mt-4 mb-6 max-w-sm leading-7 text-slate-800">Find answers to common questions about our professional services and how we can assist you.</p>
          <div className="space-y-4">
            {faqs.map(([q, a], i) => (
              <div key={q} className="rounded-lg border border-indigo-100 bg-white transition duration-300 hover:border-brand-teal/50 hover:bg-teal-50/70 hover:shadow-md">
                <button className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-semibold" aria-expanded={open === i} aria-controls={`faq-${i}`} onClick={() => setOpen(open === i ? -1 : i)}>
                  <span className="max-w-xs">Q{i + 1}. {q}</span>
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-teal text-white"><ChevronDown size={14} className={`transition-transform ${open === i ? 'rotate-180' : ''}`} /></span>
                </button>
                <div id={`faq-${i}`} className={`grid transition-all duration-300 ease-out ${open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}><div className="overflow-hidden"><p className="px-5 pb-5 text-sm text-slate-700">{a ?? 'Answer to be confirmed by the firm.'}</p></div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
