import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const EmployeeMenu = () => {

  return (
    <div className='col p-0 m-0'>
      <div className="p-2 d-flex justify-content-center shadow">
        <h4>Manage Emoployee</h4>
      </div>
      <div className="w-full container-fluid">
        <ul className="nav nav-underline d-flex justify-content-between flex-nowrap">
          <li className="nav-item">
            <Link to="/dashboard/employee"
              className="nav-link text-dark" aria-current="page">Employee Details</Link>
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

    </div>
  )
}

export default EmployeeMenu