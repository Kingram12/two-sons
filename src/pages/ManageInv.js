import { useHistory } from 'react-router-dom';
import NewVehicleForm from '../components/content/NewVehicleForm';

function ManageInv() {
    const history = useHistory();
    function addVehicleHandler(vehicleData) {
        fetch('https://two-sons-default-rtdb.firebaseio.com/inventory.json', {
            method: 'POST',
            body: JSON.stringify(vehicleData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(()=> {

        }).then(() => {
            history.replace('/');
        });
    }

    return <section>
        <h1>Add New Vehicle</h1>
        <NewVehicleForm onAddVehicle={addVehicleHandler}/>
    </section>;

}

export default ManageInv;