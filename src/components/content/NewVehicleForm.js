import { useRef } from "react";

function NewVehicleForm({ onAddVehicle }) {

  const imageInputRef = useRef();
  const yearInputRef = useRef();
  const makeInputRef = useRef();
  const modelInputRef = useRef();
  const priceInputRef = useRef();
  const detailsInputRef = useRef();
  const availbleInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredImage = imageInputRef.current.value;
    const enteredYear = yearInputRef.current.value;
    const enteredMake = makeInputRef.current.value;
    const enteredModel = modelInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredDetails = detailsInputRef.current.value;
    const isAvailable = availbleInputRef.current.value;

    const vehicleData = {
      image: enteredImage,
      year: enteredYear,
      make: enteredMake,
      model: enteredModel,
      price: enteredPrice,
      details: enteredDetails,
      isAvailable: isAvailable,
    };
    onAddVehicle(vehicleData);
  }

  return (
      <form onSubmit={submitHandler}>
          <div>
          <label htmlFor="availability">Is available:</label>
<select id="availability" name="availability" ref={availbleInputRef}>
  <option value="true">True</option>
  <option value="false">False</option>
</select>
          </div>
      <div>
          <label htmlFor="image">Vehicle Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div>
          <label htmlFor="year">Vehicle Year</label>
          <input type="number" required id="year" ref={yearInputRef} />
        </div>
        <div>
          <label htmlFor="make">Vehicle Make</label>
          <input type="text" required id="make" ref={makeInputRef} />
        </div>
        <div>
          <label htmlFor="model">Vehicle Model</label>
          <input type="text" required id="model" ref={modelInputRef} />
        </div>
        <div>
          <label htmlFor="price">Vehicle Price</label>
          <input type="text" required id="price" ref={priceInputRef} />
        </div>
        <div>
          <label htmlFor="details">Details</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={detailsInputRef}
          ></textarea>
        </div>
        <div>
          <button>Add Vehicle</button>
        </div>
      </form>
  );
}

export default NewVehicleForm;
