import { services, stats, tours } from '../shared/model/travel'
import type { PageId } from '../shared/model/navigation'

type HomePageProps = {
  onNavigate: (page: PageId) => void
}

function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-media" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80"
            alt=""
          />
          <div className="orbit-panel">
            <span>Live route scan</span>
            <strong>98% match</strong>
          </div>
        </div>

        <div className="hero-content">
          <p className="eyebrow">Travel company / 2026</p>
          <h1>NovaTravel</h1>
          <p className="hero-copy">
            Собираем премиальные путешествия как интерфейс будущего: быстро,
            прозрачно и точно под ваш стиль отдыха.
          </p>
          <div className="hero-actions">
            <button className="primary-btn" type="button" onClick={() => onNavigate('tours')}>
              Смотреть маршруты
            </button>
            <button className="ghost-btn" type="button" onClick={() => onNavigate('contacts')}>
              Собрать тур
            </button>
          </div>
        </div>
      </section>

      <section className="stats-strip" aria-label="Показатели компании">
        {stats.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Featured routes</p>
          <h2>Туры, которые выглядят как следующий уровень отпуска</h2>
        </div>
        <div className="tour-grid">
          {tours.slice(0, 3).map((tour) => (
            <article className="tour-card" key={tour.title}>
              <img src={tour.image} alt={tour.location} />
              <div className="tour-card-body">
                <span>{tour.location}</span>
                <h3>{tour.title}</h3>
                <p>
                  {tour.days} / {tour.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">How it works</p>
          <h2>Технологичный маршрут без холодного сервиса</h2>
        </div>
        <div className="service-list">
          {services.map((service, index) => (
            <div className="service-item" key={service}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{service}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default HomePage
