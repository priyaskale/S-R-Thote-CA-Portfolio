import { Section, Title } from './UI'
import Reveal from './Reveal'
import { info } from '../data'
export default function FirmInfo() {
  return (
    <Section id="info" className="bg-[#F5F5F5]">
      <Title className="mb-12">Firm Information</Title>
      <dl>
        {info.map(([k, v], i) => (
          <Reveal key={k} delay={i * 60} className="group relative grid transition duration-300 hover:z-10 hover:scale-[1.01] hover:shadow-xl min-h-[72px] grid-cols-[8rem_minmax(0,1fr)] border-b border-white/70 sm:grid-cols-[17rem_minmax(0,1fr)]">
            <dt className="flex min-w-0 items-center bg-black px-5 font-medium text-white transition-colors duration-300 group-hover:bg-brand-orange sm:px-9">{k}</dt>
            <dd className="flex min-w-0 items-center [overflow-wrap:anywhere] bg-brand-purple px-5 py-3 font-medium text-white transition-colors duration-300 group-hover:bg-[#7B2FD9] sm:px-9">
              {k === 'Website' ? <a className="underline" href={`https://${v}`} target="_blank" rel="noreferrer">{v}</a> : v}
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  )
}
