import { robot, wallpapers } from '../../../constants/assets'
import '../../../styles/Header.css'
import { useTranslation, Trans } from 'react-i18next'

export default function Header() {
  const { t } = useTranslation()
  return (
    <div
      className="header-container"
      style={{
        backgroundImage: `linear-gradient(rgb(30, 60, 76), rgba(13,17,23,0.55)), url(${wallpapers})`,
      }}
    >
      <div className="header-left-content">
        <h2>
          <Trans i18nKey="header_title" components={{ 1: <span className="highlight" /> }} />
        </h2>
        <div className="linea" />
        <p>{t('header_paragraph')}</p>
      </div>

      <div className="header-right-content">
        <img src={robot} alt="robot" />
        <p>{t('header_badge')}</p>
      </div>
    </div>
  )
}
