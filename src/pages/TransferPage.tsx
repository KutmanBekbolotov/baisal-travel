import { fleetOptions, transferRoutes } from '../shared/model/travel'
import type { PageId } from '../shared/model/navigation'

type TransferPageProps = {
  onNavigate: (page: PageId) => void
}

export function TransferPage ({ onNavigate }: TransferPageProps) {
  return (
    <main className="page-shell">
      <section className="page-hero compact">
        <p className="eyebrow">Transfers in Kyrgyzstan</p>
        <h1>Трансферы по Кыргызстану</h1>
        <p>
          Организуем перевозки для частных клиентов, туристических групп и
          компаний: от комфортных седанов до микроавтобусов и больших автобусов.
        </p>
      </section>

      <section className="transfer-overview" aria-label="Варианты транспорта">
        {fleetOptions.map((item) => (
          <article className="fleet-card" key={item.title}>
            <span>{item.capacity}</span>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <section className="tour-list">
        {transferRoutes.map((route) => (
          <article className="route-card" key={route.title}>
            <img src={route.image} alt={route.title} />
            <div>
              <span className="route-location">{route.region}</span>
              <h2>{route.title}</h2>
              <p className="route-meta">{route.vehicle}</p>
              <p>{route.note}</p>
              <ul>
                {route.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="transfer-request">
        <div>
          <p className="eyebrow">Custom transfer</p>
          <h2>Нужен другой маршрут или большой автобус?</h2>
        </div>
        <button className="primary-btn" type="button" onClick={() => onNavigate('contacts')}>
          Рассчитать поездку
        </button>
      </section>
    </main>
  )
}
