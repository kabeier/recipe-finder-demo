import { useState } from 'react'
import { useOutletContext } from 'react-router'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SearchForm from '../components/SearchForm'
import MealCard from '../components/MealCard'

function HomePage() {
  // What is typed in the search box.
  const [query, setQuery] = useState('')
  // The search results: an array of meal objects from the API.
  // They come from App (through <Outlet context>), so they are still here after you press Back.
  const { meals, setMeals } = useOutletContext()

  // async, because we wait for the API to answer.
  const handleSubmit = async (event) => {
    // A form's default is to reload the whole page. We don't want that in React.
    event.preventDefault()
    // TheMealDB is free and needs no API key. search.php?s= searches meal names.
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    // axios puts the JSON body in response.data. The results are in its `meals` key.
    // When nothing matches, the API sends meals: null (not []), and null.map() would crash.
    // `|| []` swaps null for an empty array.
    setMeals(response.data.meals || [])
  }

  return (
    <>
      <h1 className="mb-3">Find a recipe</h1>
      <SearchForm query={query} setQuery={setQuery} handleSubmit={handleSubmit} />
      {/* Cards per row: 1 on phones (xs), 2 on small screens, 3 on medium, 4 on large.
          g-4 = the gap between cards. */}
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {meals.map((meal) => (
          // key: React needs a unique id on each item of a list. idMeal is the API's id.
          <Col key={meal.idMeal}>
            <MealCard meal={meal} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomePage
