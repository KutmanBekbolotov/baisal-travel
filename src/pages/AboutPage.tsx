export function AboutPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">About NovaTravel</p>
        <h1>Мы проектируем путешествия, а не просто продаем билеты</h1>
        <p>
          Команда соединяет тревел-экспертизу, дизайн маршрутов и цифровые
          инструменты, чтобы отпуск ощущался легким еще до вылета.
        </p>
      </section>

      <section className="about-grid">
        <article>
          <span>01</span>
          <h2>Персональный сценарий</h2>
          <p>Сначала понимаем темп, бюджет и интересы, потом собираем маршрут.</p>
        </article>
        <article>
          <span>02</span>
          <h2>Проверенные партнеры</h2>
          <p>Работаем с отелями, гидами и трансферами, которых можно рекомендовать спокойно.</p>
        </article>
        <article>
          <span>03</span>
          <h2>Сервис после оплаты</h2>
          <p>Остаемся на связи в поездке, помогаем с изменениями и форс-мажорами.</p>
        </article>
      </section>
    </main>
  )
}
