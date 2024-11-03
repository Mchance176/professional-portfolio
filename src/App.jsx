// Import React Router components for routing functionality
import { Routes, Route } from 'react-router-dom'

// Import individual components and pages
import { Routes, Route } from "react-router-dom"
// Update these paths
import Header from "./components/Header/Header.jsx"  
import About from "./pages/About/About.jsx"         
import Portfolio from "./pages/Portfolio/Portfolio.jsx"
import Contact from "./pages/Contact/Contact.jsx"
import Resume from "./pages/Resume/Resume.jsx"
import './App.css'

// Import styles
import './App.css'

function App() {
  return (
    // Main container div that wraps entire application
    <div className="app-container">
      {/* Header component contains navigation menu */}
      <Header />
      
      {/* Main content area where page components will render */}
      <main className="main-content">
        {/* Routes component to handle different page routes */}
        <Routes>
          {/* Default route (home page) */}
          <Route path="/" element={<About />} />
          
          {/* Portfolio page route */}
          <Route path="/portfolio" element={<Portfolio />} />
          
          {/* Contact page route */}
          <Route path="/contact" element={<Contact />} />
          
          {/* Resume page route */}
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
    </div>
  )
}

// Export App component for use in main.jsx
export default App