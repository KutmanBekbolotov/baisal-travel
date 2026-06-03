import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { IconContext } from "react-icons";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IconContext.Provider value={{size: "1em", className: "global-class-name" }} >
      <App />
    </IconContext.Provider>
  </StrictMode>,
)
