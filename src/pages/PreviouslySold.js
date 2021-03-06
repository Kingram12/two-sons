import VehicleList from '../components/content/VehicleList';
import classes from './PreviouslySold.module.css'
import { useState, useEffect } from "react";

const c = classes;

function PreviouslySold() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedCars, setLoadedCars] = useState([]);
  
    useEffect(() => {
      setIsLoading(true);
        fetch('https://two-sons-default-rtdb.firebaseio.com/inventory/pastInventory.json')
        .then((response) => {
        return response.json();
        })
        .then((data) => {
          const inventory = [];
          for (const key in data) {
            const vehicle = {
              id: key,
              ...data[key],
            };
            inventory.push(vehicle);
          }
          setIsLoading(false);
          setLoadedCars(inventory);
        });
    }, []);
  
    if (isLoading) {
      return (
        <section>
          <p>Loading...</p>
        </section>
      );
    }
    return (
      <div className={c.list}>
        <VehicleList cars={loadedCars} />
      </div>
  
    );
}

export default PreviouslySold;