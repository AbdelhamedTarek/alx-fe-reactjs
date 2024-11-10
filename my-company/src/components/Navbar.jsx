import { Link } from "react-router-dom";

function Navbar() {
  const navbarStyle = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 0",
    textAlign: "center",
  };

  const linkStyle = {
    margin: "0 15px",
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
  };

  return (
    <div style={navbarStyle}>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/about" style={linkStyle}>
        About
      </Link>
      <Link to="/services" style={linkStyle}>
        Services
      </Link>
      <Link to="/contact" style={linkStyle}>
        Contact
      </Link>
    </div>
  );
}

export default Navbar;
