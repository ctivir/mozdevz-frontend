import { ContactPage } from './styles'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import location from '../../assets/icons/location.svg'
import email from '../../assets/icons/email.svg'
import phone from '../../assets/icons/phone.svg'
import twitter from '../../assets/icons/twitter.svg'
import facebook from '../../assets/icons/facebook.svg'



function Contact() {
  return (
    <ContactPage>
      <Header />
      {/* Contact Container */}
      <div className="contactContainer">
        <aside className="contactDetails">
          {/* Contact Description */}
          <div className="contactDescription">
            <h1 className="contactTitle">
              Contacte-nos
            </h1>
            <p className="contactText">
              Para mais informações não exite em escrever-nos
            </p>
          </div>

          {/* Contact Info */}
          <div className="contactInfo">
            <div className="contactLabel">
              <img
                className="icon"
                src={phone}
                alt="phone"
              />
              <span className="text">
                +258 84 623 9715 / +258 84 729 8029
              </span>
            </div>

            <div className="contactLabel">
              <img
                className="icon"
                src={email}
                alt="email"
              />
              <span className="text">
                info@mozdevz.org
              </span>
            </div>

            <div className="contactLabel">
              <img
                className="icon"
                src={location}
                alt="location"
              />
              <span className="text">
                Av. Paulo Samuel Kankhomba, Nº 106 Maputo
              </span>
            </div>
          </div>

          <div className="contactSocials">
            <i className="socialIcon">
              <img
                className="icon"
                src={facebook}
                alt="facebook"
              />
            </i>

            <i className="socialIcon">
              <img
                className="icon"
                src={twitter}
                alt="twitter"
              />
            </i>
          </div>
        </aside>

        {/* Contact Form */}
        <aside className="contactForm">
          <form className="form">
            <div className="input">
              <label htmlFor="nome">Seu nome</label>
              <input type="text" id="name" />
            </div>
            <div className="input">
              <label htmlFor="email">Seu email</label>
              <input type="email" id="email" />
            </div>
            <div className="input">
              <label htmlFor="message">Sua messagem</label>
              <textarea id="message" />
            </div>
            <button type="submit">Enviar messagem</button>
          </form>
        </aside>
      </div>
      <Footer />
    </ContactPage>
  )
}

export default Contact;