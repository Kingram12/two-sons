function Vehicle({ id, image, year, make, model, price, details }) {
  return (
    <li>

        <div>
          <img src={image} alt={model} />
        </div>
        <div>
          <h3>{(year, make, model)}</h3>
          <p>{price}</p>
          <p>{details}</p>
        </div>

    </li>
  );
}

export default Vehicle;
