import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component"
import axios from 'axios'

const CurrentEmployee = () => {
    const [employee, setEmployee] = useState([]);


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


    const columns = [
        {
            name: 'EMP ID',
            selector: row => row.id,
            sortable: true
        },
        {
            name: 'NAME',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'JOINING DATE',
            selector: row => row.joining_date,
            sortable: true
        },
        {
            name: 'CTC / MONTH',
            selector: row => (row.salary) * 12,
            sortable: true
        },
        {
            name: 'PAYABLE AMOUNT',
            selector: row => row.salary,
            sortable: true
        },
        {
            name: 'PAID AMOUNT',
            selector: row => row.paid_amount,
            sortable: true
        },
        {
            name: 'REMAINING AMOUNT',
            selector: row => row.remaining_amount,
            sortable: true
        },
        {
            name: 'YTD BLANCE',
            selector: row => row.ytd_blance,
            sortable: true
        },
        {
            name: 'CALCULATION STATUS',
            selector: row => row.calculation_status,
            sortable: true
        },
    ]
    const data = [
        {

        },
    ]
    const tableHeaderstyle = {
        headCells: {
            style: {
                fontWeight: "bold",
                fontSize: "13px",
                backgroundColor: "#668cf5",
                color: "#fff",
            }
        }
    }
    const [records, setRecords] = useState(data)
    const handleFilter = (event) => {
        setRecords(employee.filter(f => f.name.toLowerCase().includes(event.target.value)))
    }
    return (
        <div className='currentEmplyee-bg'>
            <div className='currentEmplyee-bg-1 '>
                <div className='currentEmplyee-bg-2'>
                    Employees
                </div>
                <div className='currentEmplyee-bg-3'>

                    {/* this is for field set input */}
                    {/* <div className='body-fldset'>
                        <div className='form-fldset'>
                            <input type="text" placeholder='' className='text-fldset'/>
                            <label htmlFor="" className='label-fldset'>
                                E-mail
                            </label>
                        </div>
                    </div> */}
                    {/* this is for field set input ends*/}

                    <div >
                        <div className='body-fldset'>
                            <div className='form-fldset'>
                                <select name="" id="" placeholder=''
                                    //  className='currentEmplyee-btn-2'
                                    className='text-fldset'>
                                    <option value="">Gender</option>
                                    {employee.map((c) => {
                                        return <option value={c.id}>{c.name}</option>;
                                    })}
                                </select>
                                <label htmlFor="" className='label-fldset'>
                                    Gender
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='currentEmplyee-btn' role='button'><i className="bi bi-cloud-arrow-up-fill icon-2" /> Bulk Attendance Permission</div>
                    </div>
                    <div>
                        <div className='currentEmplyee-btn-3' role='button'><i className="bi bi-cloud-arrow-up-fill icon-2" /> Employee</div>
                    </div>
                    <div>
                        <div className='currentEmplyee-btn-4' role='button'>Add Employee</div>
                    </div>
                    <div>
                        <div className='currentEmplyee-btn-1' role='button'>Export</div>
                    </div>
                </div>
            </div>
            <div className='section-2'>
                <div>
                    <div className='body-fldset'>
                        <div className='form-fldset'>
                            <select name="" id="" placeholder=''
                                //  className='currentEmplyee-btn-2'
                                className='text-fldset'>
                                <option value="">STAFF</option>
                                {employee.map((c) => {
                                    return <option value={c.id}>{c.name}</option>;
                                })}
                            </select>
                            <label htmlFor="" className='label-fldset'>
                                Emp Type
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='body-fldset'>
                        <div className='form-fldset'>
                            <select name="" id="" placeholder=''
                                //  className='currentEmplyee-btn-2'
                                className='text-fldset'>
                                <option value="">SHIFT</option>
                                {employee.map((c) => {
                                    return <option value={c.id}>{c.name}</option>;
                                })}
                            </select>
                            <label htmlFor="" className='label-fldset'>
                                Shift
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='body-fldset'>
                        <div className='form-fldset'>
                            <select name="" id="" placeholder=''
                                //  className='currentEmplyee-btn-2'
                                className='text-fldset'>
                                <option value="">DEPARTMENT</option>
                                {employee.map((c) => {
                                    return <option value={c.id}>{c.name}</option>;
                                })}
                            </select>
                            <label htmlFor="" className='label-fldset'>
                                Select Department
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='body-fldset'>
                        <div className='form-fldset'>
                            <select name="" id="" placeholder=''
                                //  className='currentEmplyee-btn-2'
                                className='text-fldset'>
                                <option value="">ALL</option>
                                {employee.map((c) => {
                                    return <option value={c.id}>{c.name}</option>;
                                })}
                            </select>
                            <label htmlFor="" className='label-fldset'>
                                Select Status
                            </label>
                        </div>
                    </div>
                </div>
                <div><div className='body-fldset'>
                    <div className='form-fldset'>
                        <select name="" id="" placeholder=''
                            //  className='currentEmplyee-btn-2'
                            className='text-fldset'>
                            <option value="">SITE</option>
                            {employee.map((c) => {
                                return <option value={c.id}>{c.name}</option>;
                            })}
                        </select>
                        <label htmlFor="" className='label-fldset'>
                            Site
                        </label>
                    </div>
                </div></div>
                <div>
                    <div className='body-fldset-1'>
                        <div className='form-fldset-1'>
                            <input type="text" placeholder='' className='text-fldset-1'
                                onChange={handleFilter} />

                            <label htmlFor="" className='label-fldset-1'>
                                Search <i className="bi bi-search icon-3" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ps-3 pe-3'>
                <div className='text-center rounded-2'>
                    <DataTable
                        columns={columns}
                        // data={data} 
                        data={records}
                        selectableRows
                        pagination
                        selectableRowsHighlight
                        highlightOnHover
                        customStyles={tableHeaderstyle}
                    ></DataTable>
                </div>
            </div>
        </div>
    )
}

export default CurrentEmployee