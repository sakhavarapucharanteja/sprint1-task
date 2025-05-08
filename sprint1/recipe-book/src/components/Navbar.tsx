import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => (
  <nav>
    <Link to="/">Home</Link> | <Link to="/add">Add Recipe</Link>
  </nav>
);

export default Navbar;
