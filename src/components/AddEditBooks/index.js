import {useState} from 'react'

import './index.css'

const AddEditBooks = () => {
  const [addBookStatus, setAddBookStatus] = useState('')
  const [bookID, setBookID] = useState('')
  const [title, setTitle] = useState('')
  const [authorID, setAuthorID] = useState('')
  const [genreID, setGenreID] = useState('')
  const [pages, setPages] = useState('')
  const [publishedDate, setPublishedDate] = useState('')

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeBookId = event => {
    setBookID(event.target.value)
  }

  const onChangeAuthorId = event => {
    setAuthorID(event.target.value)
  }

  const onChangeGenreId = event => {
    setGenreID(event.target.value)
  }

  const onChangePages = event => {
    setPages(event.target.value)
  }

  const onChangePublishedDate = event => {
    setPublishedDate(event.target.value)
  }

  const onAddBook = async () => {
    const newBook = {bookID, title, authorID, genreID, pages, publishedDate}

    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(newBook),
    }

    const response = await fetch(
      'https://book-management-app-backend.onrender.com/books/',
      options,
    )
    if (response.ok) {
      setAddBookStatus('Book Addedd Successfully')
    }
  }

  return (
    <div className="add-book-container">
      <p className="add-book-status">{addBookStatus}</p>
      <form className="form-container" onSubmit={onAddBook}>
        <input
          type="text"
          className="input"
          value={bookID}
          placeholder="Book ID"
          onChange={onChangeBookId}
        />
        <br />
        <input
          type="text"
          className="input"
          value={title}
          placeholder="Title"
          onChange={onChangeTitle}
        />
        <br />
        <input
          type="text"
          className="input"
          value={authorID}
          placeholder="Author ID"
          onChange={onChangeAuthorId}
        />
        <br />
        <input
          type="text"
          className="input"
          value={genreID}
          placeholder="Genre ID"
          onChange={onChangeGenreId}
        />
        <br />
        <input
          type="text"
          className="input"
          value={pages}
          placeholder="Number of Pages"
          onChange={onChangePages}
        />
        <br />
        <input
          type="text"
          className="input"
          value={publishedDate}
          placeholder="Published Date in YYYY-MM-DD"
          onChange={onChangePublishedDate}
        />
        <br />
        <button type="submit" className="submit-btn">
          Add
        </button>
      </form>
    </div>
  )
}

export default AddEditBooks
