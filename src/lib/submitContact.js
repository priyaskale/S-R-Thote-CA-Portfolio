// Delivery placeholder. Frontend validation lives in Contact.jsx; nothing is sent until you connect a backend.
// Replace the body with a fetch() to your API, Formspree, EmailJS, etc.
export async function submitContact(values) {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT
  if (!endpoint) throw new Error('NOT_CONFIGURED')
  const res = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) })
  if (!res.ok) throw new Error('SEND_FAILED')
}
