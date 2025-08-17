import { useTranslation } from 'react-i18next'
import { cbta5_logo, gob, likephone_logo, uthh } from '../../../constants/assets'
import '../../../styles/Experiences.css'

type Experience = {
  company: string
  role: string
  period: string
  description: string[]
  highlight?: string
  logo?: string
  location?: string
  website?: string | null
}

const logoByCompany: Record<string, string> = {
  'XTI - Like Capital': likephone_logo,
  'Gobierno de Hidalgo – IFRESH': gob,
  'EDUCONTROL – Centro Bachillerato Tecnológico Agropecuario No.5': cbta5_logo,
  'The Cooking Meat - Universidad Tecnológica de la Huasteca Hidalguense': uthh,
}

const initialsOf = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((p) => p[0]!.toUpperCase())
    .join('')

export default function Experiences() {
  const { t } = useTranslation()

  // Lee el array completo desde i18n
  const itemsUnknown = t('experiences_section.items', {
    returnObjects: true,
    defaultValue: [],
  }) as unknown

  // Asegura que sea un array y normaliza campos
  const EXPERIENCES: Experience[] = Array.isArray(itemsUnknown)
    ? (itemsUnknown as unknown[]).map((it) => {
        const obj = typeof it === 'object' && it !== null ? (it as Record<string, unknown>) : {}
        const company = String(obj.company ?? '')
        return {
          company,
          role: String(obj.role ?? ''),
          period: String(obj.period ?? ''),
          description: Array.isArray(obj.description) ? obj.description.map(String) : [],
          highlight: obj.highlight ? String(obj.highlight) : undefined,
          location: obj.location ? String(obj.location) : undefined,
          website: obj.website === null ? null : obj.website ? String(obj.website) : null,
          // logo opcional en i18n; si no está, lo resolvemos por nombre
          logo: obj.logo ?? logoByCompany[company],
        } as Experience
      })
    : []

  const title = t('experiences_section.title', 'Trayectoria')
  const subtitle =
    t('experiences_section.subtitle') ||
    'Resumen de experiencias clave en desarrollo y gestión de software. La información sensible se mantiene reservada por razones de confidencialidad.'
  const detailsLabel = t('experiences_section.details', 'Ver detalles')
  const noWebsite = t('experiences_section.noWebsite', 'Sitio web no disponible')

  return (
    <section id="path" className="exp">
      <header className="exp__header">
        <h2 className="exp__title">{title}</h2>
        <p className="exp__subtitle">{subtitle}</p>
      </header>

      <ol className="exp__timeline" role="list">
        {EXPERIENCES.map((exp, i) => (
          <li key={`${exp.company}-${exp.period}-${i}`} className="exp__item">
            <span className="exp__line" aria-hidden="true" />
            <span className="exp__node" aria-hidden="true">
              <span className="exp__badge">{initialsOf(exp.company)}</span>
            </span>

            <article className="exp__card" aria-labelledby={`exp-title-${i}`}>
              <aside className="exp__meta">
                <span className="exp__period">{exp.period}</span>
                {exp.logo ? (
                  <div className="exp__logoWrapper">
                    <img src={exp.logo} alt={`Logo de ${exp.company}`} className="exp__logo" />
                  </div>
                ) : (
                  <div className="exp__logoFallback">{initialsOf(exp.company)}</div>
                )}
              </aside>

              <header className="exp__cardHeader">
                <h3 id={`exp-title-${i}`} className="exp__role">
                  {exp.role}
                </h3>
                <p className="exp__company">{exp.company}</p>

                {exp.location && <p className="exp__location">{exp.location}</p>}
                {exp.website ? (
                  <p className="exp__website">
                    <a href={exp.website} target="_blank" rel="noopener noreferrer">
                      {String(exp.website).replace(/^https?:\/\//, '')}
                    </a>
                  </p>
                ) : (
                  <p className="exp__website exp__website--na">{noWebsite}</p>
                )}

                {exp.highlight && <p className="exp__highlight">{exp.highlight}</p>}
              </header>

              <details className="exp__details">
                <summary className="exp__summary">
                  {detailsLabel}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="exp__chev"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </summary>
                <ul className="exp__desc">
                  {exp.description.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              </details>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
