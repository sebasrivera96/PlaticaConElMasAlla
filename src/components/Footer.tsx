import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Platica Con El Mas Alla. All rights reserved.</p>
        <p className="footer-description">
          A space for friends to share reflections and ideas from our book club sessions
        </p>
      </div>
    </footer>
  )
}

export default Footer
