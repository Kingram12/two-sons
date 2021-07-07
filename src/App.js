import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CurrentInventory from './pages/CurrentInventory';
import PreviouslySold from './pages/PreviouslySold';
import Reviews from './pages/Reviews';
import ManageInv from './pages/ManageInv';
import Layout from './components/layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase/app";

const firebaseConfig = {
};

firebase.initializeApp(firebaseConfig);

function App() {
  return (
<Layout>
      <Switch>
        <Route path="/" exact={true}><Home/></Route>
        <Route path="/current-inventory"><CurrentInventory/></Route>
        <Route path="/previously-sold"><PreviouslySold/></Route>
        <Route path="/reviews"><Reviews/></Route>
        <Route path="/manage"><ManageInv/></Route>
      </Switch>
</Layout>
  );
}

export default App;
