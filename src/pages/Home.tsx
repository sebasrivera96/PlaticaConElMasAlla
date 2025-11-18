import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h2>Welcome to Our Book Club</h2>
        <p className="hero-text">
          This is a place where we share our thoughts, reflections, and ideas that emerge 
          from our book club sessions. Join us on this journey of knowledge and discovery.
        </p>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>📚 Book Discussions</h3>
          <p>Deep dives into the books we read together, exploring themes, characters, and ideas.</p>
        </div>
        
        <div className="feature-card">
          <h3>💭 Reflections</h3>
          <p>Personal insights and thoughts from our members about what we've learned.</p>
        </div>
        
        <div className="feature-card">
          <h3>🌟 Community</h3>
          <p>A space for friends to connect, share, and grow together through literature.</p>
        </div>
      </section>

      <section className="about">
        <h2>About This Project</h2>
        <p>
          This website started as a simple static site to document our book club journey. 
          It may evolve into a more dynamic platform with cloud integration and database 
          functionality as our community grows.
        </p>
        <p>
          Built with HTML, CSS, React, and TypeScript - designed to be simple, 
          accessible, and easy to maintain.
        </p>
      </section>
    </div>
  )
}

export default Home
