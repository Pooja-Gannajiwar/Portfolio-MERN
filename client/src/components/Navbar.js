import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>EduFolio</h2>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/projects" style={styles.link}>Projects</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#1f2937",
    color: "white"
  },
  logo: {
    margin: 0
  },
  link: {
    color: "white",
    marginLeft: "20px",
    textDecoration: "none",
    fontSize: "16px"
  }
};

export default Navbar;
