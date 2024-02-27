import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Attendence = () => {

    const [date, setDate] = useState()
    const [admins, setAdmins] = useState([])
    const [category, setCategory] = useState([]);
    const [employee, setEmployee] = useState([]);
    const [records, setRecords]= useState([]);

    useEffect(() => {
        AdminRecords();
    }, [])

    const AdminRecords = () => {
        axios.get('http://localhost:3000/auth/admin_records')
            .then(result => {
                if (result.data.Status) {
                    setAdmins(result.data.Result)
                } else {
                    alert(result.data.Error)
                }
            })
    }

    useEffect(() => {
        axios
          .get("http://localhost:3000/auth/category")
          .then((result) => {
            if (result.data.Status) {
              setCategory(result.data.Result);
            } else {
              alert(result.data.Error);
            }
          })
          .catch((err) => console.log(err));
      }, []);

      useEffect(() => {
        axios
          .get("http://localhost:3000/auth/employee")
          .then((result) => {
            if (result.data.Status) {
              setEmployee(result.data.Result);
              setRecords(result.data.Result);
            } else {
              alert(result.data.Error);
            }
          })
          .catch((err) => console.log(err));
      }, []);

      const handleFilter = (event) => {
        console.log(event);
            setRecords(employee.filter(f => f.name.toLowerCase().includes(event.target.value)))
      }

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
                                        {admins.map((a) => {
                                            return <option value={a.id}>{a.name}</option>;
                                        })}

                                    </select>
                                </span>
                                <span className='me-2'>
                                    <label className='me-2'>Department</label>
                                    <select className="bg-white rounded-1 border-1" >
                                        <option selected>All Departments</option>
                                        {category.map((c) => {
                                            return <option value={c.id}>{c.name}</option>;
                                        })}
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
                        <div className='rounded-0 border-end present-bg'>
                            <h1>0</h1>
                            <p><i className="bi bi-circle-fill text-success me-2"></i>Present</p>
                        </div>
                    </div>
                    <div className="col mt-3">
                        <div className='rounded-0 border-end present-bg'>
                            <h1>0</h1>
                            <p><i className="bi bi-circle-fill text-danger me-2"></i>Absent</p>
                        </div>
                    </div>
                    <div className="col mt-3">
                        <div className='rounded-0 border-end present-bg'>
                            <h1>0</h1>
                            <p><i className="bi bi-circle-fill text-success me-2"></i>Late</p>
                        </div>
                    </div>
                    <div className="col mt-3">
                        <div className='rounded-0 border-end present-bg'>
                            <h1>0</h1>
                            <p><i className="bi bi-circle-fill text-warning me-2"></i>Half Day</p>
                        </div>
                    </div>
                    <div className="col mt-3">
                        <div className='rounded-0 present-bg'>
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
                                <input type="text" className='border-0 ps-2 input-t w-100' placeholder='Search Name of employee' onChange={handleFilter} />
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
                                        <th scope="col">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Punch-In</th>
                                        <th scope="col">Punch-Out</th>
                                        <th scope="col">Status</th>
                                        {/* <th scope="col">Action</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                {records.map((e) => (
                                    <tr>
                                        <td>
                                                    <img
                                                        src={`http://localhost:3000/Images/` + e.image}
                                                        className="employee_image"
                                                    />
                                                </td>
                                        <td>{e.name}</td>
                                        <td>
                                            <input 
                                                type="time" 
                                                placeholder='Punch In'
                                            />
                                        </td>
                                        <td>
                                            <input 
                                                type="time" 
                                                placeholder='Punch Out'
                                            />
                                        </td>
                                        <td>
                                            <select name="" id="" className='rounded-4'>
                                                <option value="">Select</option>
                                                <option value="">Present</option>
                                                <option value="">Absent</option>
                                                <option value="">Late</option>
                                                <option value="">Half Day</option>
                                                <option value="">Paid Leave</option>
                                            </select>
                                        </td>
                                        {/* <td><button className='btn bg-info-subtle rounded-5'>Update</button></td> */}
                                    </tr>
                                    ))}
                                    
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