import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export function ContactsPage() {
  return (
    <main className="page-shell">
      <section className="contact-layout">
        <div>
          <p className="eyebrow">Transfer request</p>
          <h1>Рассчитаем вашу поездку</h1>
          <p>
            Напишите направление, дату, время подачи и количество пассажиров.
            Мы подберем транспорт и вернемся с расчетом в течение рабочего дня.
          </p>
          <div className="contact-card">
            <span>Dispatch desk</span>
            <a href="mailto:baisaltravel@gmail.com">baisaltravel@gmail.com</a>
            <a href="tel:+996700000000">+996 700 000 000</a>
          </div>
        </div>

        <div className="lead-form">
          <div className="social__container">
            <div className="social-info">
              <h2>Исполним вашу мечту</h2>
              <h2>Путешествуйте вместе с нами</h2>
              <h3>
                Наш адрес:
                ул.Аалы Токомбаева 21/2 (отель Jannat Regency 5*)
              </h3>

              <div className="social-icons">
                <a href="https://instagram.com" aria-label="Instagram">
                  <FaInstagram size="20px" className="inst-icon" />
                </a>
                <a href="https://wa.me/" aria-label="WhatsApp">
                  <FaWhatsapp size="20px" className="whats-icon" />
                </a>
                <a href="tel:+996700000000" aria-label="Phone">
                  <FaPhoneAlt size="18px" className="phone-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
