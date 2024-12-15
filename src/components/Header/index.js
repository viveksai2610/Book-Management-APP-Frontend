import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <h1 className="blog-title"> Book Management</h1>
      <ul className="nav-menu">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/add-edit-books">
            Add/Edit Book
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/deleteBook">
            Delete Book
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
