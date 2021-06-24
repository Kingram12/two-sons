import { Link } from "react-router-dom";
import classes from '../layout/MainNav.module.css';

const c = classes;

function MainNav() {
  return (
    <header className={c.header}>
      <div>Two Sons</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/current-inventory">Current Inventory</Link>
          </li>
          <li>
            <Link to="/previously-sold">Previously Sold</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
