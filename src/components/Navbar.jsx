import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Job Listings</Link>
      <Link to="/admin">Admin Panel</Link>
    </nav>
  );
};

export default Navbar;