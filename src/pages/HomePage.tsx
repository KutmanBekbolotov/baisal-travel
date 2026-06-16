import {
  companyServices,
  homeExperiences,
  planningSteps,
  stats,
  transferRoutes,
  worldTours,
} from '../shared/model/travel'
import type { PageId } from '../shared/model/navigation'

type HomePageProps = {
  onNavigate: (page: PageId) => void
}

function HomePage({ onNavigate }: HomePageProps) {
  const featuredTours = worldTours.slice(0, 3)
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

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
            <span>Full travel service</span>
            <strong>7 услуг</strong>
          </div>
        </div>

        <div className="hero-content">
          <p className="eyebrow">BaisalTravel concierge / 2026</p>
          <h1>BaisalTravel</h1>
          <p className="hero-copy">
            Организуем путешествия под ключ: туры по миру, авиабилеты, визовую поддержку,
            страховку, отели, VIP-трансферы и поездки по Кыргызстану.
          </p>
          <div className="hero-actions">
            <button className="primary-btn" type="button" onClick={() => onNavigate('contacts')}>
              Подобрать путешествие
            </button>
            <button className="ghost-btn" type="button" onClick={scrollToServices}>
              Смотреть услуги
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

      <section className="section" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow">All services</p>
            <h2>Все, что нужно для поездки, в одном месте</h2>
          </div>
          <p className="section-lead">
            Клиенту не нужно отдельно искать билет, отель, страховку, визу и трансфер:
            мы собираем эти детали в один понятный план.
          </p>
        </div>
        <div className="service-cards">
          {companyServices.map((service, index) => (
            <article
              className={index === 0 ? 'company-service-card featured' : 'company-service-card'}
              key={service.id}
            >
              <div className="company-service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="company-service-body">
                <span>{service.kicker}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <button className="ghost-btn" type="button" onClick={() => onNavigate(service.id)}>
                  Подробнее
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience-section">
        <div className="experience-copy">
          <p className="eyebrow">Travel scenarios</p>
          <h2>Не просто “продать тур”, а собрать поездку под человека</h2>
          <p>
            Для одного клиента важен спокойный семейный отель, для другого — быстрый перелет
            на деловую встречу, для третьего — красивый маршрут с приватным трансфером.
            Поэтому мы начинаем не с цены, а с цели поездки.
          </p>
          <button className="primary-btn" type="button" onClick={() => onNavigate('contacts')}>
            Обсудить маршрут
          </button>
        </div>
        <div className="experience-gallery">
          {homeExperiences.map((item) => (
            <article className="experience-card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Popular directions</p>
            <h2>Популярные международные направления</h2>
          </div>
          <button className="ghost-btn" type="button" onClick={() => onNavigate('tours')}>
            Все туры
          </button>
        </div>
        <div className="tour-grid">
          {featuredTours.map((tour) => (
            <article className="tour-card" key={tour.title}>
              <div className="tour-card-img-wrap">
                <img src={tour.image} alt={tour.title} />
              </div>
              <div className="tour-card-body">
                <span>{tour.destination}</span>
                <h3>{tour.title}</h3>
                <p>{tour.duration}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">How it works</p>
          <h2>Понятный процесс от первой заявки до возвращения домой</h2>
        </div>
        <div className="service-list">
          {planningSteps.map((step, index) => (
            <div className="service-item" key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Kyrgyzstan transfers</p>
            <h2>Трансферы и перевозки внутри Кыргызстана</h2>
          </div>
          <button className="ghost-btn" type="button" onClick={() => onNavigate('transfers')}>
            Все трансферы
          </button>
        </div>
        <div className="tour-grid">
          {transferRoutes.map((route) => (
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

      <section className="home-cta">
        <div>
          <p className="eyebrow">Request</p>
          <h2>Расскажите, куда хотите поехать, а мы соберем маршрут и расчет</h2>
          <p>
            Можно начать с простой идеи: страна, даты, количество человек и желаемый уровень
            комфорта. Остальное уточним и предложим несколько вариантов.
          </p>
        </div>
        <button className="primary-btn" type="button" onClick={() => onNavigate('contacts')}>
          Оставить заявку
        </button>
      </section>
    </main>
  )
}

export default HomePage
