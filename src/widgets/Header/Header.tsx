import type { PageId } from '../../shared/model/navigation'
import { navItems } from '../../shared/model/navigation'

type HeaderProps = {
  activePage: PageId
  onNavigate: (page: PageId) => void
}

export function Header({ activePage, onNavigate }: HeaderProps) {
  return (
    <header className="site-header">
      <button
        className="brand"
        type="button"
        onClick={() => onNavigate('home')}
        aria-label="Перейти на главную"
      >
        <span className="brand-mark">NT</span>
        <span>BaisalTravel</span>
      </button>

      <nav className="main-nav" aria-label="Основная навигация">
        {navItems.map((item) => (
          <button
            className={activePage === item.id ? 'nav-link active' : 'nav-link'}
            key={item.id}
            type="button"
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <button className="header-cta" type="button" onClick={() => onNavigate('contacts')}>
        Связаться с нами
      </button>
    </header>
  )
}
