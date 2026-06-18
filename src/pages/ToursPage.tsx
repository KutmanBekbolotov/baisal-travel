import type { PageId } from '../shared/model/navigation'
import { worldTours } from '../shared/model/travel'

type ToursPageProps = {
  onNavigate: (page: PageId) => void
}

export const ToursPage = ({ onNavigate }: ToursPageProps) => {
  return (
    <main className="page-shell">
      <section className="page-hero compact">
        <p className="eyebrow">World Premium Tours</p>
        <h1>Туры и авиабилеты</h1>
        <p>
          Открывайте лучшие международные направления с вылетом из Бишкека. 
          Только проверенные Luxury отели, стабильные регулярные рейсы и продуманный до мелочей комфорт.
        </p>
      </section>

      <section className='world-map'>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
          alt="World Map" 
          className="world-map-image"
        />
        
        <svg 
          viewBox="0 0 1000 500" 
          className="world-map-routes"
        >
          <defs>
            <linearGradient id="flight-path" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2d6a96" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0095ff" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          
          <circle cx="680" cy="180" r="5" fill="#2d6a96;">
            <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="680" cy="180" r="3" fill="#a83232" />
          <text x="690" y="172" className="map-city-label">Бишкек</text>

          <path d="M 680 180 Q 600 120 530 160" fill="transparent" stroke="url(#flight-path)" strokeWidth="2" strokeDasharray="4,4" />
          <circle cx="530" cy="160" r="3" fill="#2d6a96" />
          
          <path d="M 680 180 Q 750 230 800 290" fill="transparent" stroke="url(#flight-path)" strokeWidth="2" strokeDasharray="4,4" />
          <circle cx="800" cy="290" r="3" fill="#2d6a96" />

          <path d="M 680 180 Q 640 220 620 250" fill="transparent" stroke="url(#flight-path)" strokeWidth="2" strokeDasharray="4,4" />
          <circle cx="620" cy="250" r="3" fill="#2d6a96" />

          <path d="M 680 180 Q 685 270 690 350" fill="transparent" stroke="url(#flight-path)" strokeWidth="2" strokeDasharray="4,4" />
          <circle cx="690" cy="350" r="3" fill="#2d6a96" />

          <path d="M 680 180 Q 550 250 510 320" fill="transparent" stroke="url(#flight-path)" strokeWidth="2" strokeDasharray="4,4" />
          <circle cx="510" cy="320" r="3" fill="#2d6a96" />

          <path d="M 680 180 Q 550 180 320 310" fill="transparent" stroke="url(#flight-path)" strokeWidth="2" strokeDasharray="4,4" />
          <circle cx="320" cy="310" r="3" fill="#2d6a96" />
        </svg>
      </section>

      <section className="tour-list" aria-label="Доступные направления">
        {worldTours.map((tour) => (
          <article className="route-card" key={tour.title}>
            <img src={tour.image} alt={tour.title} />
            <div className="route-card-content">
              <span className="route-location">{tour.destination}</span>
              <h2>{tour.title}</h2>
              <p className="route-meta">{tour.duration}</p>
              <p>{tour.note}</p>
              <ul>
                {tour.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              
              <div className="route-card-actions">
                <button
                  className="primary-btn" 
                  type="button" 
                  onClick={() => onNavigate('contacts')}
                >
                  Купить билеты
                </button>
                <button
                  className="ghost-btn" 
                  type="button" 
                  onClick={() => onNavigate('contacts')}
                >
                  Подробнее
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="transfer-request">
        <div>
          <p className="eyebrow">Individual Itinerary</p>
          <h2>Не нашли нужное направление или хотите эксклюзивный маршрут?</h2>
        </div>
        <button 
          className="primary-btn" 
          type="button" 
          onClick={() => onNavigate('contacts')}
        >
          Оставить заявку
        </button>
      </section>
    </main>
  )
}
