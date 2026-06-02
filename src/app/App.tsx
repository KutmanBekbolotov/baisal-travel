import { useState } from 'react'
import { Header } from '../widgets/Header/Header'
import { Footer } from '../widgets/Footer/Footer'
import HomePage from '../pages/HomePage'
import { ToursPage } from '../pages/ToursPage'
import { AboutPage } from '../pages/AboutPage'
import { ContactsPage } from '../pages/ContactsPage'
import type { PageId } from '../shared/model/navigation'
import '../App.css'

function App() {
  const [activePage, setActivePage] = useState<PageId>('home')

  const renderPage = () => {
    switch (activePage) {
      case 'tours':
        return <ToursPage />
      case 'about':
        return <AboutPage />
      case 'contacts':
        return <ContactsPage />
      default:
        return <HomePage onNavigate={setActivePage} />
    }
  }

  return (
    <div className="app">
      <Header activePage={activePage} onNavigate={setActivePage} />
      {renderPage()}
      <Footer />
    </div>
  )
}

export default App
