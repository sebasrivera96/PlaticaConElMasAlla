import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Platica Con El Mas Alla. Todos los derechos reservados.</p>
        <p className="footer-description">
          Un espacio para que amigos compartan reflexiones e ideas de nuestras sesiones del club de lectura
        </p>
      </div>
    </footer>
  )
}

export default Footer
