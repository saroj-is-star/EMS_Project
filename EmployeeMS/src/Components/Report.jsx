import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Report = () => {

    const [date, setDate] = useState()

    const [toggle, setToggle] = useState(1)
    function updateToggle(id) {
        setToggle(id)
    }

    return (
        <div className='container h-100' id='attendence-bg'>
            <div className='row'>
                <div className='col'>
                    <h3 className='ms-5 pt-3'><strong>Company Reports</strong></h3>
                </div>
            </div>
            <div className='ms-5 me-3 mb-4'>
                <div className="container w-full bg-white rounded-0 row">
                    <div className='col border-bottom'>
                        <ul className="nav nav-underline d-flex justify-content-start flex-nowrap  mt-1">
                            <li className="nav-item" onClick={() => updateToggle(1)}>
                                <div className={toggle === 1 ? "color-y" : "color-n"}>
                                    <p className="nav-link text-dark fw-semibold " role='button'>Attendance</p>
                                </div>
                            </li>
                            <li className="nav-item" onClick={() => updateToggle(2)}>
                                <div className={toggle === 2 ? "color-y" : "color-n"}>
                                <p className="nav-link text-dark fw-semibold " role='button'>Payment</p>
                                </div>
                            </li>
                            <li className="nav-item" onClick={() => updateToggle(3)}>
                                <div className={toggle === 3 ? "color-y" : "color-n"}>
                                <p className="nav-link text-dark fw-semibold " role='button'>Notes</p>
                                </div>
                            </li>
                            <li className="nav-item" onClick={() => updateToggle(4)}>
                                <div className={toggle === 4 ? "color-y" : "color-n"}>
                                <p className="nav-link text-dark fw-semibold " role='button'>Employee List</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Attendance container start */}
                <div className={toggle === 1 ? "show-tab-container" : "tab-container"}>
                    <div className='container w-full bg-white rounded-0 row pt-3'>
                        <div className='col'>
                            <span className='me-2'>
                                <label className='me-2 '>Report Type</label><br />
                                <select className="bg-white rounded-1 border-1" >
                                    <option selected>Attendance Summary Report</option>
                                    <option value="1">Deatailed Attendance Report</option>
                                    <option value="2">Late Arrival Report</option>
                                    <option value="3">Leave Report</option>
                                    <option value="3">Over Time Report</option>
                                </select>
                            </span>
                        </div>
                        <div className='col'>
                            <span className='me-2'>
                                <label className='me-2'>Select Branch</label><br />
                                <select className="bg-white rounded-1 border-1" >
                                    <option selected>All Branches</option>
                                    <option value="1">One company</option>
                                    <option value="2">Two company</option>
                                    <option value="3">Three company</option>
                                </select>
                            </span>
                        </div>
                        <div className='col'>
                            <span className='me-2'>
                                <label className='me-2'>Select Department</label><br />
                                <select className="bg-white rounded-1 border-1" >
                                    <option selected>All Deapartment</option>
                                    <option value="1">One company</option>
                                    <option value="2">Two company</option>
                                </select>
                            </span>
                        </div>
                        <div className='col'>
                            <span>
                                <label className='me-2'>Date</label><br />
                                <input type="date" className='rounded-1 border-1' onChange={e => setDate(e.target.value)} />
                            </span>
                        </div>
                        <div className='col'>
                            <span className='me-2'>
                                <label className='me-2'>Format</label><br />
                                <select className="bg-white rounded-1 border-1" >
                                    <option selected>XLSX</option>
                                    <option value="1">PDF</option>
                                </select>
                            </span>
                        </div>
                        <div className='mt-5'>
                            <button type="button" class="btn btn-primary btn rounded-1">Generate Report</button>
                        </div>
                        <div className='row text-secondary fs-6'>
                            <p className='fs-6 fw-lighter'>
                                Some reports might take time to generate. Once these are done, you can download all the reports generated from the list below.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Attendance Ends */}

                {/* Payment container start */}
                <div className={toggle === 2 ? "show-tab-container" : "tab-container"}>
                    <div className=' container w-full bg-white rounded-0 row pt-3'>
                        <div className='col'>
                            <span className='me-2'>
                                <label className='me-2 '>Report Type</label><br />
                                <select className="bg-white rounded-1 border-1" >
                                    <option selected>Salary Summary Report</option>
                                    <option value="1">Salary Deatailed Report</option>
                                    <option value="2">PF Chalan Report</option>
                                    <option value="3">Loan Report</option>
                                    <option value="3">TDS Summary Report</option>
                                    <option value="3">Consolidated Report</option>
                                </select>
                            </span>
                        </div>
                        <div className='col'>
                            <span className='me-2'>
                                <label className='me-2'>Select Branch</label><br />
                                <select className="bg-white rounded-1 border-1" >
                                    <option selected>All Branches</option>
                                    <option value="1">One company</option>
                                    <option value="2">Two company</option>
                                    <option value="3">Three company</option>
                                </select>
                            </span>
                        </div>
                        <div className='col'>
                            <span className='me-2'>
                                <label className='me-2'>Select Department</label><br />
                                <select className="bg-white rounded-1 border-1" >
                                    <option selected>All Deapartment</option>
                                    <option value="1">One company</option>
                                    <option value="2">Two company</option>
                                </select>
                            </span>
                        </div>
                        <div className='col'>
                            <span>
                                <label className='me-2'>Date</label><br />
                                <input type="date" className='rounded-1 border-1' onChange={e => setDate(e.target.value)} />
                            </span>
                        </div>
                        <div className='col'>
                            <span className='me-2'>
                                <label className='me-2'>Format</label><br />
                                <select className="bg-white rounded-1 border-1" >
                                    <option selected>XLSX</option>
                                    <option value="1">PDF</option>
                                </select>
                            </span>
                        </div>
                        <div className='mt-5'>
                            <button type="button" class="btn btn-primary btn rounded-1">Generate Report</button>
                        </div>
                        <div className='row text-secondary'>
                            <p className='fs-6 fw-lighter'>
                                Some reports might take time to generate. Once these are done, you can download all the reports generated from the list below.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Payment Ends */}

                {/* Notes container start */}
                <div className={toggle === 3 ? "show-tab-container" : "tab-container"}>
                    <div className=' container w-full bg-white rounded-0 row pt-3'>
                        <div className='col'>
                            <span className='me-2'>
                                <label className='me-2 '>Report Type</label><br />
                                <select className="bg-white rounded-1 border-1" >
                                    <option selected>Notes Report</option>
                                    <option value="1">Report</option>
                                </select>
                            </span>
                        </div>
                        <div className='col'>
                            <span className='me-2'>
                                <label className='me-2'>Select Branch</label><br />
                                <select className="bg-white rounded-1 border-1" >
                                    <option selected>All Branches</option>
                                    <option value="1">One company</option>
                                    <option value="2">Two company</option>
                                    <option value="3">Three company</option>
                                </select>
                            </span>
                        </div>
                        <div className='col'>
                            <span className='me-2'>
                                <label className='me-2'>Select Department</label><br />
                                <select className="bg-white rounded-1 border-1" >
                                    <option selected>All Deapartment</option>
                                    <option value="1">One company</option>
                                    <option value="2">Two company</option>
                                </select>
                            </span>
                        </div>
                        <div className='col'>
                            <span>
                                <label className='me-2'>Date</label><br />
                                <input type="date" className='rounded-1 border-1' onChange={e => setDate(e.target.value)} />
                            </span>
                        </div>
                        <div className='col'>
                            <span className='me-2'>
                                <label className='me-2'>Format</label><br />
                                <select className="bg-white rounded-1 border-1" >
                                    <option selected>XLSX</option>
                                    <option value="1">PDF</option>
                                </select>
                            </span>
                        </div>
                        <div className='mt-5'>
                            <button type="button" class="btn btn-primary btn rounded-1">Generate Report</button>
                        </div>
                        <div className='row text-secondary'>
                            <p className='fs-6 fw-lighter'>
                                Some reports might take time to generate. Once these are done, you can download all the reports generated from the list below.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Notes Ends */}

                {/* EmployeeList container start */}
                <div className={toggle === 4 ? "show-tab-container" : "tab-container"}>
                    <div className=' container w-full bg-white rounded-0 row pt-3'>
                        <div className='col'>
                            <span className='me-2'>
                                <label className='me-2 '>Report Type</label><br />
                                <select className="bg-white rounded-1 border-1" >
                                    <option selected>Attendance Summary Report</option>
                                    <option value="1">Deatailed Attendance Report</option>
                                    <option value="2">Late Arrival Report</option>
                                    <option value="3">Leave Report</option>
                                    <option value="3">Over Time Report</option>
                                </select>
                            </span>
                        </div>
                        <div className='col'>
                            <span className='me-2'>
                                <label className='me-2'>Select Branch</label><br />
                                <select className="bg-white rounded-1 border-1" >
                                    <option selected>All Branches</option>
                                    <option value="1">One company</option>
                                    <option value="2">Two company</option>
                                    <option value="3">Three company</option>
                                </select>
                            </span>
                        </div>
                        <div className='col'>
                            <span className='me-2'>
                                <label className='me-2'>Select Department</label><br />
                                <select className="bg-white rounded-1 border-1" >
                                    <option selected>All Deapartment</option>
                                    <option value="1">One company</option>
                                    <option value="2">Two company</option>
                                </select>
                            </span>
                        </div>

                        <div className='col'>
                            <span className='me-2'>
                                <label className='me-2'>Format</label><br />
                                <select className="bg-white rounded-1 border-1" >
                                    <option selected>CSV</option>
                                    <option value="1">PDF</option>
                                </select>
                            </span>
                        </div>
                        <div className='mt-5'>
                            <button type="button" class="btn btn-primary btn rounded-1">Generate Report</button>
                        </div>
                        <div className='row text-secondary'>
                            <p className='fs-6 fw-lighter'>
                                Some reports might take time to generate. Once these are done, you can download all the reports generated from the list below.
                            </p>
                        </div>
                    </div>
                </div>
                {/* EmployeeList Ends */}

            </div>
            <div className='ms-5 me-3'>
                <div className="container w-full bg-white rounded-0 row border-bottom">
                    <div className='col d-flex justify-content-between align-content-center mt-2'>
                        <div >
                            <p className='pt-1'>Recent Reports</p>
                        </div>
                        <div>
                            <button type="button" class="btn btn-primary btn rounded-1"><i class="bi bi-arrow-repeat"></i> Refersh</button>
                        </div>
                    </div>
                </div>
                <div className='container w-full bg-white rounded-0 row'>
                    <div className='col mt-3 align-content-center'>
                        <table className="table table-bordered">
                            <thead >
                                <tr>
                                    <th class="fw-medium">REPORT TYPE</th>
                                    <th class="fw-medium">Branch</th>
                                    <th class="fw-medium">MONTH</th>
                                    <th class="fw-medium">FORMAT</th>
                                    <th class="fw-medium">GENERATED ON</th>
                                    <th class="fw-medium">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="fw-light">Daily Attendance Report</td>
                                    <td class="fw-light">All Branches</td>
                                    <td class="fw-light">Jan 2024</td>
                                    <td class="fw-light">XLSX</td>
                                    <td class="fw-light">02-01-2024</td>
                                    <td>
                                        <Link to='#' className='link-underline-light fw-light'>
                                            Download
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Report