import './Header.css'

type Page = 'home' | 'books'

interface HeaderProps {
  currentPage: Page
  onNavigate: (page: Page) => void
}

function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="site-title">Platica Con El Mas Alla</h1>
        <p className="site-subtitle">Una cápsula del tiempo para compartir conocimiento y reflexiones</p>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <button 
                className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
                onClick={() => onNavigate('home')}
              >
                Inicio
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${currentPage === 'books' ? 'active' : ''}`}
                onClick={() => onNavigate('books')}
              >
                Libros
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
