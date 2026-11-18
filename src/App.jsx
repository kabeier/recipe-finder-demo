import { Outlet } from 'react-router'
import Container from 'react-bootstrap/Container'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <NavBar />
      {/* Container: Bootstrap's centered, padded page column. py-4 = padding top and bottom. */}
      <Container className="py-4">
        {/* The current page (HomePage, MealPage, ...) shows here. */}
        <Outlet />
      </Container>
    </>
  )
}

export default App
