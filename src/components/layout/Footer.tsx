import { useTranslation } from 'react-i18next'
import '../../styles/Footer.css'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="wk-footer">
      <div className="wk-footer__inner">
        <section className="wk-footer__col">
          <h3 className="wk-footer__title">{t('footer.location_title')}</h3>
          <div className="wk-footer__underline" />
          <address className="wk-footer__address">
            <p>{t('footer.location_text')}</p>
          </address>
        </section>

        <section className="wk-footer__col">
          <h3 className="wk-footer__title">{t('footer.notices_title')}</h3>
          <div className="wk-footer__underline" />
          <ul className="wk-footer__list">
            <li>
              <a className="wk-link" href="#">
                {t('footer.notices_confidentiality')}
              </a>
            </li>
            <li>
              <a className="wk-link" href="#">
                {t('footer.notices_terms')}
              </a>
            </li>
          </ul>
        </section>

        <section className="wk-footer__col wk-footer__col--right">
          <h3 className="wk-footer__title">{t('footer.socials_title')}</h3>
          <div className="wk-footer__underline wk-footer__underline--right" />
          <p className="wk-footer__lead">{t('footer.socials_lead')}</p>

          <div className="wk-social">
            {' '}
            {/* Facebook */}{' '}
            <a aria-label="Facebook" className="wk-social__btn" href="#" rel="noopener">
              {' '}
              <svg viewBox="0 0 24 24" className="wk-social__svg">
                {' '}
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H7.9V12h2.6V9.8c0-2.6 1.5-4 3.8-4 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.5V12h2.8l-.5 2.9h-2.3v7A10 10 0 0 0 22 12z" />{' '}
              </svg>{' '}
            </a>{' '}
            {/* LinkedIn */}{' '}
            <a
              aria-label="LinkedIn"
              className="wk-social__btn"
              href="https://www.linkedin.com/in/alandejesusmtz/"
              rel="noopener"
            >
              {' '}
              <svg viewBox="0 0 24 24" className="wk-social__svg">
                {' '}
                <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6v6H18v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9z" />{' '}
              </svg>{' '}
            </a>{' '}
            {/* YouTube */}{' '}
            <a
              aria-label="YouTube"
              className="wk-social__btn"
              href="https://www.youtube.com/@WasakaBe"
              rel="noopener"
            >
              {' '}
              <svg viewBox="0 0 24 24" className="wk-social__svg">
                {' '}
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .6 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.3.6 9.3.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.7 15.3V8.7l6.3 3.3-6.3 3.3z" />{' '}
              </svg>{' '}
            </a>{' '}
            {/* TikTok */}{' '}
            <a
              aria-label="TikTok"
              className="wk-social__btn"
              href="https://www.tiktok.com/@wasakabe"
              rel="noopener"
            >
              {' '}
              <svg viewBox="0 0 24 24" className="wk-social__svg">
                {' '}
                <path d="M20.6 8.1a7 7 0 0 1-4.3-2.2V15a5.6 5.6 0 1 1-5.6-5.6c.4 0 .8 0 1.2.1v2.5c-.4-.1-.8-.2-1.2-.2a3.1 3.1 0 1 0 3.1 3.1V2h2.5a7 7 0 0 0 4.3 4.8V8z" />{' '}
              </svg>{' '}
            </a>{' '}
          </div>
        </section>

        <section className="wk-footer__col">
          <p className="wk-footer__desc">{t('footer.desc')}</p>
          <p className="wk-footer__note">{t('footer.note')}</p>
        </section>
      </div>

      <div className="wk-footer__bottom">
        <p>
          © {year} <span className="wk-strong">WasakaBe</span>. {t('footer.copyright')}
        </p>
      </div>
    </footer>
  )
}
