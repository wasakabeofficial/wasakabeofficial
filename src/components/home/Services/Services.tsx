import { icon_ai, icon_app, icon_digital, icon_nube, icon_web } from '../../../constants/assets'
import '../../../styles/Services.css'
export default function Services() {
  return (
    <div className="services-container" id="services">
      <h1>
        Serv<span>ices</span>
      </h1>

      <div className="services-texts">
        <p>
          WasakaBe delivers cutting-edge digital solutions that combine intelligent automation,
          modern software engineering, and strategic thinking.
        </p>

        <p>
          Each service is designed to help businesses, educational institutions, and government
          entities optimize their operations, improve user experiences, and scale through smart
          technology.
        </p>
      </div>

      <div className="services-card">
        <div className='card'>
          <div className="services-card-icon">
            <img src={icon_ai} alt="icon ai"   />
          </div>
          <div className="services-card-text">
            <p>Automation with AI</p>
          </div>
        </div>

        <div className='card'>
          <div className="services-card-icon">
            <img src={icon_app} alt="icon app"   />
          </div>
          <div className="services-card-text">
            <p>Mobile Applications</p>
          </div>
        </div>

        <div className='card'>
          <div className="services-card-icon">
            <img src={icon_web} alt="icon app"   />
          </div>
          <div className="services-card-text">
            <p>Web Platforms</p>
          </div>
        </div>

        <div className='card'>
          <div className="services-card-icon">
            <img src={icon_nube} alt="icon app"   />
          </div>
          <div className="services-card-text">
            <p>Smart Integrations</p>
          </div>
        </div>

        <div className='card'>
          <div className="services-card-icon">
            <img src={icon_digital} alt="icon app"   />
          </div>
          <div className="services-card-text">
            <p>Digital Strategy</p>
          </div>
        </div>
      </div>
    </div>
  )
}
