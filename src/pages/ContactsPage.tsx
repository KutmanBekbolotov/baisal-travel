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
          <label>
            Имя
            <input type="text" placeholder="Как к вам обращаться" />
          </label>
          <label>
            Направление
            <input type="text" placeholder="Например, Япония или Норвегия" />
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
