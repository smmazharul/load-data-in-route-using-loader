import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
      <nav>
        <ul className="header">
          <li>
            <Link to="/">Home</Link>
          </li>
       
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>
    );
};

export default Header;