import VehicleList from '../components/content/VehicleList';
import classes from './CurrentInventory.module.css'

const c = classes;

const cars = [
    {
        id: 1,
        image:'https://i.pinimg.com/originals/be/b5/8f/beb58f309e9ca6bb4bd3065ee5304a0f.jpg',
        year: 1965,
        make: 'Ford', 
        model: 'Mustang',
        price: 25000,
        details: 'Additional info',
        available: true,
    },
    {
        id: 1,
        image:'https://static.seattletimes.com/wp-content/uploads/2012/08/2018917565-780x0.jpg',
        year: 1987,
        make: 'Ford', 
        model: 'A',
        price: 25000,
        details: 'Additional info 2',
        available: true,
    },
    {
        id: 1,
        image:'https://i.pinimg.com/originals/be/b5/8f/beb58f309e9ca6bb4bd3065ee5304a0f.jpg',
        year: 1965,
        make: 'Ford', 
        model: 'Mustang',
        price: 25000,
        details: 'Additional info',
        available: true,
    },
    {
        id: 1,
        image:'https://static.seattletimes.com/wp-content/uploads/2012/08/2018917565-780x0.jpg',
        year: 1987,
        make: 'Ford', 
        model: 'A',
        price: 25000,
        details: 'Additional info 2',
        available: true,
    },
]

function CurrentInventory() {


    return <div className={c.list}><VehicleList cars={cars}/></div>
}

export default CurrentInventory;