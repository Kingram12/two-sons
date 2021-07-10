import { Link,  } from "react-router-dom";
import classes from './MainNav.module.css'
// import { Button, Card, Alert } from 'react-bootstrap'
// import { useState } from 'react';
// import { useAuth } from '../contexts/AuthContext'


const c = classes;


export default function MainNav() {
  // const [error, setError] = useState("");
  // const { currentUser, logout } = useAuth();
  // const history = useHistory();

  // async function handleLogout(){
  //   setError('')

  //   try{
  //     await logout()
  //     history.push('/login')

  //   } catch {
  //     setError('Failed to log out.')
  //   }

  // }
 
  return (
    <header className={c.header}>
      <div className={c.logo}>Two Sons</div>
      <nav>
        <ul className={c.links}>
          <li className={c.link}>
            <Link to="/">Home</Link>
          </li>
          <li className={c.link}>
            <Link to="/current-inventory">Current Inventory</Link>
          </li>
          <li className={c.link}>
            <Link to="/previously-sold">Previously Sold</Link>
          </li>
          <li className={c.link}>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li className={c.link}>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li className={c.link}>
            <Link to="/login">Log In</Link>
          </li>
          {/* <Card className={c.profile}>
            <Card.Body>
              <h2>Profile</h2>
              { error && <Alert variant="danger">{error}</Alert>}
              <strong>Email:</strong>{currentUser.email}
              <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
            </Card.Body>
          </Card>
          <Button variant="link" onClick={handleLogout}>Log Out</Button> */}
        </ul>
      </nav>
    </header>

    
  );
}


//within login page have an admin option ??? 
