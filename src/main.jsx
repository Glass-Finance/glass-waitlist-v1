import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Self-hosted fonts (replacing a Google Fonts CSS @import that silently
// never shipped -- @import "tailwindcss" in index.css expands to real CSS
// rules ahead of it at build time, and any @import positioned after another
// rule is dropped entirely per spec). Importing as JS modules here sidesteps
// that whole class of bug: each one becomes its own bundled/hashed CSS
// asset in Vite's module graph, not a rule inside index.css competing for
// position. Also drops the runtime dependency on fonts.googleapis.com.
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/500.css'
import '@fontsource/dm-sans/600.css'
import '@fontsource/dm-sans/700.css'
import '@fontsource/playfair-display/400.css'
import '@fontsource/playfair-display/400-italic.css'
import '@fontsource/urbanist/400.css'
import '@fontsource/urbanist/500.css'
import '@fontsource/urbanist/600.css'
import '@fontsource/urbanist/700.css'
import '@fontsource/urbanist/800.css'

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
