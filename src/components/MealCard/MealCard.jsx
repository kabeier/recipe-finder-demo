import { Link } from 'react-router'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

// One search result. `meal` is one object from the API's `meals` array.
function MealCard({ meal }) {
  return (
    // h-100: every card is as tall as its row, so the cards line up.
    <Card className="h-100">
      <Card.Img variant="top" src={meal.strMealThumb} alt={meal.strMeal} />
      <Card.Body>
        <Card.Title>{meal.strMeal}</Card.Title>
        <Card.Text className="text-muted">
          {meal.strArea} · {meal.strCategory}
        </Card.Text>
        {/* Goes to /meal/52772 (for example). The router shows MealPage for that address. */}
        <Button as={Link} to={`/meal/${meal.idMeal}`} variant="outline-primary">
          View recipe
        </Button>
      </Card.Body>
    </Card>
  )
}

export default MealCard
