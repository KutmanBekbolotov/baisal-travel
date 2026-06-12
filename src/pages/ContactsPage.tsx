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

        <form className="lead-form">

          <div className="social__container">

            <div className="social-info">
              <h1>Исполним вашу мечту</h1>
              <h2>Путешествуйте вместе с нами</h2>
              <h2>
                Наш адрес:
                ул.Аалы Токомбаева 21/2 (отель Jannat Regency 5*)
              </h2>
              
              <div className="social-icons">
                <a href="instagram.com" ><FaInstagram size="30px" className="inst-icon"/></a>  
                <a href="whatsApp.com" ><FaWhatsapp size="30px"  className="whats-icon"/></a>  
                <a href="phone.com" ><FaPhoneAlt size="25px" className="phone-icon" /></a>
              </div>
           
            </div>
         
               
          </div>

        </form>
      </section>
    </main>
  )
}
