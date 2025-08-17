import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { wb_logo } from '../../constants/assets'
import '../../styles/Navbar.css'
import { LanguageIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  const [showLangMenu, setShowLangMenu] = useState(false)
  const { t, i18n } = useTranslation()

  const toggleLanguageMenu = () => {
    setShowLangMenu(!showLangMenu)
  }

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
    setShowLangMenu(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={wb_logo} alt="WasakaBe Logo" className="navbar-logo" />
      </div>

      <div className="navbar-center">
        <ul className="navbar-links">
          <li>
            <a href="#AboutMe">{t('about')}</a>
          </li>
          <li>
            <a href="#services">{t('services')}</a>
          </li>
          <li>
            <a href="#path">{t('experience')}</a>
          </li>
        </ul>

        <div className="navbar-right">
          <LanguageIcon
            className="size-10 cursor-pointer text-blue-500"
            onClick={toggleLanguageMenu}
          />
          {showLangMenu && (
            <ul className="language-dropdown">
              <li onClick={() => changeLanguage('en')}>English</li>
              <li onClick={() => changeLanguage('es')}>Español</li>
              <li onClick={() => changeLanguage('de')}>Deutsch</li>
              <li onClick={() => changeLanguage('zh')}>中文</li>
              <li onClick={() => changeLanguage('ko')}>한국어</li>
              <li onClick={() => changeLanguage('ja')}>日本語</li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
