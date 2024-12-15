import {useState, useEffect} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

const BookDetails = props => {
  const [isLoading, setIsLoading] = useState(true)
  const [bookData, setBookData] = useState({})

  const onClickBack = () => {
    const {history} = props
    history.push('/')
  }

  useEffect(() => {
    const getBookDetails = async () => {
      const {match} = props
      const {params} = match
      const {id} = params
      const response = await fetch(
        `https://book-management-app-backend.onrender.com/books/${id}`,
      )
      const data = await response.json()
      if (response.ok) {
        setBookData(data)
        setIsLoading(false)
      }
    }
    getBookDetails()
  })
  const {title, name, pages, description, publishedDate} = bookData
  return (
    <div>
      {isLoading ? (
        <div className="loader-container">
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        </div>
      ) : (
        <div className="book-container">
          <h1 className="book-title">{title}</h1>
          <p>
            <span className="span">Genre : </span> {description}
          </p>
          <p>
            <span className="span">Author : </span> {name}
          </p>
          <p>
            <span className="span">Published Date : </span> {publishedDate}
          </p>
          <p>
            <span className="span">Number of pages: </span>
            {pages}
          </p>
          <button type="button" className="back-button" onClick={onClickBack}>
            Back
          </button>
        </div>
      )}
    </div>
  )
}

export default BookDetails
