import Vehicle from "./Vehicle";
import classes from "./VehicleList.module.css";

const c = classes;

function VehicleList({cars}) {
  return (
    <ul className={c.list}>
      {cars.map((car) => (
        <Vehicle
          key={car.id}
          image={car.image}
          year={car.year}
          make={car.make}
          model={car.model}
          price={car.price}
          details={car.details}
          available={car.available}
        />
      ))}
    </ul>
  );
}

export default VehicleList;
