import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: 400,
    margin: "0 1.8rem",
    fontFamily: "Inter, Arial, sans-serif",
    transition: "color 0.2s ease",
  };

  const navHover = {
    color: "#FFD166",
  };

  return (
    <header
      style={{
        backgroundColor: "#8C1D40", // ASU Maroon
        color: "white",
        padding: "0.8rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "Inter, Arial, sans-serif",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Left logo/title */}
      <div
        style={{
          fontWeight: 700,
          fontSize: "1.6rem",
          letterSpacing: "0.02em",
          fontFamily: "Georgia, serif",
        }}
      >
        Yan Lab
      </div>

      {/* Navigation links */}
      <nav style={{ display: "flex", alignItems: "center" }}>
        <Link to="/" style={navStyle} onMouseOver={(e) => (e.target.style.color = navHover.color)} onMouseOut={(e) => (e.target.style.color = "white")}>
          Research
        </Link>
        <Link to="/people" style={navStyle} onMouseOver={(e) => (e.target.style.color = navHover.color)} onMouseOut={(e) => (e.target.style.color = "white")}>
          People
        </Link>
        <Link to="/news" style={navStyle} onMouseOver={(e) => (e.target.style.color = navHover.color)} onMouseOut={(e) => (e.target.style.color = "white")}>
          News
        </Link>
        <Link to="/publications" style={navStyle} onMouseOver={(e) => (e.target.style.color = navHover.color)} onMouseOut={(e) => (e.target.style.color = "white")}>
          Publications
        </Link>
        <Link to="/resources" style={navStyle} onMouseOver={(e) => (e.target.style.color = navHover.color)} onMouseOut={(e) => (e.target.style.color = "white")}>
          Resources
        </Link>
        <Link to="/contact" style={navStyle} onMouseOver={(e) => (e.target.style.color = navHover.color)} onMouseOut={(e) => (e.target.style.color = "white")}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
