import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const EmployeeDetails = () => {

    const [toggle, setToggle] = useState(1)
    function updateToggle(id) {
        setToggle(id)
    }
    const [profileImage, setProfileImage] = useState('')
    const handleImageChange = (e) => {
        const profile_img = e.target.files[0]
        setProfileImage(e.target.files[0])
    };

    const [expList, setExpList] = useState([
        {
            companyName: '',
            designation: '',
            from: '',
            to: '',
            duration: ''
        }
    ])

    const handleServiceAdd = () => {
        setExpList([...expList,
        {
            companyName: '',
            designation: '',
            from: '',
            to: '',
            duration: ''
        }])
    }

    const handleServiceRemove = (i) => {
        const list = [...expList]
        list.splice(i, 1)
        setExpList(list)
    }

    const handleServiceChange = (e, i) => {
        const { name, value } = e.target
        const list = [...expList]
        list[i][name] = value
        setExpList(list)
    }
    const [familyList, setFamilyList] = useState([
        {
            relationName: '',
            realtionType: '',
            relationPhone: '',
            relationDOB: ''
        }
    ])

    const handleFamilyServiceAdd = () => {
        setFamilyList([...familyList,
        {
            relationName: '',
            realtionType: '',
            relationPhone: '',
            relationDOB: ''
        }])
    }

    const handleFamilyServiceRemove = (j) => {
        const fList = [...familyList]
        fList.splice(j, 1)
        setFamilyList(fList)
    }

    const handleFamilyServiceChange = (e, j) => {
        const { name, value } = e.target
        const fList = [...familyList]
        fList[j][name] = value
        setFamilyList(fList)
    }
    const [assetList, setAssetList] = useState([
        {
            assetName: '',
            assetModel: '',
            assetSerial: '',
            assetDOA: ''
        }
    ])

    const handleAssetServiceAdd = () => {
        setAssetList([...assetList,
        {
            assetName: '',
            assetModel: '',
            assetSerial: '',
            assetDOA: ''
        }])
    }

    const handleAssetServiceRemove = (k) => {
        const aList = [...assetList]
        aList.splice(k, 1)
        setAssetList(aList)
    }

    const handleAssetServiceChange = (e, k) => {
        const { name, value } = e.target
        const aList = [...assetList]
        aList[k][name] = value
        setAssetList(aList)
    }

    // console.log(expList);

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
                                                    {/* <img
                                                        src="/Images/people-icon.png"
                                                        alt="Show uploded Image"
                                                        className="uploade-img"/> */}
                                                    {profileImage ?
                                                        <label htmlFor="img-upload"><img
                                                            src={URL.createObjectURL(profileImage)}
                                                            alt=""
                                                            className="uploade-img" /></label>
                                                        :
                                                        <label htmlFor="img-upload"><img
                                                            src="/Images/people-icon.png"
                                                            alt="Show uploded Image"
                                                            className="uploade-img" /></label>
                                                    }
                                                </div>
                                                <div className='me-5'>
                                                    {/* <img
                                                        src="/Images/upload-icon.png"
                                                        alt="Upload Image Icon"
                                                        className="uploade-img-1" role="button" /> */}
                                                    <label htmlFor="img-upload">
                                                        <img
                                                            src="/Images/upload-icon.png"
                                                            alt="Upload Image Icon"
                                                            className="uploade-img-1" role="button" />
                                                    </label>
                                                    <input type="file" id='img-upload' name='img-upload' className='img-upload-new'
                                                        onChange={handleImageChange} />
                                                </div>
                                            </div>
                                            <div className='basic-details-form-3'>
                                                <div className=''>
                                                    Drag & Drop Photo or
                                                </div>
                                                <div>
                                                    <span className='basic-details-form-4' role='button'>
                                                        {/* Choose from your system. */}
                                                        <label htmlFor="img-upload">
                                                            Choose from your system.
                                                        </label>
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

                        <div className={toggle === 5 ? "show-tab-container" : "tab-container"}>
                            <div className='row row-cols-1 row-cols-md-1'>
                                <div className='col'>

                                    <div className='qualification-head'>

                                        <div className='qualification-div'>

                                            <div className='qualification-div-1'>
                                                Matriculation (10th)
                                            </div>

                                            <div className='qualification-div-2'>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='board'
                                                                className='quali-text-fldset-1'
                                                                // onChange={e=>handleInputChange(e,i)}
                                                                id='emp-54' />
                                                            <label htmlFor='emp-54' className='quali-label-fldset-1'>
                                                                Board/University
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='college'
                                                                className='quali-text-fldset-1'
                                                                // onChange={handleFilter}
                                                                id='emp-55' />
                                                            <label htmlFor='emp-55' className='quali-label-fldset-1'>
                                                                Institute/College
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='passingYear'
                                                                className='quali-text-fldset-1'
                                                                // onChange={handleFilter}
                                                                id='emp-56' />
                                                            <label htmlFor='emp-56' className='quali-label-fldset-1'>
                                                                Passing Year
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='totalMarks' className='quali-text-fldset-1'
                                                                // onChange={handleFilter}
                                                                id='emp-57' />
                                                            <label htmlFor='emp-57' className='quali-label-fldset-1'>
                                                                Total Marks
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='obtentMarks' className='quali-text-fldset-1'
                                                                // onChange={handleFilter}
                                                                id='emp-58' />
                                                            <label htmlFor='emp-58' className='quali-label-fldset-1'>
                                                                Obtent Marks
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='percentage' className='quali-text-fldset-1'
                                                                id='emp-59' />
                                                            <label htmlFor='emp-59' className='quali-label-fldset-1'>
                                                                Percentage (%)
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='qualification-div'>

                                            <div className='qualification-div-1'>
                                                Intermediate (12th)
                                            </div>

                                            <div className='qualification-div-2'>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='board'
                                                                className='quali-text-fldset-1'
                                                                // onChange={e=>handleInputChange(e,i)}
                                                                id='emp-60' />
                                                            <label htmlFor='emp-60' className='quali-label-fldset-1'>
                                                                Board/University
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='college'
                                                                className='quali-text-fldset-1'
                                                                // onChange={handleFilter}
                                                                id='emp-61' />
                                                            <label htmlFor='emp-61' className='quali-label-fldset-1'>
                                                                Institute/College
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='passingYear'
                                                                className='quali-text-fldset-1'
                                                                // onChange={handleFilter}
                                                                id='emp-62' />
                                                            <label htmlFor='emp-62' className='quali-label-fldset-1'>
                                                                Passing Year
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='totalMarks' className='quali-text-fldset-1'
                                                                // onChange={handleFilter}
                                                                id='emp-63' />
                                                            <label htmlFor='emp-63' className='quali-label-fldset-1'>
                                                                Total Marks
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='obtentMarks' className='quali-text-fldset-1'
                                                                // onChange={handleFilter}
                                                                id='emp-64' />
                                                            <label htmlFor='emp-64' className='quali-label-fldset-1'>
                                                                Obtent Marks
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='percentage' className='quali-text-fldset-1'
                                                                id='emp-65' />
                                                            <label htmlFor='emp-65' className='quali-label-fldset-1'>
                                                                Percentage (%)
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='qualification-div'>

                                            <div className='qualification-div-1'>
                                                Graduation
                                            </div>

                                            <div className='qualification-div-2'>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='board'
                                                                className='quali-text-fldset-1'
                                                                // onChange={e=>handleInputChange(e,i)}
                                                                id='emp-66' />
                                                            <label htmlFor='emp-66' className='quali-label-fldset-1'>
                                                                Board/University
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='college'
                                                                className='quali-text-fldset-1'
                                                                // onChange={handleFilter}
                                                                id='emp-67' />
                                                            <label htmlFor='emp-67' className='quali-label-fldset-1'>
                                                                Institute/College
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='passingYear'
                                                                className='quali-text-fldset-1'
                                                                // onChange={handleFilter}
                                                                id='emp-68' />
                                                            <label htmlFor='emp-68' className='quali-label-fldset-1'>
                                                                Passing Year
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='totalMarks' className='quali-text-fldset-1'
                                                                // onChange={handleFilter}
                                                                id='emp-69' />
                                                            <label htmlFor='emp-69' className='quali-label-fldset-1'>
                                                                Total Marks
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='obtentMarks' className='quali-text-fldset-1'
                                                                // onChange={handleFilter}
                                                                id='emp-70' />
                                                            <label htmlFor='emp-70' className='quali-label-fldset-1'>
                                                                Obtent Marks
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='percentage' className='quali-text-fldset-1'
                                                                id='emp-71' />
                                                            <label htmlFor='emp-71' className='quali-label-fldset-1'>
                                                                Percentage (%)
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='qualification-div'>

                                            <div className='qualification-div-1'>
                                                Post Graduation
                                            </div>

                                            <div className='qualification-div-2'>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='board'
                                                                className='quali-text-fldset-1'
                                                                // onChange={e=>handleInputChange(e,i)}
                                                                id='emp-72' />
                                                            <label htmlFor='emp-72' className='quali-label-fldset-1'>
                                                                Board/University
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='college'
                                                                className='quali-text-fldset-1'
                                                                // onChange={handleFilter}
                                                                id='emp-73' />
                                                            <label htmlFor='emp-73' className='quali-label-fldset-1'>
                                                                Institute/College
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='passingYear'
                                                                className='quali-text-fldset-1'
                                                                // onChange={handleFilter}
                                                                id='emp-74' />
                                                            <label htmlFor='emp-74' className='quali-label-fldset-1'>
                                                                Passing Year
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='totalMarks' className='quali-text-fldset-1'
                                                                // onChange={handleFilter}
                                                                id='emp-75' />
                                                            <label htmlFor='emp-75' className='quali-label-fldset-1'>
                                                                Total Marks
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='obtentMarks' className='quali-text-fldset-1'
                                                                // onChange={handleFilter}
                                                                id='emp-76' />
                                                            <label htmlFor='emp-76' className='quali-label-fldset-1'>
                                                                Obtent Marks
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='percentage' className='quali-text-fldset-1'
                                                                id='emp-77' />
                                                            <label htmlFor='emp-77' className='quali-label-fldset-1'>
                                                                Percentage (%)
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='qualification-div'>

                                            <div className='qualification-div-1'>
                                                Other Course
                                            </div>

                                            <div className='qualification-div-2'>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='board'
                                                                className='quali-text-fldset-1'
                                                                // onChange={e=>handleInputChange(e,i)}
                                                                id='emp-78' />
                                                            <label htmlFor='emp-78' className='quali-label-fldset-1'>
                                                                Board/University
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='college'
                                                                className='quali-text-fldset-1'
                                                                // onChange={handleFilter}
                                                                id='emp-79' />
                                                            <label htmlFor='emp-79' className='quali-label-fldset-1'>
                                                                Institute/College
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='passingYear'
                                                                className='quali-text-fldset-1'
                                                                // onChange={handleFilter}
                                                                id='emp-80' />
                                                            <label htmlFor='emp-80' className='quali-label-fldset-1'>
                                                                Passing Year
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='totalMarks' className='quali-text-fldset-1'
                                                                // onChange={handleFilter}
                                                                id='emp-81' />
                                                            <label htmlFor='emp-81' className='quali-label-fldset-1'>
                                                                Total Marks
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='obtentMarks' className='quali-text-fldset-1'
                                                                // onChange={handleFilter}
                                                                id='emp-82' />
                                                            <label htmlFor='emp-82' className='quali-label-fldset-1'>
                                                                Obtent Marks
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='percentage' className='quali-text-fldset-1'
                                                                id='emp-83' />
                                                            <label htmlFor='emp-83' className='quali-label-fldset-1'>
                                                                Percentage (%)
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
                                                onClick={() => updateToggle(4)}>
                                                Back
                                            </div>
                                            <div className='basic-details-form-10'>
                                                Save
                                            </div>
                                            <div className='basic-details-form-11'
                                                onClick={() => updateToggle(6)}>
                                                Next
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className={toggle === 6 ? "show-tab-container" : "tab-container"}>
                            <div className='row row-cols-1 row-cols-md-1'>
                                <div className='col'>

                                    <div className='workExpe-head'>
                                        <div className='qualification-div'>

                                            <div className='qualification-div-1'>
                                                Work Experience
                                            </div>

                                            {/* Dynamic form section start */}

                                            {expList.map((x, i) => (

                                                <div key={i} className='quali-div-main'>


                                                    <div className='qualification-div-2'>
                                                        <div className='basic-details-form-26'>
                                                            {i + 1}.
                                                        </div>

                                                        <div className='basic-details-form-26'>
                                                            <div className='quali-body-fldset-1'>
                                                                <div className='quali-form-fldset-1'>
                                                                    <input type="text" placeholder=''
                                                                        name='companyName'
                                                                        className='quali-text-fldset-1'
                                                                        value={x.companyName}
                                                                        onChange={(e) => handleServiceChange(e, i)}
                                                                        id={i + 'a'} />
                                                                    <label htmlFor={i + 'a'} className='quali-label-fldset-1'>
                                                                        Company Name
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='basic-details-form-26'>
                                                            <div className='quali-body-fldset-1'>
                                                                <div className='quali-form-fldset-1'>
                                                                    <input type="text" placeholder=''
                                                                        name='designation'
                                                                        className='quali-text-fldset-1' value={x.designation}
                                                                        onChange={(e) => handleServiceChange(e, i)}
                                                                        id={i + 'b'} />
                                                                    <label htmlFor={i + 'b'} className='quali-label-fldset-1'>
                                                                        Designation
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='basic-details-form-26'>
                                                            <div className='quali-body-fldset-1'>
                                                                <div className='quali-form-fldset-1'>
                                                                    <input type="date" placeholder=''
                                                                        name='from'
                                                                        className='quali-text-fldset-1'
                                                                        value={x.from}
                                                                        onChange={(e) => handleServiceChange(e, i)}
                                                                        id='emp-86' />
                                                                    <label htmlFor='emp-86' className='quali-label-fldset-1'>
                                                                        From
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='basic-details-form-26'>
                                                            <div className='quali-body-fldset-1'>
                                                                <div className='quali-form-fldset-1'>
                                                                    <input type="date" placeholder=''
                                                                        name='to' className='quali-text-fldset-1'
                                                                        value={x.to}
                                                                        onChange={(e) => handleServiceChange(e, i)}
                                                                        id='emp-87' />
                                                                    <label htmlFor='emp-87' className='quali-label-fldset-1'>
                                                                        To
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='basic-details-form-26'>
                                                            <div className='quali-body-fldset-1'>
                                                                <div className='quali-form-fldset-1'>
                                                                    <input type="text" placeholder=''
                                                                        name='duration' className='quali-text-fldset-1'
                                                                        value={x.duration}
                                                                        onChange={(e) => handleServiceChange(e, i)}
                                                                        id={i + 'e'} />
                                                                    <label htmlFor={i + 'e'} className='quali-label-fldset-1'>
                                                                        Duration (In Year)
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='basic-details-form-26'>
                                                            {expList.length > 1 &&
                                                                (
                                                                    <div onClick={() => handleServiceRemove(i)} className='qualification-div-3'>
                                                                        <i className="bi bi-trash-fill" />
                                                                    </div>
                                                                )}

                                                        </div>
                                                    </div>

                                                    <div className='basic-details-form-28'>
                                                        {expList.length - 1 === i &&
                                                            expList.length < 10 &&
                                                            (
                                                                <div className='pb-2'>
                                                                    <div onClick={handleServiceAdd} className='qualification-div-3'>
                                                                        <i className="bi bi-plus-lg" />
                                                                    </div>
                                                                </div>
                                                            )}

                                                    </div>

                                                </div>

                                            ))}

                                        </div>

                                        {/* <div>
                                            <h1>OutPut</h1>
                                            {
                                                expList.map((x, i) => (
                                                    <ul key={i}>
                                                        {i+1} ,
                                                        {x.companyName} ,
                                                        {x.designation} ,
                                                        {x.from} ,
                                                        {x.to} ,
                                                        {x.duration} ,
                                                    </ul>
                                                ))
                                            }
                                        </div> */}

                                    </div>

                                    <div className='basic-details-form-17'>
                                        <div className='d-flex justify-content-between text-center'>
                                            <div className='basic-details-form-11'
                                                onClick={() => updateToggle(5)}>
                                                Back
                                            </div>
                                            <div className='basic-details-form-10'>
                                                Save
                                            </div>
                                            <div className='basic-details-form-11'
                                                onClick={() => updateToggle(7)}>
                                                Next
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={toggle === 7 ? "show-tab-container" : "tab-container"}>
                            <div className='row row-cols-1 row-cols-md-3'>
                                <div className='col'>
                                    <div className='basic-details-form'>
                                        <div className='permition-details-form-1'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <select name="" id="emp-84" placeholder=''
                                                        className='emp-text-fldset-1'>
                                                        <option value="">Employee Type</option>
                                                        {/* {employee.map((c) => {
                                                            return <option value={c.address}>{c.address}</option>;
                                                        })} */}
                                                    </select>
                                                    <label htmlFor="emp-84" className='emp-label-fldset-1'>
                                                        Employee Type
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='permition-details-form-1'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <select name="" id="emp-85" placeholder=''
                                                        className='emp-text-fldset-1'>
                                                        <option value="">Department</option>
                                                        {/* {employee.map((c) => {
                                                            return <option value={c.address}>{c.address}</option>;
                                                        })} */}
                                                    </select>
                                                    <label htmlFor="emp-85" className='emp-label-fldset-1'>
                                                        Department
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='permition-details-form-1'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <select name="" id="emp-86" placeholder=''
                                                        className='emp-text-fldset-1'>
                                                        <option value="">Select Role</option>
                                                        {/* {employee.map((c) => {
                                                            return <option value={c.address}>{c.address}</option>;
                                                        })} */}
                                                    </select>
                                                    <label htmlFor="emp-86" className='emp-label-fldset-1'>
                                                        Select Role
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='permition-details-form-1'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <select name="" id="emp-87" placeholder=''
                                                        className='emp-text-fldset-1'>
                                                        <option value="">Select Skills</option>
                                                        {/* {employee.map((c) => {
                                                            return <option value={c.address}>{c.address}</option>;
                                                        })} */}
                                                    </select>
                                                    <label htmlFor="emp-87" className='emp-label-fldset-1'>
                                                        Select Skills
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='permition-details-form-1'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        // onChange={handleFilter}
                                                        id='emp-88' />

                                                    <label htmlFor="emp-88" className='emp-label-fldset-1'>
                                                        Card Id
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='basic-details-form'>
                                        <div className='permition-details-form-1'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <select name="" id="emp-89" placeholder=''
                                                        className='emp-text-fldset-1'>
                                                        <option value="">Employee Type</option>
                                                        {/* {employee.map((c) => {
                                                            return <option value={c.address}>{c.address}</option>;
                                                        })} */}
                                                    </select>
                                                    <label htmlFor="emp-89" className='emp-label-fldset-1'>
                                                        Employee Type
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='permition-details-form-1'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <select name="" id="emp-90" placeholder=''
                                                        className='emp-text-fldset-1'>
                                                        <option value="">Sub Department</option>
                                                        {/* {employee.map((c) => {
                                                            return <option value={c.address}>{c.address}</option>;
                                                        })} */}
                                                    </select>
                                                    <label htmlFor="emp-90" className='emp-label-fldset-1'>
                                                        Sub Department
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='permition-details-form-1'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <select name="" id="emp-91" placeholder=''
                                                        className='emp-text-fldset-1'>
                                                        <option value="">Grade</option>
                                                        {/* {employee.map((c) => {
                                                            return <option value={c.address}>{c.address}</option>;
                                                        })} */}
                                                    </select>
                                                    <label htmlFor="emp-91" className='emp-label-fldset-1'>
                                                        Grade
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='permition-details-form-1'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <select name="" id="emp-92" placeholder=''
                                                        className='emp-text-fldset-1'>
                                                        <option value="">Shift</option>
                                                        {/* {employee.map((c) => {
                                                            return <option value={c.address}>{c.address}</option>;
                                                        })} */}
                                                    </select>
                                                    <label htmlFor="emp-92" className='emp-label-fldset-1'>
                                                        Shift
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='permition-details-form-1'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        // onChange={handleFilter}
                                                        id='emp-93' />

                                                    <label htmlFor="emp-93" className='emp-label-fldset-1'>
                                                        Offer Id
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='basic-details-form'>
                                        <div className='permition-details-form-1'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <select name="" id="emp-94" placeholder=''
                                                        className='emp-text-fldset-1'>
                                                        <option value="">Designation</option>
                                                        {/* {employee.map((c) => {
                                                            return <option value={c.address}>{c.address}</option>;
                                                        })} */}
                                                    </select>
                                                    <label htmlFor="emp-94" className='emp-label-fldset-1'>
                                                        Designation
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='permition-details-form-1'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <select name="" id="emp-95" placeholder=''
                                                        className='emp-text-fldset-1'>
                                                        <option value="">Site</option>
                                                        {/* {employee.map((c) => {
                                                            return <option value={c.address}>{c.address}</option>;
                                                        })} */}
                                                    </select>
                                                    <label htmlFor="emp-95" className='emp-label-fldset-1'>
                                                        Site
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='permition-details-form-1'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <select name="" id="emp-96" placeholder=''
                                                        className='emp-text-fldset-1'>
                                                        <option value="">Highest Qualification</option>
                                                        {/* {employee.map((c) => {
                                                            return <option value={c.address}>{c.address}</option>;
                                                        })} */}
                                                    </select>
                                                    <label htmlFor="emp-96" className='emp-label-fldset-1'>
                                                        Highest Qualification
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='permition-details-form-1'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="time" placeholder='' className='emp-text-fldset-1'
                                                        // onChange={handleFilter}
                                                        id='emp-97' />

                                                    <label htmlFor="emp-97" className='emp-label-fldset-1'>
                                                        Shift Start Time
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='permition-select'>
                                <div className='permition-select-1'>
                                    <div className='permition-select-2 me-2'>
                                        <label htmlFor="">
                                            Flexi Hours:
                                        </label>
                                    </div>
                                    <div className=' me-2'>
                                        <input type="radio" id='permi-yes-1' name='permi-left' className='me-2' />
                                        <label htmlFor="permi-yes-1">Yes</label>
                                    </div>
                                    <div className=' me-2'>
                                        <input type="radio" id='permi-yes-1' name='permi-left' className='me-2' />
                                        <label htmlFor="permi-yes-1">No</label>
                                    </div>
                                </div>
                                <div className='permition-select-1'>
                                    <div className='permition-select-2 me-2'>
                                        <label htmlFor="">
                                            Admin Role:
                                        </label>
                                    </div>
                                    <div className=' me-2'>
                                        <input type="radio" id='permi-yes-1' name='permi-right' className='me-2' />
                                        <label htmlFor="permi-yes-1">Yes</label>
                                    </div>
                                    <div className=' me-2'>
                                        <input type="radio" id='permi-yes-1' name='permi-right' className='me-2' />
                                        <label htmlFor="permi-yes-1">No</label>
                                    </div>
                                </div>
                            </div>
                            <div className='permition-select-3'>
                                <div className='row row-cols-1 row-cols-md-4'>
                                    <div className='col'>
                                        <div className='mb-4 mt-2'>
                                            <input type="checkbox" id='check-1' className='me-2' />
                                            <label htmlFor="check-1">Allowed OD</label>
                                        </div>
                                        <div className=''>
                                            <input type="checkbox" id='check-2' className='me-2' />
                                            <label htmlFor="check-2">Office Attendance Allowed</label>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='mb-4 mt-2'>
                                            <input type="checkbox" id='check-3' className='me-2' />
                                            <label htmlFor="check-3">Auto Attendance Allowed</label>
                                        </div>
                                        <div className=''>
                                            <input type="checkbox" id='check-4' className='me-2' />
                                            <label htmlFor="check-4">Is MultiShift Enable</label>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='mb-4 mt-2'>
                                            <input type="checkbox" id='check-5' className='me-2' />
                                            <label htmlFor="check-5">Work From Home Allowed</label>
                                        </div>
                                        <div className=''>
                                            <input type="checkbox" id='check-6' className='me-2' />
                                            <label htmlFor="check-6">Geofence Auto CheckIn</label>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='mb-4 mt-2'>
                                            <input type="checkbox" id='check-7' className='me-2' />
                                            <label htmlFor="check-7">Rotational weekOff Allowed</label>
                                        </div>
                                        <div className=''>
                                            <input type="checkbox" id='check-8' className='me-2' />
                                            <label htmlFor="check-8">Geofence Auto Checkout</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='permition-select-3'>
                                <div className='row row-cols-1 row-cols-md-3'>
                                    <div className='col'>
                                        <div className='permition-details-form-1'>
                                            <div className='ms-1'>
                                                Hindi
                                            </div>
                                        </div>
                                        <div className='permition-details-form-1'>
                                            <div className='ms-1'>
                                                English
                                            </div>
                                        </div>
                                        <div className='permition-details-form-1'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        // onChange={handleFilter}
                                                        id='emp-98' />

                                                    <label htmlFor="emp-98" className='emp-label-fldset-1'>
                                                        Other Language
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='permition-details-form-1'>
                                            <div className='d-flex'>
                                                <div>
                                                    <input type="checkbox" id='check-9' className='me-2' />
                                                    <label htmlFor="check-9">Read</label>
                                                </div>
                                                <div className='ms-3'>
                                                    <input type="checkbox" id='check-10' className='me-2' />
                                                    <label htmlFor="check-10">Write</label>
                                                </div>
                                                <div className='ms-3'>
                                                    <input type="checkbox" id='check-11' className='me-2' />
                                                    <label htmlFor="check-11">Speak</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='permition-details-form-1'>
                                            <div className='d-flex'>
                                                <div>
                                                    <input type="checkbox" id='check-12' className='me-2' />
                                                    <label htmlFor="check-12">Read</label>
                                                </div>
                                                <div className='ms-3'>
                                                    <input type="checkbox" id='check-13' className='me-2' />
                                                    <label htmlFor="check-13">Write</label>
                                                </div>
                                                <div className='ms-3'>
                                                    <input type="checkbox" id='check-14' className='me-2' />
                                                    <label htmlFor="check-14">Speak</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='permition-details-form-1'>
                                            <div className='d-flex'>
                                                <div>
                                                    <input type="checkbox" id='check-15' className='me-2' />
                                                    <label htmlFor="check-15">Read</label>
                                                </div>
                                                <div className='ms-3'>
                                                    <input type="checkbox" id='check-16' className='me-2' />
                                                    <label htmlFor="check-16">Write</label>
                                                </div>
                                                <div className='ms-3'>
                                                    <input type="checkbox" id='check-17' className='me-2' />
                                                    <label htmlFor="check-17">Speak</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='basic-details-form-17'>
                                <div className='d-flex justify-content-between text-center'>
                                    <div className='basic-details-form-11'
                                        onClick={() => updateToggle(6)}>
                                        Back
                                    </div>
                                    <div className='basic-details-form-10'>
                                        Save
                                    </div>
                                    <div className='basic-details-form-11'
                                        onClick={() => updateToggle(8)}>
                                        Next
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={toggle === 8 ? "show-tab-container" : "tab-container"}>
                            <div className='row row-cols-1 row-cols-md-1'>
                                <div className='col'>

                                    <div className='workExpe-head'>
                                        <div className='qualification-div'>

                                            <div className='qualification-div-1'>
                                                Family Details
                                            </div>

                                            {/* Dynamic form section start */}

                                            {familyList.map((y, j) => (

                                                <div key={j} className='quali-div-main'>


                                                    <div className='qualification-div-2'>
                                                        <div className='basic-details-form-26'>
                                                            {j + 1}.
                                                        </div>

                                                        <div className='basic-details-form-26'>
                                                            <div className='quali-body-fldset-1'>
                                                                <div className='quali-form-fldset-1'>
                                                                    <input type="text" placeholder=''
                                                                        name='relationName'
                                                                        className='quali-text-fldset-1'
                                                                        value={y.relationName}
                                                                        onChange={(e) => handleFamilyServiceChange(e, j)}
                                                                        id={j + 'a1'} />
                                                                    <label htmlFor={j + 'a1'} className='quali-label-fldset-1'>
                                                                        Name
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='basic-details-form-26'>
                                                            <div className='quali-body-fldset-1'>
                                                                <div className='quali-form-fldset-1'>
                                                                    <input type="text" placeholder=''
                                                                        name='realtionType'
                                                                        className='quali-text-fldset-1' value={y.realtionType}
                                                                        onChange={(e) => handleFamilyServiceChange(e, j)}
                                                                        id={j + 'b1'} />
                                                                    <label htmlFor={j + 'b1'} className='quali-label-fldset-1'>
                                                                        Relation Type
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='basic-details-form-26'>
                                                            <div className='quali-body-fldset-1'>
                                                                <div className='quali-form-fldset-1'>
                                                                    <input type="text" placeholder=''
                                                                        name='relationPhone'
                                                                        className='quali-text-fldset-1'
                                                                        value={y.relationPhone}
                                                                        onChange={(e) => handleFamilyServiceChange(e, j)}
                                                                        id={j + 'c1'} />
                                                                    <label htmlFor={j + 'c1'} className='quali-label-fldset-1'>
                                                                        Phone No.
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='basic-details-form-26'>
                                                            <div className='quali-body-fldset-1'>
                                                                <div className='quali-form-fldset-1'>
                                                                    <input type="date" placeholder=''
                                                                        name='relationDOB' className='quali-text-fldset-1'
                                                                        value={y.relationDOB}
                                                                        onChange={(e) => handleFamilyServiceChange(e, j)}
                                                                        id={j + 'd1'} />
                                                                    <label htmlFor={j + 'd1'} className='quali-label-fldset-1'>
                                                                        Date of Birth
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='basic-details-form-26'>
                                                            {familyList.length > 1 &&
                                                                (
                                                                    <div onClick={() => handleFamilyServiceRemove(j)} className='qualification-div-3'>
                                                                        <i className="bi bi-trash-fill" />
                                                                    </div>
                                                                )}

                                                        </div>
                                                    </div>

                                                    <div className='basic-details-form-28'>
                                                        {familyList.length - 1 === j &&
                                                            familyList.length < 10 &&
                                                            (
                                                                <div className='pb-2'>
                                                                    <div onClick={handleFamilyServiceAdd} className='qualification-div-3'>
                                                                        <i className="bi bi-plus-lg" />
                                                                    </div>
                                                                </div>
                                                            )}

                                                    </div>

                                                </div>

                                            ))}

                                        </div>

                                        {/* <div>
                                            <h1>OutPut</h1>
                                            {
                                                expList.map((x, i) => (
                                                    <ul key={i}>
                                                        {i+1} ,
                                                        {x.companyName} ,
                                                        {x.designation} ,
                                                        {x.from} ,
                                                        {x.to} ,
                                                        {x.duration} ,
                                                    </ul>
                                                ))
                                            }
                                        </div>
                                        <div>
                                            <h1>OutPut</h1>
                                            {
                                                familyList.map((y, j) => (
                                                    <ul key={j}>
                                                        {j+1} ,
                                                        {y.relationName} ,
                                                        {y.realtionType} ,
                                                        {y.relationPhone} ,
                                                        {y.relationDOB} 
                                                    </ul>
                                                ))
                                            }
                                        </div> */}

                                    </div>

                                    <div className='basic-details-form-17'>
                                        <div className='d-flex justify-content-between text-center'>
                                            <div className='basic-details-form-11'
                                                onClick={() => updateToggle(7)}>
                                                Back
                                            </div>
                                            <div className='basic-details-form-10'>
                                                Save
                                            </div>
                                            <div className='basic-details-form-11'
                                                onClick={() => updateToggle(9)}>
                                                Next
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={toggle === 9 ? "show-tab-container" : "tab-container"}>
                            <div className='row row-cols-1 row-cols-md-1'>
                                <div className='col'>

                                    <div className='workExpe-head'>
                                        <div className='qualification-div'>

                                            <div className='qualification-div-1'>
                                                Asset Allocation
                                            </div>

                                            {/* Dynamic form section start */}

                                            {assetList.map((z, k) => (

                                                <div key={k} className='quali-div-main'>


                                                    <div className='qualification-div-2'>
                                                        <div className='basic-details-form-26'>
                                                            {k + 1}.
                                                        </div>

                                                        <div className='basic-details-form-26'>
                                                            <div className='quali-body-fldset-1'>
                                                                <div className='quali-form-fldset-1'>
                                                                    <input type="text" placeholder=''
                                                                        name='assetName'
                                                                        className='quali-text-fldset-1'
                                                                        value={z.assetName}
                                                                        onChange={(e) => handleAssetServiceChange(e, k)}
                                                                        id={k + 'a2'} />
                                                                    <label htmlFor={k + 'a2'} className='quali-label-fldset-1'>
                                                                        Asset Name
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='basic-details-form-26'>
                                                            <div className='quali-body-fldset-1'>
                                                                <div className='quali-form-fldset-1'>
                                                                    <input type="text" placeholder=''
                                                                        name='assetModel'
                                                                        className='quali-text-fldset-1' value={z.assetModel}
                                                                        onChange={(e) => handleAssetServiceChange(e, k)}
                                                                        id={k + 'b2'} />
                                                                    <label htmlFor={k + 'b2'} className='quali-label-fldset-1'>
                                                                        Model No.
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='basic-details-form-26'>
                                                            <div className='quali-body-fldset-1'>
                                                                <div className='quali-form-fldset-1'>
                                                                    <input type="text" placeholder=''
                                                                        name='assetSerial'
                                                                        className='quali-text-fldset-1'
                                                                        value={z.assetSerial}
                                                                        onChange={(e) => handleAssetServiceChange(e, k)}
                                                                        id={k + 'c2'} />
                                                                    <label htmlFor={k + 'c2'} className='quali-label-fldset-1'>
                                                                        Serial No.
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='basic-details-form-26'>
                                                            <div className='quali-body-fldset-1'>
                                                                <div className='quali-form-fldset-1'>
                                                                    <input type="date" placeholder=''
                                                                        name='assetDOA' className='quali-text-fldset-1'
                                                                        value={z.assetDOA}
                                                                        onChange={(e) => handleAssetServiceChange(e, k)}
                                                                        id={k + 'd2'} />
                                                                    <label htmlFor={k + 'd2'} className='quali-label-fldset-1'>
                                                                        Date of Allocation
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='basic-details-form-26'>
                                                            {assetList.length > 1 &&
                                                                (
                                                                    <div onClick={() => handleAssetServiceRemove(k)} className='qualification-div-3'>
                                                                        <i className="bi bi-trash-fill" />
                                                                    </div>
                                                                )}

                                                        </div>
                                                    </div>

                                                    <div className='basic-details-form-28'>
                                                        {assetList.length - 1 === k &&
                                                            assetList.length < 10 &&
                                                            (
                                                                <div className='pb-2'>
                                                                    <div onClick={handleAssetServiceAdd} className='qualification-div-3'>
                                                                        <i className="bi bi-plus-lg" />
                                                                    </div>
                                                                </div>
                                                            )}

                                                    </div>

                                                </div>

                                            ))}

                                        </div>

                                        {/* <div>
                                            <h1>OutPut</h1>
                                            {
                                                expList.map((x, i) => (
                                                    <ul key={i}>
                                                        {i+1} ,
                                                        {x.companyName} ,
                                                        {x.designation} ,
                                                        {x.from} ,
                                                        {x.to} ,
                                                        {x.duration} ,
                                                    </ul>
                                                ))
                                            }
                                        </div>
                                        <div>
                                            <h1>OutPut</h1>
                                            {
                                                familyList.map((y, j) => (
                                                    <ul key={j}>
                                                        {j+1} ,
                                                        {y.relationName} ,
                                                        {y.realtionType} ,
                                                        {y.relationPhone} ,
                                                        {y.relationDOB} 
                                                    </ul>
                                                ))
                                            }
                                        </div> */}

                                    </div>

                                    <div className='basic-details-form-17'>
                                        <div className='d-flex justify-content-between text-center'>
                                            <div className='basic-details-form-11'
                                                onClick={() => updateToggle(8)}>
                                                Back
                                            </div>
                                            <div className='basic-details-form-10'>
                                                Save
                                            </div>
                                            <div className='basic-details-form-11'
                                                onClick={() => updateToggle(10)}>
                                                Next
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={toggle === 10 ? "show-tab-container" : "tab-container"}>
                            <div className='row row-cols-1 row-cols-md-1'>
                                <div className='col'>
                                    <div className='workExpe-head'>
                                        <div className='document-div'>

                                            <div className='document-div-1'>
                                                <div>
                                                    10th Certificate
                                                </div>
                                                <div>
                                                    <div className='btn-document-upload'>
                                                        <input type="file" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='document-div-1'>
                                                <div>
                                                    12th Certificate
                                                </div>
                                                <div>
                                                    <div className='btn-document-upload'>
                                                        <input type="file" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='document-div-1'>
                                                <div>
                                                    Graduation
                                                </div>
                                                <div>
                                                    <div className='btn-document-upload'>
                                                        <input type="file" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='document-div-1'>
                                                <div>
                                                    Post Graduation
                                                </div>
                                                <div>
                                                    <div className='btn-document-upload'>
                                                        <input type="file" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='document-div-1'>
                                                <div>
                                                    Other Course
                                                </div>
                                                <div>
                                                    <div className='btn-document-upload'>
                                                        <input type="file" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='basic-details-form-17'>
                                        <div className='d-flex justify-content-between text-center'>
                                            <div className='basic-details-form-11'
                                                onClick={() => updateToggle(9)}>
                                                Back
                                            </div>
                                            {/* <div className='basic-details-form-10'>
                                                Submit
                                            </div> */}
                                            <div>
                                                <button className='submit-button-style'>
                                                    Submit
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EmployeeDetails