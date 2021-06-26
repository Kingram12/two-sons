import Vehicle from "./Vehicle";

function VehicleList({cars}) {
  return (
    <ul>
      {cars.map((car) => (
        <Vehicle
          key={car.id}
          id={car.id}
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
