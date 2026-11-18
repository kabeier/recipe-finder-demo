import { Link } from 'react-router'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function NavBar() {
  return (
    // bg="dark" + data-bs-theme="dark": a dark bar with light text.
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        {/* as={Link}: Bootstrap's look, but React Router's Link (changes page with no reload). */}
        <Navbar.Brand as={Link} to="/">
          Recipe Finder
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default NavBar
