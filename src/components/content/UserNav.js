import classes from './UserNav.module.css';
import { Link } from "react-router-dom";


const c = classes;


export default function UserNav() {
  return (
        <ul className={c.profile}>
          <li className={c.link} >
            <Link to="/signup">Sign Up</Link>
          </li>
          <li className={c.link}>
            <Link to="/login">Log In</Link>
          </li>
        </ul>
  );
}