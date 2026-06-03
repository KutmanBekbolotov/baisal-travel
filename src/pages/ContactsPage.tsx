import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
export function ContactsPage() {
  return (
    <main className="page-shell">
      <section className="contact-layout">
        <div>
          <p className="eyebrow">Start planning</p>
          <h1>Соберем ваш маршрут</h1>
          <p>
            Напишите направление, даты и примерный бюджет. Мы вернемся с первой
            концепцией поездки в течение рабочего дня.
          </p>
          <div className="contact-card">
            <span>Travel desk</span>
            <a href="mailto:hello@novatravel.test">hello@novatravel.test</a>
            <a href="tel:+996700000000">+996 700 000 000</a>
          </div>
        </div>

        <form className="lead-form">
          <div className="social__container">
              <a href="instagram.com" ><FaInstagram size="30px" className="inst-icon"/></a>  
              <a href="whatsApp.com" ><FaWhatsapp size="30px"  className="whats-icon"/></a>  
              <a href="phone.com" ><FaPhoneAlt size="25px" className="phone-icon" /></a> 
          </div>
        </form>
      </section>
    </main>
  )
}
