import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { wb_logo } from '../../constants/assets'
import '../../styles/Navbar.css'
import { LanguageIcon } from '@heroicons/react/24/solid'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const [showLangMenu, setShowLangMenu] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const toggleLanguageMenu = () => setShowLangMenu((v) => !v)
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
    setShowLangMenu(false)
  }

  const closeAllMenus = () => {
    setIsMenuOpen(false)
    setShowLangMenu(false)
  }

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-left">
        <a href="#top" aria-label="Home">
          <img src={wb_logo} alt="WasakaBe Logo" className="navbar-logo" />
        </a>
      </div>

      {/* Desktop center links */}
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
      </div>

      <div className="navbar-right">
        <button
          className="icon-btn lang-btn"
          aria-haspopup="menu"
          aria-expanded={showLangMenu}
          aria-controls="language-menu"
          onClick={toggleLanguageMenu}
          title="Change language"
          type="button"
        >
          <LanguageIcon className="navbar-icon" />
        </button>

        {/* Botón hamburguesa, visible en móviles/tablets */}
        <button
          className="icon-btn hamburger"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((v) => !v)}
          type="button"
        >
          {isMenuOpen ? (
            <XMarkIcon className="navbar-icon" />
          ) : (
            <Bars3Icon className="navbar-icon" />
          )}
        </button>

        {showLangMenu && (
          <ul id="language-menu" className="language-dropdown">
            <li onClick={() => changeLanguage('en')}>English</li>
            <li onClick={() => changeLanguage('es')}>Español</li>
            <li onClick={() => changeLanguage('de')}>Deutsch</li>
            <li onClick={() => changeLanguage('zh')}>中文</li>
            <li onClick={() => changeLanguage('ko')}>한국어</li>
            <li onClick={() => changeLanguage('ja')}>日本語</li>
          </ul>
        )}
      </div>

      {/* Menú móvil desplegable */}
      <div id="mobile-menu" className={`mobile-menu ${isMenuOpen ? 'open' : ''}`} role="menu">
        <ul className="mobile-links">
          <li>
            <a href="#AboutMe" onClick={closeAllMenus}>
              {t('about')}
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeAllMenus}>
              {t('services')}
            </a>
          </li>
          <li>
            <a href="#path" onClick={closeAllMenus}>
              {t('experience')}
            </a>
          </li>
        </ul>

        {/* Lenguajes también accesibles en móvil */}
        <div className="mobile-langs">
          <p className="mobile-langs__title">{t('language') ?? 'Language'}</p>
          <div className="mobile-langs__grid">
            <button onClick={() => changeLanguage('en')}>EN</button>
            <button onClick={() => changeLanguage('es')}>ES</button>
            <button onClick={() => changeLanguage('de')}>DE</button>
            <button onClick={() => changeLanguage('zh')}>中文</button>
            <button onClick={() => changeLanguage('ko')}>KR</button>
            <button onClick={() => changeLanguage('ja')}>JP</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
