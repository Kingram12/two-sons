import { Link } from "react-router-dom";

function MainNav() {
  return (
    <header>
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
