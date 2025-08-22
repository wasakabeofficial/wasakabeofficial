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
    .map((paragraph) => paragraph[0]!.toUpperCase())
    .join('')

export default function Experiences() {
  const { t } = useTranslation()
  const itemsUnknown = t('experiences_section.items', {
    returnObjects: true,
    defaultValue: [],
  }) as unknown

  const EXPERIENCES: Experience[] = Array.isArray(itemsUnknown)
    ? (itemsUnknown as unknown[]).map((item) => {
        const object =
          typeof item === 'object' && item !== null ? (item as Record<string, unknown>) : {}
        const company = String(object.company ?? '')
        return {
          company,
          role: String(object.role ?? ''),
          period: String(object.period ?? ''),
          description: Array.isArray(object.description) ? object.description.map(String) : [],
          highlight: object.highlight ? String(object.highlight) : undefined,
          location: object.location ? String(object.location) : undefined,
          website: object.website === null ? null : object.website ? String(object.website) : null,
          logo: object.logo ?? logoByCompany[company],
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
        {EXPERIENCES.map((experencies, index) => (
          <li key={`${experencies.company}-${experencies.period}-${index}`} className="exp__item">
            <span className="exp__line" aria-hidden="true" />
            <span className="exp__node" aria-hidden="true">
              <span className="exp__badge">{initialsOf(experencies.company)}</span>
            </span>

            <article className="exp__card" aria-labelledby={`exp-title-${index}`}>
              <aside className="exp__meta">
                <span className="exp__period">{experencies.period}</span>
                {experencies.logo ? (
                  <div className="exp__logoWrapper">
                    <img
                      src={experencies.logo}
                      alt={`Logo de ${experencies.company}`}
                      className="exp__logo"
                    />
                  </div>
                ) : (
                  <div className="exp__logoFallback">{initialsOf(experencies.company)}</div>
                )}
              </aside>

              <header className="exp__cardHeader">
                <h3 id={`exp-title-${index}`} className="exp__role">
                  {experencies.role}
                </h3>
                <p className="exp__company">{experencies.company}</p>

                {experencies.location && <p className="exp__location">{experencies.location}</p>}
                {experencies.website ? (
                  <p className="exp__website">
                    <a href={experencies.website} target="_blank" rel="noopener noreferrer">
                      {String(experencies.website).replace(/^https?:\/\//, '')}
                    </a>
                  </p>
                ) : (
                  <p className="exp__website exp__website--na">{noWebsite}</p>
                )}

                {experencies.highlight && <p className="exp__highlight">{experencies.highlight}</p>}
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
                  {experencies.description.map((date, idx) => (
                    <li key={idx}>{date}</li>
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
