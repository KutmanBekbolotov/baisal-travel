import { useState } from 'react'
import type { PageId } from '../../shared/model/navigation'
import { navItems, burgerLinks } from '../../shared/model/navigation'

type HeaderProps = {
  activePage: PageId
  onNavigate: (page: PageId) => void
}

export function Header({ activePage, onNavigate }: HeaderProps) {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false)

  const toggleBurger = () => setIsBurgerOpen(!isBurgerOpen)

  const handleNavigate = (pageId: PageId) => {
    onNavigate(pageId)
    setIsBurgerOpen(false)
  }

  return (
    <>
      <header className="site-header">
        <button
          className="brand"
          type="button"
          onClick={() => handleNavigate('home')}
          aria-label="Перейти на главную"
        >
          <span className="brand-mark">BT</span>
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

        <div className="header-actions">
          <button className="header-cta" type="button" onClick={() => handleNavigate('contacts')}>
            Оставить заявку
          </button>

          <button 
            className={`burger-trigger ${isBurgerOpen ? 'open' : ''}`}
            type="button"
            onClick={toggleBurger}
            aria-label="Открыть меню"
            aria-expanded={isBurgerOpen}
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>
        </div>
      </header>

      <div className={`burger-menu ${isBurgerOpen ? 'visible' : ''}`}>
        <nav className="burger-nav">
          
          <div className="mobile-main-links">
            {navItems.map((item) => (
              <button
                className={`burger-link ${activePage === item.id ? 'active' : ''}`}
                key={item.id}
                type="button"
                onClick={() => handleNavigate(item.id)}
              >
                {item.label}
              </button>
            ))}
            <div className="burger-divider"></div>
          </div>

          {burgerLinks.map((link) => (
            <button 
              key={link.id} 
              className={`burger-link ${activePage === link.id ? 'active' : ''}`}
              type="button"
              onClick={() => handleNavigate(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  )
}       
