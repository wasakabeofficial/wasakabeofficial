import { robot, wallpapers } from '../../../constants/assets'
import '../../../styles/Header.css'
import { useTranslation, Trans } from 'react-i18next'
export default function Header() {
  const { t } = useTranslation()
  return (
    <div className="header-container">
      <div className="background-wallpaper">
        <img src={wallpapers} alt="background" />
      </div>

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
