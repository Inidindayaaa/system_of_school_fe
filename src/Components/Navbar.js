import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user || { id: null, name: "Guest" };

  const handleProfile = () => {
    if (!user.id) {
      alert("User data not found!");
      return;
    }
    navigate(`/dashboard/profile/students/${user.id}`, { state: { user } });
  };

  //  const navigate = useNavigate();

  // const handleLogout = () => {
  //   const isConfirmed = window.confirm("Apakah Anda yakin ingin Logout?");
  //   if (isConfirmed) {
  //     return navigate("/");
  //   } else {
  //     return navigate("/dashboard");
  //   }
  // };

  return (
    <>
      {!location.pathname.includes("login") && (
        // <nav
        //   id="nav"
        //   className="navbar navbar-expand-md"
        //   style={{ height: "60px", backgroundColor: "#C9DABF" }}
        // >
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 d-flex justify-content-between p-2">
            <li className="nav-item"></li>

            {/* <li className="nav-item" onClick={handleLogout}>
              <Link className="nav-link" to="/login">
                Logout
              </Link>
            </li> */}
          </ul>
        </div>
        // </nav>
      )}
    </>
  );
}
export default NavBar;
