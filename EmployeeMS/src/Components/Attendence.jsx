import React, { useState } from 'react'

const Attendence = () => {

    const [date, setDate] = useState()

    return (
        <>
            <div className=" container text-center" id='attendence-bg'>
                <div className="row">
                    <div className="col mt-3">
                        <div className='d-flex justify-content-between'>
                            <div className=''>
                                <span className='me-2'>
                                    <label className='me-2 '>Branch</label>
                                    <select className="bg-white rounded-1 border-1" >
                                        <option selected>All Branches</option>
                                        <option value="1">One company</option>
                                        <option value="2">Two company</option>
                                        <option value="3">Three company</option>
                                    </select>
                                </span>
                                <span className='me-2'>
                                    <label className='me-2'>Department</label>
                                    <select className="bg-white rounded-1 border-1" >
                                        <option selected>All Departments</option>
                                        <option value="1">One company</option>
                                        <option value="2">Two company</option>
                                        <option value="3">Three company</option>
                                    </select>
                                </span>
                                <span>
                                    <label className='me-2'>Date</label>
                                    <input type="date" className='rounded-1 border-1' onChange={e => setDate(e.target.value)} />
                                </span>
                            </div>
                            <div>
                                <button type="button" className="btn btn-outline-primary btn-sm rounded-0 me-2">Mark All Absent As Present</button>
                                <button type="button" className="btn btn-primary btn-sm rounded-0"> <i className="bi bi-download me-2"></i>Daily Repoart</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row mt-4 ms-0 me-0 bgcolor">
                    <div className="col mt-3">
                        <div className='rounded-0 border-end '>
                            <h1>0</h1>
                            <p><i className="bi bi-circle-fill text-success me-2"></i>Present</p>
                        </div>
                    </div>
                    <div className="col mt-3">
                        <div className='rounded-0 border-end '>
                            <h1>0</h1>
                            <p><i className="bi bi-circle-fill text-danger me-2"></i>Absent</p>
                        </div>
                    </div>
                    <div className="col mt-3">
                        <div className='rounded-0 border-end '>
                            <h1>0</h1>
                            <p><i className="bi bi-circle-fill text-success me-2"></i>Late</p>
                        </div>
                    </div>
                    <div className="col mt-3">
                        <div className='rounded-0 border-end '>
                            <h1>0</h1>
                            <p><i className="bi bi-circle-fill text-warning me-2"></i>Half Day</p>
                        </div>
                    </div>
                    <div className="col mt-3">
                        <div className='rounded-0'>
                            <h1>0</h1>
                            <p><i className="bi bi-circle-fill text-info me-2"></i>Paid Leave</p>
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col mb-3'>
                        <div className='d-flex justify-content-between'>
                        <div className='rounded-0 d-flex salary-search-input'>
                                    <i className="bi bi-search text-center pt-2 ps-2"></i>
                                    <input type="text" className='border-0 ps-2 input-t w-100' placeholder='Search Name of employee' />
                                    <button type="button" className="btn btn-primary btn-sm rounded-0">Search</button>
                                </div>
                            <div>
                                <button type="button" className="btn btn-outline-primary  rounded-0 me-0">Import Attendence</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Punch-In</th>
                                        <th scope="col">Punch-Out</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row"></th>
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


        </>
    )
}

export default Attendence