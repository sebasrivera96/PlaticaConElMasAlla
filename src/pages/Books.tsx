import './Books.css'
import Book from '../components/Book'
import { booksData } from '../data/booksData'

function Books() {
  return (
    <div className="books-page">
      <div className="books-header">
        <h1 className="books-title">Nuestra Biblioteca</h1>
        <p className="books-description">
          Explora los libros que hemos leído y discutido en nuestro club de lectura. 
          Cada libro incluye las reflexiones únicas de nuestros cuatro miembros.
        </p>
      </div>
      
      <div className="books-collection">
        {booksData.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
      
      {booksData.length === 0 && (
        <div className="no-books">
          <p>Aún no hay libros en nuestra colección. ¡Pronto agregaremos más!</p>
        </div>
      )}
    </div>
  )
}

export default Books
