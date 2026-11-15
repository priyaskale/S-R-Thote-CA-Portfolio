import { useState } from 'react'
import { MapPin, Phone, Mail, Building2 } from 'lucide-react'
import { firm } from '../data'
import { submitContact } from '../lib/submitContact'
const empty = { name: '', email: '', phone: '', subject: '', message: '' }
function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Enter your name.'
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Enter a valid email address.'
  if (!/^[+\d][\d\s-]{7,14}$/.test(v.phone.trim())) e.phone = 'Enter a valid phone number.'
  if (!v.subject.trim()) e.subject = 'Enter a subject.'
  if (v.message.trim().length < 10) e.message = 'Message must be at least 10 characters.'
  return e
}
export default function Contact() {
  const [v, setV] = useState(empty), [err, setErr] = useState({}), [status, setStatus] = useState('idle')
  const set = k => e => setV({ ...v, [k]: e.target.value })
  async function onSubmit(ev) {
    ev.preventDefault()
    const e = validate(v); setErr(e)
    if (Object.keys(e).length) return
    setStatus('sending')
    try { await submitContact(v); setStatus('success'); setV(empty) }
    catch (x) { setStatus(x.message === 'NOT_CONFIGURED' ? 'unconfigured' : 'error') }
  }
  const field = (k, label, type = 'text') => (
    <div>
      <label htmlFor={k} className="block text-sm mb-1">{label}</label>
      <input id={k} type={type} value={v[k]} onChange={set(k)} aria-invalid={!!err[k]} aria-describedby={err[k] ? `${k}-e` : undefined}
        className="w-full rounded-md border border-white/30 bg-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-orange" />
      {err[k] && <p id={`${k}-e`} className="mt-1 text-xs text-orange-300">{err[k]}</p>}
    </div>
  )
  const row = (Icon, label, content) => (
    <div className="flex gap-3"><Icon size={18} className="mt-1 shrink-0 text-brand-orange" /><div><p className="font-semibold">{label}</p><div className="text-sm text-slate-200">{content}</div></div></div>
  )
  return (
    <footer id="contact" className="bg-brand-deep text-white px-5 pt-16 pb-6 font-sans">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-sm border-b border-white/60 pb-4"><p className="text-xs font-medium text-brand-orange">{firm.subtitle}</p>
        <p className="mt-1 text-lg font-semibold">{firm.name}</p></div>
        <h2 className="max-w-sm border-b border-white/60 py-6 mb-8 text-5xl md:text-6xl font-semibold text-brand-orange">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <address className="not-italic max-w-sm space-y-5 [&>div]:border-b [&>div]:border-white/50 [&>div]:pb-4">
            {row(MapPin, 'Location', firm.location)}
            {row(Phone, 'Phone', <a className="hover:underline" href={`tel:+91${firm.phone}`}>{firm.phone}</a>)}
            {row(Mail, 'Email', <a className="hover:underline" href={`mailto:${firm.email}`}>{firm.email}</a>)}
            {row(Building2, 'Office Address', <>{firm.address}.{firm.mapUrl && <> <a className="underline" href={firm.mapUrl} target="_blank" rel="noreferrer">View on map</a></>}</>)}
          </address>
          <form onSubmit={onSubmit} noValidate className="space-y-4">
            {field('name', 'Name')}{field('email', 'Email', 'email')}{field('phone', 'Phone', 'tel')}{field('subject', 'Subject')}
            <div>
              <label htmlFor="message" className="block text-sm mb-1">Message</label>
              <textarea id="message" rows={4} value={v.message} onChange={set('message')} aria-invalid={!!err.message}
                className="w-full rounded-md border border-white/30 bg-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-orange" />
              {err.message && <p className="mt-1 text-xs text-orange-300">{err.message}</p>}
            </div>
            <button disabled={status === 'sending'} className="rounded-full bg-brand-orange px-6 py-2.5 font-medium hover:bg-white hover:text-brand-deep disabled:opacity-60 transition duration-300">{status === 'sending' ? 'Sending…' : 'Send message'}</button>
            <div role="status" aria-live="polite" className="text-sm">
              {status === 'success' && <p className="text-green-300">Message sent. We will get back to you soon.</p>}
              {status === 'error' && <p className="text-orange-300">Message could not be sent. Please call or email us instead.</p>}
              {status === 'unconfigured' && <p className="text-orange-300">Form validated, but message delivery is not connected yet. Please call or email us.</p>}
            </div>
          </form>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row sm:justify-end gap-4 border-t border-white/20 pt-5 text-sm text-slate-300">
          <p>© {new Date().getFullYear()} {firm.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
