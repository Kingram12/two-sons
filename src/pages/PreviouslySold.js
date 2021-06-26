import VehicleList from '../components/content/VehicleList';
import classes from './PreviouslySold.module.css'

const c = classes;

const soldCars = [
    {
        id: 5,
        image:'',
        year: 1975,
        make: 'Chevrolet', 
        model: 'Corvette',
        price: 18000,
        details: 'Sold Additional info 3',
        available: false,
    },
    {
        id: 6,
        image:'',
        year: 1987,
        make: 'Ford', 
        model: 'A',
        price: 25000,
        details: 'Sold Additional info 4',
        available: false,
    },
    {
        id: 7,
        image:'',
        year: 1975,
        make: 'Chevrolet', 
        model: 'Corvette',
        price: 18000,
        details: 'Sold Additional info 3',
        available: false,
    },
    {
        id: 8,
        image:'',
        year: 1987,
        make: 'Ford', 
        model: 'A',
        price: 25000,
        details: 'Sold Additional info 4',
        available: false,
    },
]

function PreviouslySold() {
    return <div className={c.list}><VehicleList cars={soldCars}/></div>
}

export default PreviouslySold;