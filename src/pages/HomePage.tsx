import { services, stats, transferRoutes } from '../shared/model/travel'
import type { PageId } from '../shared/model/navigation'

type HomePageProps = {
  onNavigate: (page: PageId) => void
}

function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-media" aria-hidden="true">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80"
          >
            <source src="/hero-timelapse.webm" type="video/webm" />
          </video>
          <div className="orbit-panel">
            <span>Live trip check</span>
            <strong>98% match</strong>
          </div>
        </div>

        <div className="hero-content">
          <p className="eyebrow">Transfers in Kyrgyzstan / 2026</p>
          <h1>BaisalTravel</h1>
          <p className="hero-copy">
            Мечты сбываются с нами.
          </p>
          <div className="hero-actions">
            <button className="primary-btn" type="button" onClick={() => onNavigate('tours')}>
              Смотреть трансферы
            </button>
            <button className="ghost-btn" type="button" onClick={() => onNavigate('contacts')}>
              Заказать поездку
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
          <p className="eyebrow">Popular transfers</p>
          <h2>Направления, где важны пунктуальность, комфорт и надежный водитель</h2>
        </div>
        <div className="tour-grid">
          {transferRoutes.slice(0, 3).map((route) => (
            <article className="tour-card" key={route.title}>
              <div className="tour-card-img-wrap">
                <img src={route.image} alt={route.title} />
              </div>
              <div className="tour-card-body">
                <span>{route.region}</span>
                <h3>{route.title}</h3>
                <p>{route.vehicle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">How it works</p>
          <h2>Перевозка людей по республике без лишней суеты</h2>
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
