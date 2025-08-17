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
  website?: string | null // null si no tiene web
}

const EXPERIENCES: Experience[] = [
  {
    company: 'XTI - Like Capital',
    role: 'Mobile Developer',
    period: 'Jan 2025 – Apr 2025',
    description: [
      'App exclusiva para miembros de partidos políticos.',
      'Módulo interno tipo red social y “Reporte Ciudadano”.',
      'Sistema de noticias, servicios y promociones exclusivas.',
    ],
    highlight: 'Impulso de participación y retención de usuarios.',
    logo: likephone_logo,
    location: 'Nuevo León, México',
    website: 'https://likephone.mx/',
  },
  {
    company: 'EDUCONTROL – Centro Bachillerato Tecnológico Agropecuario No.5',
    role: 'Software Engineer',
    period: 'Sep 2023 – Dec 2024',
    description: [
      'Plataforma web institucional y credenciales automatizadas.',
      'App para padres con integración a Alexa.',
      'Optimización de control de acceso y comunicación escolar.',
    ],
    highlight: 'Automatización operativa y mejor comunicación con padres.',
    logo: cbta5_logo,
    location: 'Hidalgo, México',
    website: null,
  },
  {
    company: 'Gobierno de Hidalgo – IFRESH',
    role: 'Software Engineer',
    period: 'Feb 2024 – Apr 2024',
    description: [
      'Migración y optimización de datos estatales.',
      'Mejor consistencia de información y procesos de carga.',
      'Herramientas para detección/corrección de errores.',
    ],
    highlight: 'Datos más confiables y procesos más rápidos.',
    logo: gob,
    location: 'Hidalgo, México',
    website: 'https://hidalgo.gob.mx',
  },
  {
    company: 'The Cooking Meat - Universidad Tecnológica de la Huasteca Hidalguense',
    role: 'Software Engineer',
    period: 'Feb 2024 – Apr 2024',
    description: [
      'App exclusivo para el área de carnes.',
      'Detección de diferentes tipos de cocción de la carne con CNN.',
      'Herramientas para detección/corrección de probabilidad.',
    ],
    highlight: 'Datos más confiables y procesos más rápidos.',
    logo: uthh,
    location: 'Huejutla, Hidalgo, México',
    website: 'https://uthh.edu.mx',
  },
]

const initialsOf = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((p) => p[0]!.toUpperCase())
    .join('')

export default function Experiences() {
  return (
    <section id="path" className="exp">
      <header className="exp__header">
        <h2 className="exp__title">Trayectoria</h2>
        <p className="exp__subtitle">
          Resumen de experiencias clave en desarrollo y gestión de software. La información sensible
          se mantiene reservada por razones de confidencialidad.
        </p>
      </header>

      <ol className="exp__timeline" role="list">
        {EXPERIENCES.map((exp, i) => (
          <li key={i} className="exp__item">
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
                      {exp.website.replace(/^https?:\/\//, '')}
                    </a>
                  </p>
                ) : (
                  <p className="exp__website exp__website--na">Sitio web no disponible</p>
                )}

                {exp.highlight && <p className="exp__highlight">{exp.highlight}</p>}
              </header>

              <details className="exp__details">
                <summary className="exp__summary">
                  Ver detalles
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
