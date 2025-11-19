import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Books from './pages/Books'

type Page = 'home' | 'books'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  const navigateToPage = (page: Page) => {
    setCurrentPage(page)
  }

  return (
    <div className="app">
      <Header currentPage={currentPage} onNavigate={navigateToPage} />
      <main className="main-content">
        {currentPage === 'home' && <Home onNavigate={navigateToPage} />}
        {currentPage === 'books' && <Books />}
      </main>
      <Footer />
    </div>
  )
}

export default App
