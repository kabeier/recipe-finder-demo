import { useState } from 'react'
import SearchForm from '../components/SearchForm'

function HomePage() {
  // What is typed in the search box.
  const [query, setQuery] = useState('')

  const handleSubmit = (event) => {
    // A form's default is to reload the whole page. We don't want that in React.
    event.preventDefault()
    console.log('searching for', query)
  }

  return (
    <>
      <h1 className="mb-3">Find a recipe</h1>
      <SearchForm query={query} setQuery={setQuery} handleSubmit={handleSubmit} />
    </>
  )
}

export default HomePage
