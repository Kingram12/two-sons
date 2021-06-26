import VehicleList from '../components/content/VehicleList';

const soldCars = [
    {
        id: 1,
        image:'',
        year: 1975,
        make: 'Chevrolet', 
        model: 'Corvette',
        price: 18000,
        details: 'Sold Additional info 3',
        available: false,
    },
    {
        id: 1,
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
    return <div><VehicleList cars={soldCars}/></div>
}

export default PreviouslySold;