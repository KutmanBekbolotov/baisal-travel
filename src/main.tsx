// Это точка входа в приложение. Здесь мы рендерим корневой компонент App в DOM.
// Ты можешь настроить здесь глобальные стили, обернуть приложение в провайдеры контекста или роутера, если это необходимо.
// Например, если ты используешь react-router-dom для навигации между страницами, ты можешь обернуть App в BrowserRouter здесь.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
