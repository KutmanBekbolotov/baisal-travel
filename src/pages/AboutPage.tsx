export function AboutPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">About BaisalTravel</p>
        <h1>Мы организуем перевозки людей по Кыргызстану</h1>
        <p>
          Подбираем транспорт под задачу, заранее согласуем детали поездки и
          держим связь с пассажирами до прибытия.
        </p>
      </section>

      <section className="about-grid">
        <article>
          <span>01</span>
          <h2>Транспорт под задачу</h2>
          <p>Учитываем количество пассажиров, багаж, время подачи и дальность поездки.</p>
        </article>
        <article>
          <span>02</span>
          <h2>Опытные водители</h2>
          <p>Работаем с аккуратными водителями, которые знают городские и междугородние маршруты.</p>
        </article>
        <article>
          <span>03</span>
          <h2>Связь в поездке</h2>
          <p>Остаемся на контакте, помогаем с изменениями времени, адреса или обратной дороги.</p>
        </article>
      </section>
    </main>
  )
}
