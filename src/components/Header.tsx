import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="site-title">Platica Con El Mas Alla</h1>
        <p className="site-subtitle">A time capsule for sharing knowledge and reflections</p>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#reflections">Reflections</a></li>
            <li><a href="#books">Books</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
