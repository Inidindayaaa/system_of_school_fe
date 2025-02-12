import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Components/NavbarStudents.css";

const NavbarStudent = ({ user }) => {
  const navigate = useNavigate();

  const handleProfile = (e) => {
    e.preventDefault();
    navigate(`/profile/students/${user.id}`, { state: { user } });
  };

  const handleLogout = () => {
    alert("Logged out!");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Brand / Logo */}
        <Link className="navbar-brand">Sekolah Bogor City</Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" onClick={(e) => handleProfile(e)}>
                Profile
              </Link>
            </li>
          </ul>

          {/* User Info & Logout Button */}
          <div className="d-flex align-items-center">
            <button className="btn btn-outline-light" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarStudent;
