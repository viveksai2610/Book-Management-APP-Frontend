import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import AddEditBooks from './components/AddEditBooks'
import DeleteBook from './components/DeleteBook'
import BooksList from './components/BooksList'
import BookDetails from './components/BookDetails'
import DeleteBookDetails from './components/DeleteBookDetails'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={BooksList} />
      <Route exact path="/add-edit-books" component={AddEditBooks} />
      <Route exact path="/deleteBook" component={DeleteBook} />
      <Route exact path="/bookDetails/:id" component={BookDetails} />
      <Route
        exact
        path="/deleteBookDetails/:id"
        component={DeleteBookDetails}
      />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
