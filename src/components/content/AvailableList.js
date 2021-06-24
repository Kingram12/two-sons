import Vehicle from "./Vehicle";

function AvailableList({ cars }) {
  return (
    <ul>
      {cars.map((car) => (
        <Vehicle
          key={car.id}
          id={car.id}
          image={car.image}
          year={car.title}
          make={car.make}
          model={car.model}
          price={car.price}
          details={car.details}
        />
      ))}
    </ul>
  );
}

export default AvailableList;
