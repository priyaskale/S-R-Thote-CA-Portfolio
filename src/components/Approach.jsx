import { Section, Title } from './UI'
import Reveal from './Reveal'
import { approach } from '../data'
const style = [
  ['text-brand-purple', 'bg-brand-purple', 'lg:relative lg:top-14', 'hover:bg-brand-purple', 'group-hover:text-brand-purple'],
  ['text-[#2F6BFF]', 'bg-[#2F6BFF]', 'lg:relative lg:top-24', 'hover:bg-[#2F6BFF]', 'group-hover:text-[#2F6BFF]'],
  ['text-brand-orange', 'bg-brand-orange', 'lg:relative lg:top-0', 'hover:bg-brand-orange', 'group-hover:text-brand-orange'],
  ['text-brand-teal', 'bg-brand-teal', 'lg:relative lg:top-10', 'hover:bg-brand-teal', 'group-hover:text-brand-teal'],
]
export default function Approach() {
  return (
    <Section className="!pt-6">
      <Title>Our Approach</Title>
      <h3 className="mt-4 text-2xl font-medium text-slate-900">A Structured Approach to Professional Excellence.</h3>
      <p className="mt-4 max-w-3xl leading-7 text-slate-800">We believe that effective financial management begins with understanding each client's unique requirements. Our approach focuses on professional diligence, regulatory compliance and practical financial solutions.</p>
      <div className="relative mt-12">
        <svg aria-hidden className="absolute inset-x-0 top-10 hidden h-40 w-full lg:block" viewBox="0 0 1000 160" preserveAspectRatio="none" fill="none">
          <path d="M60 60 C 200 190, 300 190, 400 100 S 650 -10, 800 70 S 950 120, 990 60" stroke="#222" strokeDasharray="8 8" />
        </svg>
        <ol className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:pb-24">
          {approach.map(([n, t, d], i) => (
            <Reveal as="li" key={n} delay={i * 120} className={`flex flex-col rounded-lg bg-white p-4 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl group ${style[i][2]} ${style[i][3]}`}>
              <h4 className={`px-2 py-3 text-lg font-medium transition-colors duration-300 group-hover:text-white ${style[i][0]}`}>{n}. {t}</h4>
              <p className={`flex-1 rounded-sm p-3 text-sm leading-6 text-white transition-colors duration-300 group-hover:bg-white ${style[i][1]} ${style[i][4]}`}>{d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  )
}
