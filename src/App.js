import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import CurrentInventory from "./pages/CurrentInventory";
import PreviouslySold from "./pages/PreviouslySold";
import Reviews from "./pages/Reviews";
import ManageInv from "./pages/ManageInv";
import Layout from "./components/layout/Layout";
import SignUp from "./components/content/SignUp";
import Login from "./components/content/Login";
import ForgotPassword from './components/content/ForgotPassword'
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./components/contexts/AuthContext";
import { PrivateRoute } from "./components/content/PrivateRoute";
import UpdateProfile from "./components/content/UpdateProfile";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/current-inventory" component={CurrentInventory}/>
          <Route path="/previously-sold" component={PreviouslySold}/>
          <PrivateRoute exact path="/reviews" component={Reviews}/>
          <PrivateRoute path="/update-profile" component={UpdateProfile}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/login" component={Login}/>
          <Route path="/forgot-password" component={ForgotPassword}/>
          <Route path="/manage" component={ManageInv}/>
        </Switch>
      </Layout>
    </AuthProvider>
  );
}

export default App;
