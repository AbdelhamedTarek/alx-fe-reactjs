// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "10px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link
        to="/"
        style={{
          margin: "0 15px",
          color: "#fff",
          textDecoration: "none",
          fontSize: "18px",
        }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{
          margin: "0 15px",
          color: "#fff",
          textDecoration: "none",
          fontSize: "18px",
        }}
      >
        About
      </Link>
      <Link
        to="/services"
        style={{
          margin: "0 15px",
          color: "#fff",
          textDecoration: "none",
          fontSize: "18px",
        }}
      >
        Services
      </Link>
      <Link
        to="/contact"
        style={{
          margin: "0 15px",
          color: "#fff",
          textDecoration: "none",
          fontSize: "18px",
        }}
      >
        Contact
      </Link>
    </div>
  );
}

export default Navbar;
