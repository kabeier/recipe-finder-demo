import { useState } from 'react'
import { Outlet } from 'react-router'
import Container from 'react-bootstrap/Container'
import NavBar from './components/NavBar'

function App() {
  // The search results live here now, not in HomePage.
  // App stays on screen on every page, so this state survives a trip to a MealPage and back.
  const [meals, setMeals] = useState([])

  return (
    <>
      <NavBar />
      {/* Container: Bootstrap's centered, padded page column. py-4 = padding top and bottom. */}
      <Container className="py-4">
        {/* The current page (HomePage, MealPage, ...) shows here.
            context: hands meals and setMeals to that page (it reads them with useOutletContext). */}
        <Outlet context={{ meals, setMeals }} />
      </Container>
    </>
  )
}

export default App
