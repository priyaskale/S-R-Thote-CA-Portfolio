import { Section, Title } from './UI'
export default function About() {
  return (
    <Section id="about" className="!pb-6">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <Title className="mb-8">About the Firm</Title>
          <p className="leading-8 text-slate-800">S R Thote & Associates is a Chartered Accountancy practice based in Latur, Maharashtra & Basavakalyan, Karnataka. The firm's proposed website profile presents its professional service areas across GST, Income Tax, Audit & Assurance, Accounting and Advisory, and Banking and Project Reports.</p>
          <p className="mt-8 leading-8 text-slate-800">The firm seeks to assist clients in meeting applicable statutory and regulatory requirements and in strengthening their financial and compliance processes through structured professional support.</p>
          <hr className="mt-10 border-indigo-200" />
        </div>
        <aside id="profile" className="rounded-2xl border border-brand-teal/60 bg-[#F5F5F5] px-8 py-10 transition duration-300 hover:-translate-y-1 hover:border-brand-orange hover:bg-teal-50 hover:shadow-xl">
          <p className="font-title text-xl text-brand-orange">Principal Profile</p>
          <h3 className="mt-3 text-2xl font-medium text-slate-900">CA Santosh Ramesh Thote</h3>
          <p className="mt-4 leading-8 text-slate-800">CA Santosh Ramesh Thote is the proprietor of S R Thote & Associates, a Chartered Accountancy practice based in Latur, Maharashtra & Basavakalyan, Karnataka.</p>
        </aside>
      </div>
    </Section>
  )
}
