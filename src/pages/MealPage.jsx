import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Badge from 'react-bootstrap/Badge'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

// The API has no ingredients list. It has 20 numbered fields:
// strIngredient1 ... strIngredient20 and strMeasure1 ... strMeasure20, and the unused ones are "" or null.
// This turns them into a normal array like ["3/4 cup soy sauce", "1/2 cup water", ...].
function getIngredients(meal) {
  const ingredients = []
  for (let i = 1; i <= 20; i++) {
    const name = meal[`strIngredient${i}`]
    const measure = meal[`strMeasure${i}`]
    // "" and null are falsy, so the unused fields are skipped.
    if (name) ingredients.push(`${measure} ${name}`)
  }
  return ingredients
}

function MealPage() {
  // The :id from the route path 'meal/:id'. On /meal/52772, id is "52772".
  const { id } = useParams()
  // null until the API answers.
  const [meal, setMeal] = useState(null)

  // Runs after the page shows, and again whenever id changes.
  useEffect(() => {
    // If id changes (or the page closes) before the answer arrives, ignore that old answer.
    let ignore = false
    // lookup.php?i= gets one meal by its id. The answer is still an array: meals[0] is our meal.
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then((response) => {
      if (!ignore) setMeal(response.data.meals[0])
    })
    // The cleanup function: React runs it before the next run of this effect, and when the page closes.
    return () => {
      ignore = true
    }
  }, [id])

  // The first render happens before the API answers, so show a spinner until then.
  if (!meal) return <Spinner animation="border" />

  return (
    // Two columns from medium screens up: the photo (5 of 12 columns) and the recipe (7 of 12).
    <Row className="g-4">
      <Col md={5}>
        {/* fluid: shrinks to fit its column. rounded: rounded corners. */}
        <Image src={meal.strMealThumb} alt={meal.strMeal} fluid rounded />
      </Col>
      <Col md={7}>
        <h1>{meal.strMeal}</h1>
        <p>
          <Badge bg="secondary">{meal.strCategory}</Badge> <Badge bg="info">{meal.strArea}</Badge>
        </p>

        <h2 className="h4">Ingredients</h2>
        <ListGroup className="mb-4">
          {getIngredients(meal).map((ingredient, index) => (
            // The list never changes order, so its position is a safe key here.
            <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
          ))}
        </ListGroup>

        <h2 className="h4">Instructions</h2>
        {/* The API's text has line breaks in it. pre-line shows them, instead of one long paragraph. */}
        <p style={{ whiteSpace: 'pre-line' }}>{meal.strInstructions}</p>

        <Button as={Link} to="/" variant="secondary">
          Back to search
        </Button>
      </Col>
    </Row>
  )
}

export default MealPage
