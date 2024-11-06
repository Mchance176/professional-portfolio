import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import About from './pages/About/About'
import Portfolio from './pages/Portfolio/Portfolio'
import Resume from './pages/Portfolio/Resume/Resume'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  )
}

export default App