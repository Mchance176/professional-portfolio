// Import necessary components from react-router-dom for navigation
import { Link, useLocation } from 'react-router-dom'
// Import the associated styles
import './Header.css'

function Header() {
  // useLocation hook returns the current URL location object
  // We use this to determine which nav link should be highlighted as active
  const location = useLocation()

  return (
    // Main header container
    <header>
      {/* Centered content wrapper with max-width */}
      <div className="header-content">
        {/* Site title/logo */}
        <h1>Your Name</h1>
        
        {/* Navigation menu */}
        <nav>
          {/* Home/About link 
              The className uses a ternary operator to add 'active' class when on this path */}
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
          >
            About Me
          </Link>

          {/* Portfolio link */}
          <Link 
            to="/portfolio" 
            className={location.pathname === '/portfolio' ? 'active' : ''}
          >
            Portfolio
          </Link>

          {/* Contact link */}
          <Link 
            to="/contact" 
            className={location.pathname === '/contact' ? 'active' : ''}
          >
            Contact
          </Link>

          {/* Resume link */}
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

// Export the component for use in other parts of the application
export default Header 