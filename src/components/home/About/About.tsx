import { robot_dos } from '../../../constants/assets'
import '../../../styles/About.css'
import { useTranslation, Trans } from 'react-i18next'
export default function About() {
  const { t } = useTranslation()
  return (
    <div className="about-me-container" id="AboutMe">
      <div className="about-left">
        <img src={robot_dos} alt="robot" />
      </div>

      <div className="about-right">
        <h2>
          <Trans i18nKey="about_title">
            About <span>Me</span>
          </Trans>
        </h2>

        <p>
          <Trans i18nKey="about_intro">
            WasakaBe was founded by <strong>Alan de Jesús Martínez Hernández</strong>, a software
            development and management engineer, with a clear vision:
          </Trans>
        </p>

        <p className="bullet">{t('about_bullet')}</p>

        <p>{t('about_specialties')}</p>

        <ul>
          <li>• {t('about_list_1')}</li>
          <li>• {t('about_list_2')}</li>
          <li>• {t('about_list_3')}</li>
        </ul>

        <p className="quote">{t('about_quote')}</p>

        <div className="about-mission-vision">
          <h3>{t('about_mission_title')}</h3>
          <p>{t('about_mission_text')}</p>

          <h3>{t('about_vision_title')}</h3>
          <p>{t('about_vision_text')}</p>
        </div>
      </div>
    </div>
  )
}
