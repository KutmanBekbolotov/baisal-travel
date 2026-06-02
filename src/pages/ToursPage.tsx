import { tours } from '../shared/model/travel'

export function ToursPage() {
  return (
    <main className="page-shell">
      <section className="page-hero compact">
        <p className="eyebrow">Route catalog</p>
        <h1>Маршруты</h1>
        <p>
          Подборка авторских направлений с детальным планированием, прозрачной
          стоимостью и поддержкой на каждом этапе.
        </p>
      </section>

      <section className="tour-list">
        {tours.map((tour) => (
          <article className="route-card" key={tour.title}>
            <img src={tour.image} alt={tour.location} />
            <div>
              <span className="route-location">{tour.location}</span>
              <h2>{tour.title}</h2>
              <p>
                {tour.days} / {tour.price}
              </p>
              <ul>
                {tour.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
