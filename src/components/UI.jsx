export const Section = ({ id, className = '', children }) => (
  <section id={id} className={`px-5 py-14 md:py-20 ${className}`}><div className="mx-auto max-w-6xl">{children}</div></section>
)
export const Title = ({ children, className = '' }) => (
  <h2 className={`font-title text-3xl text-brand-orange ${className}`}>{children}</h2>
)
