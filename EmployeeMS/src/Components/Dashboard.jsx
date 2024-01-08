import React from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";

const Dashboard = () => {
  const anvigate = useNavigate()
  axios.defaults.withCredentials = true
  const handleLogout = () => {
    axios.get('http://localhost:3000/auth/logout')
      .then(result => {
        if (result.data.Status) {
          // localStorage.removeItem("valid")
          anvigate('/')
        }
      })
  }
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 navbg">
          <Link 
          to="/dashboard"
          >
          <div className="text-center pt-2 text-white">
            <img src="Images/EMS.png" alt="LOGO" className="logo_image" />
          </div>
          </Link>
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          
            <Link
              to="/dashboard"
              className=" align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
            >
              <div className="fs-5 fw-bolder d-none d-sm-inline">
                Company Name
                <li className=" list-group-item disabled fs-6 fw-lighter">Company Code: abcdfjsn</li>
              </div>

            </Link>
            <ul
              className="nav flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              
            >
              <li className="w-100">
                <Link
                  to="/dashboard"
                  className='nav-link text-white px-0 align-middle'
                  
                >
                  <i className="fs-4 bi-speedometer2 ms-1"></i>
                  <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                </Link>
              </li>
              <li className="w-100">
                <NavLink
                  // to="/dashboard/employee"
                  to="/dashboard/employeemenu"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-people ms-1"></i>
                  <span className="ms-2 d-none d-sm-inline">
                    Manage Employees
                  </span>
                </NavLink>
              </li>
              <li className="w-100">
                <NavLink
                  to="/dashboard/category"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-columns ms-1"></i>
                  <span className="ms-2 d-none d-sm-inline">Category</span>
                </NavLink>
              </li>
              {/* <li className="w-100">
                <NavLink
                  to="/dashboard/profile"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-person ms-1"></i>
                  <span className="ms-2 d-none d-sm-inline">Profile</span>
                </NavLink>
              </li> */}
              <li className="w-100">
                <NavLink
                  to="/dashboard/attendence"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-fingerprint ms-1"></i>
                  <span className="ms-2 d-none d-sm-inline">Attendance</span>
                </NavLink>
              </li>
              <li className="w-100">
                <NavLink
                  to="/dashboard/report"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-file-earmark-bar-graph ms-1"></i>
                  <span className="ms-2 d-none d-sm-inline">Report</span>
                </NavLink>
              </li>
              <li className="w-100">
                <NavLink
                  to="/dashboard/notification"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-bell ms-1"></i>
                  <span className="ms-2 d-none d-sm-inline">Notification</span>
                </NavLink>
              </li>
              <li className="w-100">
                <NavLink
                  to="/dashboard/calculate-salary"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-currency-rupee ms-1"></i>
                  <span className="ms-2 d-none d-sm-inline">Calculate Salary</span>
                </NavLink>
              </li>
              <li className="w-100">
                <NavLink
                  to="/dashboard/profile"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-credit-card ms-1"></i>
                  <span className="ms-2 d-none d-sm-inline">Add Payment</span>
                </NavLink>
              </li>
              <li className="w-100">
                <NavLink
                  to="/dashboard/profile"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-cash ms-1"></i>
                  <span className="ms-2 d-none d-sm-inline">Add Payment</span>
                </NavLink>
              </li>
              <li className="w-100">
                <NavLink
                  to="/dashboard/profile"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-crosshair ms-1"></i>
                  <span className="ms-2 d-none d-sm-inline">Live Location</span>
                </NavLink>
              </li>
              <li className="w-100">
                <NavLink
                  to="/dashboard/profile"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-journal ms-1"></i>
                  <span className="ms-2 d-none d-sm-inline">Document</span>
                </NavLink>
              </li>
              <li className="w-100">
                <NavLink
                  to="/dashboard/profile"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-gear ms-1"></i>
                  <span className="ms-2 d-none d-sm-inline">Settings</span>
                </NavLink>
              </li>
              <li className="w-100">
                <NavLink
                  to="/dashboard/profile"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-question-circle ms-1"></i>
                  <span className="ms-2 d-none d-sm-inline">Contact Us</span>
                </NavLink>
              </li>
              
              <li className="w-100" onClick={handleLogout}>
                <Link
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-power ms-1"></i>
                  <span className="ms-2 d-none d-sm-inline">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0 m-0">
          
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;