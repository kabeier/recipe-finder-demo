import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

// The parent (HomePage) owns the state. This component shows it and reports changes back up.
function SearchForm({ query, setQuery, handleSubmit }) {
  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      {/* InputGroup: the text box and the button joined into one bar. */}
      <InputGroup>
        {/* A controlled input: value comes from state, and every keystroke updates the state. */}
        <Form.Control
          placeholder="Search for a meal, e.g. chicken"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        {/* type="submit" makes this button (and pressing Enter) submit the form. */}
        <Button type="submit">Search</Button>
      </InputGroup>
    </Form>
  )
}

export default SearchForm
