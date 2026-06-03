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
          <label>
            Имя
            <input type="text" placeholder="Как к вам обращаться" />
          </label>
          <label>
            Направление
            <input type="text" placeholder="Например, Бишкек - Каракол" />
          </label>
          <label>
            Сообщение
            <textarea rows={5} placeholder="Даты, состав группы, пожелания" />
          </label>
          <button className="primary-btn" type="button">
            Отправить заявку
          </button>
        </form>
      </section>
    </main>
  )
}
