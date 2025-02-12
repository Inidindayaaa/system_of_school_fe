import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./SideNavbar.css";

export default function SideNavbar() {
  const location = useLocation(); // Untuk menandai menu yang aktif
  const navigate = useNavigate();
  const handleLogout = () => {
    const isConfirmed = window.confirm("Apakah Anda yakin ingin Logout?");
    if (isConfirmed) {
      return navigate("/");
    } else {
      return navigate("/dashboard");
    }
  };

  const sideNav = [
    { name: "Students", to: "/students" },
    { name: "Course", to: "/course" },
    { name: "Teachers", to: "/teachers" },
  ];

  // return (
  //   <div className="sidebar">
  //     <ul className="sidebar-menu">
  //       {sideNav.map((el, i) => (
  //         <li
  //           key={i}
  //           className={
  //             location.pathname === el.to.toLowerCase() ? "active" : ""
  //           }
  //         >
  //           <Link to={el.to.toLowerCase()} className="sidebar-link">
  //             {el.name}
  //           </Link>
  //         </li>
  //       ))}
  //     </ul>
  //
  //   </div>
  // );
  // }

  return (
    <div class="col-2">
      <ul className="list-unstyled">
        {sideNav.map((el, i) => (
          <li
            key={i}
            className={
              location.pathname === el.to.toLowerCase() ? "active" : ""
            }
          >
            <Link to={el.to.toLowerCase()} className="text-decoration-none">
              {el.name}
            </Link>
            <br />
          </li>
        ))}
      </ul>
      {/* <button className="btn btn-secondary" onClick={() => navigate(-1)}>
        Back
      </button> */}

      <button className="btn btn-secondary" onClick={() => navigate(-1)}>
        <li className="nav-item" onClick={handleLogout}>
          <Link className="nav-link" to="/ ">
            Logout
          </Link>
        </li>
      </button>
      {/* <li className="nav-item" onClick={handleLogout}>
        <Link className="nav-link" to="/login">
          Logout
        </Link>
      </li> */}
    </div>
  );
}
