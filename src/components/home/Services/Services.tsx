import { useTranslation } from 'react-i18next'
import { icon_ai, icon_app, icon_digital, icon_nube, icon_web } from '../../../constants/assets'
import '../../../styles/Services.css'

type ServiceItem = {
  id: string
  icon: string
  alt: string
}

const SERVICES: ServiceItem[] = [
  { id: 'ai', icon: icon_ai, alt: 'AI automation icon' },
  { id: 'mobile', icon: icon_app, alt: 'Mobile apps icon' },
  { id: 'web', icon: icon_web, alt: 'Web platforms icon' },
  { id: 'cloud', icon: icon_nube, alt: 'Smart integrations (cloud) icon' },
  { id: 'strategy', icon: icon_digital, alt: 'Digital strategy analytics icon' },
]

function ServiceCard({ id, icon, alt }: ServiceItem) {
  const { t } = useTranslation()
  return (
    <div className="card">
      <div className="services-card-icon">
        <img src={icon} alt={alt} loading="lazy" decoding="async" draggable={false} />
      </div>
      <div className="services-card-text">
        {/* Se traduce según la clave en services_section.items */}
        <p>{t(`services_section.items.${id}`)}</p>
      </div>
    </div>
  )
}

export default function Services() {
  const { t } = useTranslation()

  return (
    <div className="services-container" id="services">
      <h1>{t('services_section.title')}</h1>

      <div className="services-texts">
        <p>{t('services_section.description1')}</p>
        <p>{t('services_section.description2')}</p>
      </div>

      <div className="services-card">
        {SERVICES.map((s) => (
          <ServiceCard key={s.id} {...s} />
        ))}
      </div>
    </div>
  )
}
