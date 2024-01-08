import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const EmployeeMenu = () => {

  return (
    <div className='p-0 m-0'>
      <div className="p-2 d-flex justify-content-center shadow">
        <h4>Manage Emoployee</h4>
      </div>
      <div className="w-full container-fluid">
        <ul className="nav nav-underline d-flex justify-content-between flex-nowrap border-bottom">
          <li className="nav-item">
            <Link to="/dashboard/employee"
              className="nav-link text-dark active" aria-current="page">Employee Details</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Attendence Details</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Bank Details</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Salary Details</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Leave Balance & Policy</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Penalty & Overtime</a>
          </li>
        </ul>
      </div>
      <div className='emp-menu'>
      <div className='d-flex  justify-content-center container h-100'>
        <div >
            <img src='Images/emp-bg.png' alt="IMG" />
          </div>
      </div>
      <div className='d-flex justify-content-center fs-4 fw-semibold'>
        <div >
            <p>Add your Staff</p>
          </div>
      </div>
      <div className='d-flex justify-content-center fs-4 fw-lighter'>
        <div >
            <p>Add your staff to get started.</p>
          </div>
      </div>
      <div className='d-flex  justify-content-center p-3'>
        <div>
        <div className='col'>
          <Link to="/dashboard/add_employee" className="btn btn-success mx-2">
            Add Employee
          </Link>
          <Link to="#" className="btn btn-success">
            Add Multiple Employee
          </Link>
        </div>
        </div>
      </div>
      </div>


    </div>
  )
}

export default EmployeeMenu