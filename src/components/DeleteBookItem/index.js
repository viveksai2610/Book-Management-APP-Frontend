import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import {Link} from 'react-router-dom'
import {MdDelete} from 'react-icons/md'
import './index.css'

const DeleteBookItem = props => {
  const onClickDelete = async () => {
    const {match} = props
    const {params} = match
    const {id} = params

    const options = {
      method: 'DELETE',
    }
    await fetch(
      `https://book-management-app-backend.onrender.com/books/${id}/`,
      options,
    )
  }

  const {bookDetails} = props
  const {bookID, title, pages, publishedDate} = bookDetails
  return (
    <div className="delete-book-item-container">
      <div>
        <div className="item-info">
          <p className="published-date">{publishedDate}</p>
          <p className="title">{title}</p>
          <p className="pages">
            <span className="span">Pages :</span> {pages}
          </p>
        </div>
        <Link to={`deleteBookDetails/${bookID}`} className="book-item-link">
          View details
        </Link>
      </div>
      <div>
        <Popup
          modal
          trigger={
            <button type="button" className="delete-btn">
              <MdDelete className="delete-icon" />
            </button>
          }
        >
          {close => (
            <div className="popup-container">
              <p>Do you want to delete the book ?</p>
              <div>
                <button
                  type="button"
                  className="cancel-button"
                  onClick={() => close()}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="confirm-btn"
                  onClick={onClickDelete}
                >
                  Confirm
                </button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  )
}

export default DeleteBookItem
