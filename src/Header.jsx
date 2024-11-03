import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const location = useLocation()
  return (
    <header>
      <div className="header-content">
        <h1>Your Name</h1>
        <nav>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>About Me</Link>
          >
            About Me
          </Link>
          <Link 
            to="/portfolio" 
            className={location.pathname === '/portfolio' ? 'active' : ''}
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