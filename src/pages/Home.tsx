import './Home.css'

type Page = 'home' | 'books'

interface HomeProps {
  onNavigate: (page: Page) => void
}

function Home({ onNavigate }: HomeProps) {
  return (
    <div className="home">
      <section className="hero">
        <h2>Bienvenido a Nuestro Club de Lectura</h2>
        <p className="hero-text">
          Este es un espacio donde compartimos nuestros pensamientos, reflexiones e ideas que surgen 
          de nuestras sesiones del club de lectura. Únete a nosotros en este viaje de conocimiento y descubrimiento.
        </p>
        <button className="cta-button" onClick={() => onNavigate('books')}>
          Explora Nuestros Libros
        </button>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>📚 Discusiones de Libros</h3>
          <p>Análisis profundos de los libros que leemos juntos, explorando temas, personajes e ideas.</p>
        </div>
        
        <div className="feature-card">
          <h3>💭 Reflexiones</h3>
          <p>Perspectivas personales y pensamientos de nuestros miembros sobre lo que hemos aprendido.</p>
        </div>
        
        <div className="feature-card">
          <h3>🌟 Comunidad</h3>
          <p>Un espacio para que amigos se conecten, compartan y crezcan juntos a través de la literatura.</p>
        </div>
      </section>

      <section className="about">
        <h2>Acerca de Este Proyecto</h2>
        <p>
          Este sitio web comenzó como un sitio estático simple para documentar nuestro viaje del club de lectura. 
          Puede evolucionar hacia una plataforma más dinámica con integración en la nube y funcionalidad 
          de base de datos a medida que nuestra comunidad crezca.
        </p>
        <p>
          Construido con HTML, CSS, React y TypeScript - diseñado para ser simple, 
          accesible y fácil de mantener.
        </p>
      </section>
    </div>
  )
}

export default Home
