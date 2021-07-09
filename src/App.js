import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import CurrentInventory from "./pages/CurrentInventory";
import PreviouslySold from "./pages/PreviouslySold";
import Reviews from "./pages/Reviews";
import ManageInv from "./pages/ManageInv";
import Layout from "./components/layout/Layout";
import SignUp from "./components/content/SignUp";
import Login from "./components/content/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./components/contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
    <Layout>

        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/current-inventory">
            <CurrentInventory />
          </Route>
          <Route path="/previously-sold">
            <PreviouslySold />
          </Route>
          <Route path="/reviews">
            <Reviews />
          </Route>
          <Route path="/signup">
            <SignUp/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/manage">
            <ManageInv />
          </Route>
        </Switch>
    </Layout>
    </AuthProvider>
  );
}

export default App;
