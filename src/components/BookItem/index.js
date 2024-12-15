import {Link} from 'react-router-dom'
import './index.css'

const BookItem = props => {
  const {bookDetails} = props
  const {bookID, title, pages, publishedDate} = bookDetails
  return (
    <div className="book-item-container">
      <div className="item-info">
        <p className="published-date">{publishedDate}</p>
        <p className="title">{title}</p>
        <p className="pages">
          <span className="span">Pages :</span> {pages}
        </p>
      </div>
      <Link to={`bookDetails/${bookID}`} className="book-item-link">
        View details
      </Link>
    </div>
  )
}

export default BookItem
