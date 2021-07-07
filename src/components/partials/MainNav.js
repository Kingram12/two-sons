import { Link } from "react-router-dom";
import classes from '../partials/MainNav.module.css';

const c = classes;

function MainNav() {
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
            <Link to="/manage">Admin</Link>
          </li>
        </ul>
      </nav>
    </header>

    
  );
}

export default MainNav;
