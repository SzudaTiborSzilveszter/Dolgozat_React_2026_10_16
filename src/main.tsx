import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TanuloszobaProvider } from './contexts/TanuloszobaContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TanuloszobaProvider>
      <App />
    </TanuloszobaProvider>
  </StrictMode>,
)
