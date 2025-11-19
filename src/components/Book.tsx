import './Book.css'

export interface BookMemberSummary {
  memberName: string
  summary: string
}

export interface BookData {
  id: string
  title: string
  author: string
  coverImage: string
  memberSummaries: BookMemberSummary[]
}

interface BookProps {
  book: BookData
}

function Book({ book }: BookProps) {
  return (
    <div className="book-card">
      <div className="book-header">
        <img src={book.coverImage} alt={`${book.title} cover`} className="book-cover" />
        <div className="book-info">
          <h2 className="book-title">{book.title}</h2>
          <h3 className="book-author">por {book.author}</h3>
        </div>
      </div>
      
      <div className="book-summaries">
        <h4 className="summaries-title">Reflexiones del Club de Lectura</h4>
        <div className="summaries-grid">
          {book.memberSummaries.map((member, index) => (
            <div key={index} className="member-summary">
              <div className="member-name">{member.memberName}</div>
              <p className="member-text">{member.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Book
