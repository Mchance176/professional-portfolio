// Import React Router components for routing functionality
import { Routes, Route } from 'react-router-dom'

// Import individual components and pages
import Header from './components/Header/Header.jsx'
import About from './pages/About/About.jsx'
import Portfolio from './pages/Portfolio/Portfolio.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Resume from './pages/Resume/Resume.jsx'

// Import styles
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
    </div>
  )
}

export default App