// Import routing components
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  // Get current location for active link styling
  const location = useLocation()

  return (
    <header>
      <div className="header-content">
        {/* Site title/logo */}
        <h1>Matthew Chance</h1>
        
        {/* Navigation menu */}
        <nav>
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
          >
            About Me
          </Link>
          
          <Link 
            to="/portfolio" 
            className={location.pathname === '/portfolio' ? 'active' : ''}
          >
            Portfolio
          </Link>
          
          <Link 
            to="/contact" 
            className={location.pathname === '/contact' ? 'active' : ''}
          >
            Contact
          </Link>
          
          <Link 
            to="/resume" 
            className={location.pathname === '/resume' ? 'active' : ''}
          >
            Resume
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header