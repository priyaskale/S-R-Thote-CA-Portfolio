
export async function submitContact(values) {
  const res = await fetch('https://formspree.io/f/xzereobj', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(values)
  })

  if (!res.ok) {
    throw new Error('SEND_FAILED')
  }
}
