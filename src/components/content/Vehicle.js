import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import classes from './Vehicle.module.css';

const c = classes;

function Vehicle({ id, image, year, make, model, price, details }) {
  return (
    <Card className={c.vehicleCard}style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body className={c.cardBody}>
        <Card.Title>
        <h3>{year} {make} {model}</h3>
        </Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <Button variant="dark">See Details</Button>
      </Card.Body>
    </Card>
  );
}

export default Vehicle;
