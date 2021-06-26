import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Vehicle({ id, image, year, make, model, price, details }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>
        <h3>{year} {make} {model}</h3>
        </Card.Title>
        <Card.Text>
          <p>{price}</p>
          <p>{details}</p>
        </Card.Text>
        <Button variant="primary">See Details</Button>
      </Card.Body>
    </Card>
  );
}

export default Vehicle;
