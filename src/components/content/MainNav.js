import { Link,  } from "react-router-dom";
import classes from './MainNav.module.css'

const c = classes;


export default function MainNav() {
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
          </ul>
        </nav>
      </header>
    )
}