import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en'
import es from './locales/es'
import de from './locales/de'
import ja from './locales/ja'
import zh from './locales/zh'
import ko from './locales/ko'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en,
      es,
      de,
      ja,
      zh,
      ko,
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
