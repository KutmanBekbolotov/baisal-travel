import { useState } from 'react'
import { Header } from '../widgets/Header/Header'
import { Footer } from '../widgets/Footer/Footer'
import HomePage from '../pages/HomePage'
import { ToursPage } from '../pages/ToursPage'
import { AboutPage } from '../pages/AboutPage'
import { ContactsPage } from '../pages/ContactsPage'
import type { PageId } from '../shared/model/navigation'
import { GradientBlinds } from '../shared/ui/GradientBlinds'
import '../App.css'

const appGradientColors = ['#67e8f9', '#bef264', '#fb7185', '#5227ff']

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
      <GradientBlinds
        className="app-background"
        gradientColors={appGradientColors}
        angle={30}
        noise={0.08}
        blindCount={18}
        blindMinWidth={42}
        spotlightRadius={0.72}
        spotlightSoftness={1}
        spotlightOpacity={0.85}
        mouseDampening={0.28}
        distortAmount={18}
        shineDirection="left"
        mixBlendMode="screen"
      />
      <Header activePage={activePage} onNavigate={setActivePage} />
      {renderPage()}
      <Footer />
    </div>
  )
}

export default App
