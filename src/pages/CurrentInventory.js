import AvailableList from '../components/content/AvailableList';

const cars = [
    {
        id: 1,
        image:'https://images.unsplash.com/photo-1536883415338-0ee5b3de867d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGNsYXNzaWMlMjBjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        year: 1965,
        make: 'Ford', 
        model: 'Mustang',
        price: 25000,
        details: 'Additional info'
    },
    {
        id: 1,
        image:'https://images.unsplash.com/photo-1461638023147-7d732b807d9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
        year: 1987,
        make: 'Ford', 
        model: 'A',
        price: 25000,
        details: 'Additional info'
    },
]

function CurrentInventory() {


    return <div><AvailableList cars={cars}/></div>
}

export default CurrentInventory;