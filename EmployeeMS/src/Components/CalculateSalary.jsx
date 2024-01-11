import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const CalculateSalary = () => {

    const [date, setDate] = useState(new Date())
    console.log(date);
    const [toggle, setToggle] = useState(1)
    function updateToggle(id) {
        setToggle(id)
    }

    return (
        <>
            <div className='calculate_salary_bg'>
                <div className='mt-3' id='salary-bg'>
                    <div className='ms-3 mb-4'>
                        <div className="container w-full rounded-0 row">
                            <div className='col'>
                                <ul className="nav nav-underline d-flex justify-content-start flex-nowrap  mt-1">
                                    <li className="nav-item" onClick={() => updateToggle(1)}>
                                        <div className={toggle === 1 ? "color-y" : "color-n"}>
                                            <p className="nav-link text-dark fw-semibold ps-4 pe-4" role='button'>Pending</p>
                                        </div>
                                    </li>
                                    <li className="nav-item" onClick={() => updateToggle(2)}>
                                        <div className={toggle === 2 ? "color-y" : "color-n"}>
                                            <p className="nav-link text-dark fw-semibold ps-4 pe-4" role='button'>Finalised</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Branch container start */}

                        <div >
                            <div className='container rounded-0 row salary-container-color pt-3 pb-4'>

                                <div className='col'>
                                    <span className='me-2'>
                                        <label className='me-2'>Branch</label><br />
                                        <select className="bg-white rounded-1 border-1" >
                                            <option >All Branches</option>
                                            <option value="1">One company</option>
                                        </select>
                                    </span>
                                </div>

                                <div className='col'>
                                    <span>
                                        <label className='me-2'>Payroll Month</label><br />
                                        <input type="date" className='rounded-1 border-1' onChange={e => setDate(e.target.value)} />
                                    </span>
                                </div>
                                <div className='col'>
                                    <span className='me-2'>
                                        <label className='me-2'>Wage Type</label><br />
                                        <select className="bg-white rounded-1 border-1" >
                                            <option >Monthly</option>
                                            <option value="1">Daily</option>
                                            <option value="2">Hourly</option>
                                        </select>
                                    </span>
                                </div>

                            </div>
                        </div>

                        {/* Branch Ends */}

                        {/* Pending Tab Starts here */}

                        <div className={toggle === 1 ? "show-tab-container" : "tab-container"}>
                            <div className='d-flex justify-content-between flex-nowrap mt-2 me-4'>
                                <div className='rounded-2 d-flex salary-search-input w-50'>
                                    <i className="bi bi-search text-center pt-2 ps-2"></i>
                                    <input type="text" className='border-0 ps-2 input-t w-100' placeholder='Search Name of employee' />
                                    <button type="button" className="btn btn-primary btn-sm rounded-2">Search</button>
                                </div>
                                <div>
                                    <span>
                                        <button type="button" className="btn btn-outline-danger  rounded-2 me-2">Add Other Earnings</button>
                                    </span>

                                    <span>
                                        <button type="button" className="btn btn-danger  rounded-2 me-0">Add Other Earnings</button>
                                    </span>
                                </div>
                            </div>
                            <div className='col mt-3 me-2 align-content-center'>
                                <table className="table table-bordered">
                                    <thead >
                                        <tr>
                                            <th className="fw-medium">
                                                <i className="bi bi-list-ul"></i>
                                            </th>
                                            <th className="fw-medium">EMP ID</th>
                                            <th className="fw-medium">EMPLOYEE NAME</th>
                                            <th className="fw-medium">BRANCH</th>
                                            <th className="fw-medium">PHONE</th>
                                            <th className="fw-medium">JOINING DATE</th>
                                            <th className="fw-medium">DESIGNATION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="fw-light"></td>
                                            <td className="fw-light">Daily Attendance Report</td>
                                            <td className="fw-light">All Branches</td>
                                            <td className="fw-light">Jan 2024</td>
                                            <td className="fw-light">XLSX</td>
                                            <td className="fw-light">02-01-2024</td>
                                            <td className='fw-light'>Download</td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                            <div className='d-flex justify-content-end me-3 mt-5'>
                                <div className='me-2 fw-lighter'>0-0 of 0 items</div>
                                <div className='me-2 border-i'><i className="bi bi-chevron-left"></i></div>
                                <div className='me-2 border-i'>1</div>
                                <div className='me-2 border-i'><i className="bi bi-chevron-right"></i></div>
                                <div>
                                    <select className="bg-white fw-lighter border-s" >
                                        <option >10 / page</option>
                                        <option >25 / page</option>
                                        <option >50 / page</option>
                                        <option >100 / page</option>
                                        <option >200 / page</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Pendig tab ends */}

                        {/* Finalised Tab starts */}
                        <div className={toggle === 2 ? "show-tab-container" : "tab-container"}>

                            <div className="row mt-4 ms-0 me-0 bgcolor text-center">
                                <div className="col mt-3">
                                    <div className='rounded-0 border-4 border-end '>
                                        <h1><i className="bi bi-currency-rupee"></i>0.00</h1>
                                        <p className='fw-lighter'>Total Payable Amount</p>
                                    </div>
                                </div>
                                <div className="col mt-3">
                                    <div className='rounded-0 border-4 border-end '>
                                        <h1><i className="bi bi-currency-rupee"></i>0.00</h1>
                                        <p className='fw-lighter'>Total Paid Amount</p>
                                    </div>
                                </div>
                                <div className="col mt-3">
                                    <div className='rounded-0 '>
                                        <h1><i className="bi bi-currency-rupee"></i>0.00</h1>
                                        <p className='fw-lighter'>Total Balance</p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between flex-nowrap mt-2 me-4'>
                                <div className='rounded-3 d-flex salary-search-input w-100'>
                                    <i className="bi bi-search text-center pt-2 ps-2 pb-2"></i>
                                    <input type="text" className='border-0 ps-2 input-t w-100' placeholder='Search Name of employee' />
                                    <button type="button" className="btn btn-primary btn-sm rounded-end">Search</button>
                                </div>   
                            </div>
                            <div className='d-flex justify-content-between flex-nowrap mt-2 me-4'>
                                <div className='rounded-2 d-flex salary-search'>
                                    <i className="bi bi-share  pt-1 ps-2 pb-2"></i>
                                    <button type="button" className="btn btn-sm rounded-0">Share Slips</button>
                                </div>   
                                <div className='rounded-2 d-flex salary-search'>
                                    <i className="bi bi-download pt-1 ps-2 pb-2"></i>
                                    <button type="button" className="btn btn-sm rounded-0">Download Slips</button>
                                </div>   
                                <div className='rounded-2 d-flex salary-search'>
                                    <i className="bi bi-download pt-1 ps-2 pb-2"></i>
                                    <button type="button" className="btn btn-sm rounded-0">Download Report</button>
                                </div>   
                                <div className='rounded-2 d-flex salary-search'>
                                    <i className="bi bi-pencil-square pt-1 ps-2 pb-2"></i>
                                    <button type="button" className="btn btn-sm rounded-0">Recalculate Salary</button>
                                </div>   
                            </div>
                            <div className='col mt-3 me-2 align-content-center'>
                                <table className="table table-bordered">
                                    <thead >
                                        <tr>
                                            <th className="fw-medium">
                                                <i className="bi bi-list-ul"></i>
                                            </th>
                                            <th className="fw-medium">EMP ID</th>
                                            <th className="fw-medium">EMPLOYEE NAME</th>
                                            <th className="fw-medium">BRANCH</th>
                                            <th className="fw-medium">PHONE</th>
                                            <th className="fw-medium">JOINING DATE</th>
                                            <th className="fw-medium">DESIGNATION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="fw-light"></td>
                                            <td className="fw-light">Daily Attendance Report</td>
                                            <td className="fw-light">All Branches</td>
                                            <td className="fw-light">Jan 2024</td>
                                            <td className="fw-light">XLSX</td>
                                            <td className="fw-light">02-01-2024</td>
                                            <td className='fw-light'>Download</td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                            <div className='d-flex justify-content-end me-3 mt-5'>
                                <div className='me-2 fw-lighter'>0-0 of 0 items</div>
                                <div className='me-2 border-i'><i className="bi bi-chevron-left"></i></div>
                                <div className='me-2 border-i'>1</div>
                                <div className='me-2 border-i'><i className="bi bi-chevron-right"></i></div>
                                <div>
                                    <select className="bg-white fw-lighter border-s" >
                                        <option >10 / page</option>
                                        <option >25 / page</option>
                                        <option >50 / page</option>
                                        <option >100 / page</option>
                                        <option >200 / page</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                        {/* Finalised Tab Ends */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default CalculateSalary