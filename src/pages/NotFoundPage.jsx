import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Back to search</Link>
    </>
  )
}

export default NotFoundPage
