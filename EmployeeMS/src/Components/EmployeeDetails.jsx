import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const EmployeeDetails = () => {

    const [toggle, setToggle] = useState(1)
    function updateToggle(id) {
        setToggle(id)
    }

    return (
        <div className='employeeDetails-bg'>
            <div className='employeeDetails-bg-1'>
                <div className='employeeDetails-bg-2'>
                    <Link
                        to='/dashboard/currentEmployee'
                        className='nav-link'>
                        <div role='button'>
                            <i className="bi bi-arrow-left" />
                        </div>
                    </Link>
                    <div className='ms-4'>
                        Add Employee
                    </div>
                </div>
                <div className=''>
                    <div>
                        <div className='employeeDetails-btn-1' role='button'>
                            Add Ex-Employee
                        </div>
                    </div>
                </div>
            </div>
            <div className='employeeDetails-bg-3'>
                <div className='employeeDetails-bg-4'>
                    <div className='employeeDetails-bg-5'>
                        <ul className='employeeDetails-bg-6'>
                            <li className='' onClick={() => updateToggle(1)}>
                                <div className={toggle === 1 ? "color-li-y" : "color-n"} role='button'>
                                    Basic Details
                                </div>
                            </li>
                            <li className='' onClick={() => updateToggle(2)}>
                                <div className={toggle === 2 ? "color-li-y" : "color-n"} role='button'>
                                    Advance Details
                                </div>
                            </li>
                            <li className='' onClick={() => updateToggle(3)}>
                                <div className={toggle === 3 ? "color-li-y" : "color-n"} role='button'>
                                    Address
                                </div>
                            </li>
                            <li className='' onClick={() => updateToggle(4)}>
                                <div className={toggle === 4 ? "color-li-y" : "color-n"} role='button'>
                                    Bank Details
                                </div>
                            </li>
                            <li className='' onClick={() => updateToggle(5)}>
                                <div className={toggle === 5 ? "color-li-y" : "color-n"} role='button'>
                                    Qualification
                                </div>
                            </li>
                            <li className='' onClick={() => updateToggle(6)}>
                                <div className={toggle === 6 ? "color-li-y" : "color-n"} role='button'>
                                    Previous Work
                                </div>
                            </li>
                            <li className='' onClick={() => updateToggle(7)}>
                                <div className={toggle === 7 ? "color-li-y" : "color-n"} role='button'>
                                    Permissions
                                </div>
                            </li>
                            <li className='' onClick={() => updateToggle(8)}>
                                <div className={toggle === 8 ? "color-li-y" : "color-n"} role='button'>
                                    Family Details
                                </div>
                            </li>
                            <li className='' onClick={() => updateToggle(9)}>
                                <div className={toggle === 9 ? "color-li-y" : "color-n"} role='button'>
                                    Asset Allocation
                                </div>
                            </li>
                            <li className='' onClick={() => updateToggle(10)}>
                                <div className={toggle === 10 ? "color-li-y" : "color-n"} role='button'>
                                    Documents
                                </div>
                            </li>
                        </ul>
                    </div>
                    <form action="">
                        <div className={toggle === 1 ? "show-tab-container" : "tab-container"}>
                            <div className='row row-cols-1 row-cols-md-3'>
                                <div className='col'>
                                    <div className='basic-details-form'>
                                        <div className='basic-details-form-1'>
                                            <div className='basic-details-form-2'>
                                                <div className='ms-1 mt-2 mb-2 me-2'>
                                                    <img
                                                        src="/Images/people-icon.png"
                                                        alt="Show uploded Image"
                                                        className="uploade-img" role="button" />
                                                </div>
                                                <div className='me-5'>
                                                    <img
                                                        src="/Images/upload-icon.png"
                                                        alt="Upload Image Icon"
                                                        className="uploade-img-1" role="button" />
                                                </div>
                                            </div>
                                            <div className='basic-details-form-3'>
                                                <div className=''>
                                                    Drag & Drop Photo or
                                                </div>
                                                <div>
                                                    <span className='basic-details-form-4' role='button'>
                                                        Choose from your system.
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-4'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <select name="" id="emp-1" placeholder=''
                                                        className='emp-text-fldset-1'>
                                                        <option value="">Blood Group</option>
                                                        {/* {employee.map((c) => {
                                                            return <option value={c.address}>{c.address}</option>;
                                                        })} */}
                                                    </select>
                                                    <label htmlFor="emp-1" className='emp-label-fldset-1'>
                                                        Blood Group
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-5'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        // onChange={handleFilter}
                                                        id='emp-2' />

                                                    <label htmlFor="emp-2" className='emp-label-fldset-1'>
                                                        Father's Name
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-5'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="password" placeholder='' className='emp-text-fldset-1'
                                                        // onChange={handleFilter}
                                                        id='emp-3' />

                                                    <label htmlFor="emp-3" className='emp-label-fldset-1'>
                                                        Password
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='basic-details-form'>
                                        <div className='basic-details-form-6'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        // onChange={handleFilter}
                                                        id='emp-4' />

                                                    <label htmlFor="emp-4" className='emp-label-fldset-1'>
                                                        First Name
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-7'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        // onChange={handleFilter}
                                                        id='emp-5' />

                                                    <label htmlFor="emp-5" className='emp-label-fldset-1'>
                                                        Middle Name
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-7'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        // onChange={handleFilter}
                                                        id='emp-6' />

                                                    <label htmlFor="emp-6" className='emp-label-fldset-1'>
                                                        Last Name
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-7'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        // onChange={handleFilter}
                                                        id='emp-7' />

                                                    <label htmlFor="emp-7" className='emp-label-fldset-1'>
                                                        Email Id
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-7'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        // onChange={handleFilter}
                                                        id='emp-8' />

                                                    <label htmlFor="emp-8" className='emp-label-fldset-1'>
                                                        Official Email Id
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-7'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        // onChange={handleFilter}
                                                        id='emp-9' />

                                                    <label htmlFor="emp-9" className='emp-label-fldset-1'>
                                                        Mother's Name
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-7'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <select name="" id="emp-10" placeholder=''
                                                        className='emp-text-fldset-1'>
                                                        <option value="">Status</option>
                                                        {/* {employee.map((c) => {
                                                            return <option value={c.address}>{c.address}</option>;
                                                        })} */}
                                                    </select>
                                                    <label htmlFor="emp-10" className='emp-label-fldset-1'>
                                                        Status
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='basic-details-form'>
                                        <div className='basic-details-form-8'>
                                            <div className='basic-font'>
                                                Select Gender:
                                            </div>
                                            <div className='basic-btn'>
                                                <span className='me-2'>
                                                    <input type="radio" id='radio-1' name='gender' value='male'
                                                    // checked="checked" 
                                                    />
                                                    <label htmlFor="radio-1">
                                                        Male
                                                    </label>
                                                </span>

                                                <span className='me-2'>
                                                    <input type="radio" id='radio-2' name='gender' value='female' />
                                                    <label htmlFor="radio-2">
                                                        Female
                                                    </label>
                                                </span>

                                                <span>
                                                    <input type="radio" id='radio-3' name='gender' value='trans' />
                                                    <label htmlFor="radio-3">
                                                        Trans
                                                    </label>
                                                </span>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-6'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        // onChange={handleFilter}
                                                        id='emp-11' />
                                                    <label htmlFor="emp-11" className='emp-label-fldset-1'>
                                                        Employee Code
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-6'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        // onChange={handleFilter}
                                                        id='emp-12' />
                                                    <label htmlFor="emp-12" className='emp-label-fldset-1'>
                                                        Mobile Number
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-6'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        // onChange={handleFilter}
                                                        id='emp-13' />
                                                    <label htmlFor="emp-13" className='emp-label-fldset-1'>
                                                        Official Mobile Number
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-6'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="date" placeholder='' className='emp-text-fldset-1'
                                                        // onChange={handleFilter}
                                                        id='emp-14' />
                                                    <label htmlFor="emp-14" className='emp-label-fldset-1'>
                                                        Joining Date
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-6'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="date" placeholder='' className='emp-text-fldset-1'
                                                        // onChange={handleFilter}
                                                        id='emp-15' />
                                                    <label htmlFor="emp-15" className='emp-label-fldset-1'>
                                                        Date of Birth
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-7'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <select name="" id="emp-16" placeholder=''
                                                        className='emp-text-fldset-1'>
                                                        <option value="">Marital Status</option>
                                                        {/* {employee.map((c) => {
                                                            return <option value={c.address}>{c.address}</option>;
                                                        })} */}
                                                    </select>
                                                    <label htmlFor="emp-16" className='emp-label-fldset-1'>
                                                        Marital Status
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-9'>
                                            <div className='basic-details-form-10'>Save</div>
                                            <div className='basic-details-form-11'
                                                onClick={() => updateToggle(2)}>
                                                Next
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={toggle === 2 ? "show-tab-container" : "tab-container"}>
                            <div className='row row-cols-1 row-cols-md-3'>
                                <div className='col'>
                                    <div className='basic-details-form'>
                                        <div className='basic-details-form-12'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        // onChange={handleFilter}
                                                        id='emp-17' />

                                                    <label htmlFor="emp-17" className='emp-label-fldset-1'>
                                                        UAN Number
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-7'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        // onChange={handleFilter}
                                                        id='emp-18' />

                                                    <label htmlFor="emp-18" className='emp-label-fldset-1'>
                                                        ESIC Number
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-13'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        // onChange={handleFilter}
                                                        id='emp-19' />

                                                    <label htmlFor="emp-19" className='emp-label-fldset-1'>
                                                        PAN Number
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='basic-details-form'>
                                        <div className='basic-details-form-6'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        // onChange={handleFilter}
                                                        id='emp-20' />

                                                    <label htmlFor="emp-20" className='emp-label-fldset-1'>
                                                        Aadhar Number
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-7'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        // onChange={handleFilter}
                                                        id='emp-21' />

                                                    <label htmlFor="emp-21" className='emp-label-fldset-1'>
                                                        Insurance Number
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-13'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        // onChange={handleFilter}
                                                        id='emp-22' />

                                                    <label htmlFor="emp-22" className='emp-label-fldset-1'>
                                                        Driving Licence Number
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='basic-details-form'>
                                        <div className='basic-details-form-6'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        // onChange={handleFilter}
                                                        id='emp-23' />
                                                    <label htmlFor="emp-23" className='emp-label-fldset-1'>
                                                        IP Number
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-6'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        // onChange={handleFilter}
                                                        id='emp-24' />
                                                    <label htmlFor="emp-24" className='emp-label-fldset-1'>
                                                        PF Number
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row-up-line'></div>
                            <div className='basic-details-form-15'>
                                <div className='row row-cols-1 row-cols-md-3'>
                                    <div className='col'>
                                        <div className='basic-details-form-14'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        // onChange={handleFilter}
                                                        id='emp-25' />
                                                    <label htmlFor="emp-25" className='emp-label-fldset-1'>
                                                        CTC Monthly (In Probation)
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='basic-details-form-14'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        // onChange={handleFilter}
                                                        id='emp-26' />
                                                    <label htmlFor="emp-26" className='emp-label-fldset-1'>
                                                        Probation Period (Days)
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='basic-details-form-14'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        // onChange={handleFilter}
                                                        id='emp-27' />
                                                    <label htmlFor="emp-27" className='emp-label-fldset-1'>
                                                        CTC Monthly (After Probation)
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row-down-line'></div>
                            <div className='basic-details-form-15'>
                                <div className='row row-cols-1 row-cols-md-3'>
                                    <div className='col'>
                                        <div className='basic-details-form-14'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <select name="" id="emp-28" placeholder=''
                                                        className='emp-text-fldset-1'>
                                                        <option value="">Client Name</option>
                                                        {/* {employee.map((c) => {
                                                            return <option value={c.address}>{c.address}</option>;
                                                        })} */}
                                                    </select>
                                                    <label htmlFor="emp-28" className='emp-label-fldset-1'>
                                                        Client Name
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-16'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        // onChange={handleFilter}
                                                        id='emp-29' />
                                                    <label htmlFor="emp-29" className='emp-label-fldset-1'>
                                                        Delevery Sub Type
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='basic-details-form-14'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        // onChange={handleFilter}
                                                        id='emp-30' />
                                                    <label htmlFor="emp-30" className='emp-label-fldset-1'>
                                                        Client Id
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='basic-details-form-14'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        // onChange={handleFilter}
                                                        id='emp-31' />
                                                    <label htmlFor="emp-31" className='emp-label-fldset-1'>
                                                        Delevery Type
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='basic-details-form-17'>
                                <div className='d-flex justify-content-between text-center'>
                                    <div className='basic-details-form-11'
                                        onClick={() => updateToggle(1)}>
                                        Back
                                    </div>
                                    <div className='basic-details-form-10'>
                                        Save
                                    </div>
                                    <div className='basic-details-form-11'
                                        onClick={() => updateToggle(3)}>
                                        Next
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={toggle === 3 ? "show-tab-container" : "tab-container"}>
                            <div className='row row-cols-1 row-cols-md-2'>
                                <div className='col'>
                                    <div className='basic-details-form-18'>
                                        <div className='basic-details-form-19'>
                                            <label htmlFor="emp-32">
                                                Present Address
                                            </label>
                                        </div>
                                        <div className=''>
                                            <div className='address-body-fldset-1'>
                                                <div className='address-form-fldset-1'>
                                                    <textarea type="" placeholder='' className='address-text-fldset-1'
                                                        rows="4"
                                                        // onChange={handleFilter}
                                                        id='emp-32' />
                                                    <label htmlFor="emp-32" className='address-label-fldset-1'>
                                                        Address
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row row-cols-2 row-cols-md-2'>
                                            <div className='col'>
                                                <div className='basic-details-form-23'>
                                                    <div className='smAddress-body-fldset-1'>
                                                        <div className='smAddress-form-fldset-1'>
                                                            <select name="" id="emp-33" placeholder=''
                                                                className='smAddress-text-fldset-1'>
                                                                <option value="">Country *</option>
                                                                {/* {employee.map((c) => {
                                                            return <option value={c.address}>{c.address}</option>;
                                                        })} */}
                                                            </select>
                                                            <label htmlFor="emp-33" className='smAddress-label-fldset-1'>
                                                                Country *
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-23'>
                                                    <div className='smAddress-body-fldset-1'>
                                                        <div className='smAddress-form-fldset-1'>
                                                            <select name="" id="emp-34" placeholder=''
                                                                className='smAddress-text-fldset-1'>
                                                                <option value="">City *</option>
                                                                {/* {employee.map((c) => {
                                                            return <option value={c.address}>{c.address}</option>;
                                                        })} */}
                                                            </select>
                                                            <label htmlFor="emp-34" className='smAddress-label-fldset-1'>
                                                                City *
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col'>
                                                <div className='basic-details-form-23'>
                                                    <div className='smAddress-body-fldset-1'>
                                                        <div className='smAddress-form-fldset-1'>
                                                            <select name="" id="emp-35" placeholder=''
                                                                className='smAddress-text-fldset-1'>
                                                                <option value="">State *</option>
                                                                {/* {employee.map((c) => {
                                                            return <option value={c.address}>{c.address}</option>;
                                                        })} */}
                                                            </select>
                                                            <label htmlFor="emp-35" className='smAddress-label-fldset-1'>
                                                                State *
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-23'>
                                                    <div className='smAddress-body-fldset-1'>
                                                        <div className='smAddress-form-fldset-1'>
                                                            <input type="text" placeholder='' className='smAddress-text-fldset-1'
                                                                // onChange={handleFilter}
                                                                id='emp-36' />
                                                            <label htmlFor="emp-36" className='smAddress-label-fldset-1'>
                                                                Pincode *
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='basic-details-form-18'>
                                        <div className='basic-details-form-21'>
                                            <div className='basic-details-form-20'>
                                                <label htmlFor="emp-37">
                                                    Permanent Address
                                                </label>
                                            </div>
                                            <div className='basic-details-form-22'>
                                                <input type="checkbox" id='emp-38' className='me-2' />
                                                <label htmlFor="emp-38">
                                                    Same as present Address
                                                </label>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className='address-body-fldset-1'>
                                                <div className='address-form-fldset-1'>
                                                    <textarea type="" placeholder='' className='address-text-fldset-1'
                                                        rows="4"
                                                        // onChange={handleFilter}
                                                        id='emp-37' />
                                                    <label htmlFor="emp-37" className='address-label-fldset-1'>
                                                        Address
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row row-cols-2 row-cols-md-2'>
                                            <div className='col'>
                                                <div className='basic-details-form-23'>
                                                    <div className='smAddress-body-fldset-1'>
                                                        <div className='smAddress-form-fldset-1'>
                                                            <select name="" id="emp-39" placeholder=''
                                                                className='smAddress-text-fldset-1'>
                                                                <option value="">Country *</option>
                                                                {/* {employee.map((c) => {
                                                            return <option value={c.address}>{c.address}</option>;
                                                        })} */}
                                                            </select>
                                                            <label htmlFor="emp-39" className='smAddress-label-fldset-1'>
                                                                Country *
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-23'>
                                                    <div className='smAddress-body-fldset-1'>
                                                        <div className='smAddress-form-fldset-1'>
                                                            <select name="" id="emp-40" placeholder=''
                                                                className='smAddress-text-fldset-1'>
                                                                <option value="">City *</option>
                                                                {/* {employee.map((c) => {
                                                            return <option value={c.address}>{c.address}</option>;
                                                        })} */}
                                                            </select>
                                                            <label htmlFor="emp-40" className='smAddress-label-fldset-1'>
                                                                City *
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col'>
                                                <div className='basic-details-form-23'>
                                                    <div className='smAddress-body-fldset-1'>
                                                        <div className='smAddress-form-fldset-1'>
                                                            <select name="" id="emp-41" placeholder=''
                                                                className='smAddress-text-fldset-1'>
                                                                <option value="">State *</option>
                                                                {/* {employee.map((c) => {
                                                            return <option value={c.address}>{c.address}</option>;
                                                        })} */}
                                                            </select>
                                                            <label htmlFor="emp-41" className='smAddress-label-fldset-1'>
                                                                State *
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-23'>
                                                    <div className='smAddress-body-fldset-1'>
                                                        <div className='smAddress-form-fldset-1'>
                                                            <input type="text" placeholder='' className='smAddress-text-fldset-1'
                                                                // onChange={handleFilter}
                                                                id='emp-42' />
                                                            <label htmlFor="emp-42" className='smAddress-label-fldset-1'>
                                                                Pincode *
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='basic-details-form-17'>
                                <div className='d-flex justify-content-between text-center'>
                                    <div className='basic-details-form-11'
                                        onClick={() => updateToggle(2)}>
                                        Back
                                    </div>
                                    <div className='basic-details-form-10'>
                                        Save
                                    </div>
                                    <div className='basic-details-form-11'
                                        onClick={() => updateToggle(4)}>
                                        Next
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={toggle === 4 ? "show-tab-container" : "tab-container"}>
                            <div className='row row-cols-1 row-cols-md-2'>

                                <div className='col'>
                                    <div className='basic-details-form-24'>
                                        <div>Bank Account Details 1</div>
                                        <div className='row row-cols-1 row-cols-md-2'>
                                            <div className='col'>
                                            <div className='basic-details-form-23'>
                                                    <div className='smAddress-body-fldset-1'>
                                                        <div className='smAddress-form-fldset-1'>
                                                            <input type="text" placeholder='' className='smAddress-text-fldset-1'
                                                                // onChange={handleFilter}
                                                                id='emp-43' />
                                                            <label htmlFor="emp-43" className='smAddress-label-fldset-1'>
                                                                Account Holder Name
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-23'>
                                                    <div className='smAddress-body-fldset-1'>
                                                        <div className='smAddress-form-fldset-1'>
                                                            <input type="text" placeholder='' className='smAddress-text-fldset-1'
                                                                // onChange={handleFilter}
                                                                id='emp-44' />
                                                            <label htmlFor="emp-44" className='smAddress-label-fldset-1'>
                                                                IFSC/RTGS Code
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col'>
                                            <div className='basic-details-form-23'>
                                                    <div className='smAddress-body-fldset-1'>
                                                        <div className='smAddress-form-fldset-1'>
                                                            <input type="text" placeholder='' className='smAddress-text-fldset-1'
                                                                // onChange={handleFilter}
                                                                id='emp-45' />
                                                            <label htmlFor="emp-45" className='smAddress-label-fldset-1'>
                                                            Account Number
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-23'>
                                                    <div className='smAddress-body-fldset-1'>
                                                        <div className='smAddress-form-fldset-1'>
                                                            <input type="text" placeholder='' className='smAddress-text-fldset-1'
                                                                // onChange={handleFilter}
                                                                id='emp-46' />
                                                            <label htmlFor="emp-46" className='smAddress-label-fldset-1'>
                                                                Bank Name
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col'>
                                <div className='basic-details-form-24'>
                                        <div>Bank Account Details 2</div>
                                        <div className='row row-cols-1 row-cols-md-2'>
                                            <div className='col'>
                                            <div className='basic-details-form-23'>
                                                    <div className='smAddress-body-fldset-1'>
                                                        <div className='smAddress-form-fldset-1'>
                                                            <input type="text" placeholder='' className='smAddress-text-fldset-1'
                                                                // onChange={handleFilter}
                                                                id='emp-47' />
                                                            <label htmlFor="emp-47" className='smAddress-label-fldset-1'>
                                                                Account Holder Name
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-23'>
                                                    <div className='smAddress-body-fldset-1'>
                                                        <div className='smAddress-form-fldset-1'>
                                                            <input type="text" placeholder='' className='smAddress-text-fldset-1'
                                                                // onChange={handleFilter}
                                                                id='emp-48' />
                                                            <label htmlFor="emp-48" className='smAddress-label-fldset-1'>
                                                                IFSC/RTGS Code
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col'>
                                            <div className='basic-details-form-23'>
                                                    <div className='smAddress-body-fldset-1'>
                                                        <div className='smAddress-form-fldset-1'>
                                                            <input type="text" placeholder='' className='smAddress-text-fldset-1'
                                                                // onChange={handleFilter}
                                                                id='emp-49' />
                                                            <label htmlFor="emp-49" className='smAddress-label-fldset-1'>
                                                            Account Number
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-23'>
                                                    <div className='smAddress-body-fldset-1'>
                                                        <div className='smAddress-form-fldset-1'>
                                                            <input type="text" placeholder='' className='smAddress-text-fldset-1'
                                                                // onChange={handleFilter}
                                                                id='emp-50' />
                                                            <label htmlFor="emp-50" className='smAddress-label-fldset-1'>
                                                                Bank Name
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                </div>

                            </div>
                            <div className='row row-cols-1 row-cols-md-2'>
                                <div className='col'>
                                    <div className='basic-details-form-25'>
                                    <div className='address-body-fldset-1'>
                                                <div className='address-form-fldset-1'>
                                                    <textarea type="" placeholder='' className='address-text-fldset-1'
                                                        rows="4"
                                                        // onChange={handleFilter}
                                                        id='emp-51' />
                                                    <label htmlFor="emp-51" className='address-label-fldset-1'>
                                                        Bank Address
                                                    </label>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='basic-details-form-25'>
                                    <div className='address-body-fldset-1'>
                                                <div className='address-form-fldset-1'>
                                                    <textarea type="" placeholder='' className='address-text-fldset-1'
                                                        rows="4"
                                                        // onChange={handleFilter}
                                                        id='emp-52' />
                                                    <label htmlFor="emp-52" className='address-label-fldset-1'>
                                                        Bank Address
                                                    </label>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className='basic-details-form-17'>
                                <div className='d-flex justify-content-between text-center'>
                                    <div className='basic-details-form-11'
                                        onClick={() => updateToggle(3)}>
                                        Back
                                    </div>
                                    <div className='basic-details-form-10'>
                                        Save
                                    </div>
                                    <div className='basic-details-form-11'
                                        onClick={() => updateToggle(5)}>
                                        Next
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={toggle === 5 ? "show-tab-container" : "tab-container"}>5</div>

                        <div className={toggle === 6 ? "show-tab-container" : "tab-container"}>6</div>

                        <div className={toggle === 7 ? "show-tab-container" : "tab-container"}>7</div>

                        <div className={toggle === 8 ? "show-tab-container" : "tab-container"}>8</div>

                        <div className={toggle === 9 ? "show-tab-container" : "tab-container"}>9</div>

                        <div className={toggle === 10 ? "show-tab-container" : "tab-container"}>10</div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EmployeeDetails