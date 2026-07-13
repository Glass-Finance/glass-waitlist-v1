import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import { initMonitoring } from './utils/monitoring.js'

initMonitoring();

// After a new deploy, old chunk hashes no longer exist on the server.
// Vite fires this event when a dynamic import chunk fails to load —
// a hard reload fetches the new index.html and fresh chunks.
window.addEventListener('vite:preloadError', () => {
  window.location.reload();
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
