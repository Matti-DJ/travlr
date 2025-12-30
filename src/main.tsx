import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Homepage from './pages/Homepage.tsx'
import Destinations from './pages/Destinations.tsx'
import Experiences from './pages/Experiences.tsx'
import About from './pages/About.tsx'

function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage route*/}
        <Route path="/" element={<Homepage />} />
        {/* Destinations route*/}
        <Route path="/destinations" element={<Destinations />} />
        {/* Experiences route*/}
        <Route path="/experiences" element={<Experiences />} />
        {/* About route*/}
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
