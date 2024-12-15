import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import {MdManageSearch} from 'react-icons/md'

import BookItem from '../BookItem'

import './index.css'

const BooksList = () => {
  const [searchInput, setSearchInput] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [booksList, setBookList] = useState([])

  const onChangeSearchInput = event => {
    setSearchInput(event.target.value.toLowerCase())
  }

  const onClickSearch = async () => {
    if (searchInput !== '' && booksList.length !== 0) {
      const searchResults = booksList.filter(eachBook =>
        eachBook.title.toLowerCase().includes(searchInput),
      )

      if (searchResults.length !== 0) {
        setBookList(searchResults)
      }
    }
    if (searchInput === '') {
      const response = await fetch(
        'https://book-management-app-backend.onrender.com/books/',
      )
      const data = await response.json()
      setBookList(data)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const getBooksData = async () => {
      const response = await fetch(
        'https://book-management-app-backend.onrender.com/books/',
      )
      const data = await response.json()
      setBookList(data)
      setIsLoading(false)
    }
    getBooksData()
  }, [])

  return (
    <div>
      <div className="search-container">
        <input
          type="search"
          className="input-search"
          placeholder="Search for books"
          value={searchInput}
          onChange={onChangeSearchInput}
        />
        <button type="button" className="search-btn" onClick={onClickSearch}>
          <MdManageSearch className="search-icon" />{' '}
        </button>
      </div>
      <div className="books-list-container">
        {isLoading ? (
          <div className="loader-container">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          booksList.map(eachBook => (
            <BookItem bookDetails={eachBook} key={eachBook.bookID} />
          ))
        )}
      </div>
    </div>
  )
}

export default BooksList
