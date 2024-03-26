import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ReportFilter({ onClose }) {

    const [date, setDate] = useState(new Date())
    const handleDate = (dt) => {
        setDate(dt)
    }
    const [employee, setEmployee] = useState([]);
    const [records, setRecords] = useState([])

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
    // const handleFilter = (event) => {
    //     setRecords(employee.filter(f => f.name.toLowerCase().includes(event.target.value)))
    // }

    return (
        <div className='dropDownReportFilter'>
            <div className='ReportFilter-1'>
                <div className='ReportFilter-2'>
                    Filter
                </div>
                <div className='ReportFilter-3'>
                    <i onClick={onClose} role='button' className="bi bi-x" />
                </div>
            </div>
            <div className='ReportFilter-4'>
                <div className='dailyReport-body-fldset-1'>
                    <div className='dailyReport-form-fldset-1'>
                        <input type="text" placeholder='' className='dailyReport-text-fldset-1'
                        // onChange={handleFilter}
                        />

                        <label htmlFor="" className='dailyReport-label-fldset-1'>
                            Search Employee
                            {/* <i className="bi bi-search icon-3" /> */}
                        </label>
                    </div>
                </div>
            </div>
            <div className='ReportFilter-4'>
                <div className='report-font-1'>
                    <label>
                        <div className='report-DateContainer'>
                            <span className='report-dateInput'>
                                <DatePicker
                                    selected={date}
                                    dateFormat="dd/MM/yyyy"
                                    onChange={(date) => handleDate(date)}
                                    showFullMonthYearPicker
                                    maxDate={new Date()}
                                />
                            </span>
                            <span className='report-icon'>
                                <i className="bi bi-calendar3"></i>
                            </span>
                        </div>
                    </label>
                </div>
            </div>
            <div className='ReportFilter-4'>
                <div className='dailyReport-body-fldset-1'>
                    <div className='dailyReport-form-fldset-1'>
                        <select name="" id="" placeholder=''
                            className='dailyReport-text-fldset-1'>
                            <option value="">Site</option>
                            {employee.map((c) => {
                                return <option value={c.id}>{c.name}</option>;
                            })}
                        </select>
                        <label htmlFor="" className='dailyReport-label-fldset-1'>
                            Site
                        </label>
                    </div>
                </div>
            </div>
            <div className='ReportFilter-4'>
                <div className='dailyReport-body-fldset-1'>
                    <div className='dailyReport-form-fldset-1'>
                        <select name="" id="" placeholder=''
                            className='dailyReport-text-fldset-1'>
                            <option value="">All</option>
                            {employee.map((c) => {
                                return <option value={c.id}>{c.name}</option>;
                            })}
                        </select>
                        <label htmlFor="" className='dailyReport-label-fldset-1'>
                            Emp Type
                        </label>
                    </div>
                </div>
            </div>
            <div className='ReportFilter-4'>
                <div className='dailyReport-body-fldset-1'>
                    <div className='dailyReport-form-fldset-1'>
                        <select name="" id="" placeholder=''
                            className='dailyReport-text-fldset-1'>
                            <option value="">Shift</option>
                            {employee.map((c) => {
                                return <option value={c.id}>{c.name}</option>;
                            })}
                        </select>
                        <label htmlFor="" className='dailyReport-label-fldset-1'>
                            Shift
                        </label>
                    </div>
                </div>
            </div>
            <div className='ReportFilter-4'>
                <div className='dailyReport-body-fldset-1'>
                    <div className='dailyReport-form-fldset-1'>
                        <select name="" id="" placeholder=''
                            className='dailyReport-text-fldset-1'>
                            <option value="">Department</option>
                            {employee.map((c) => {
                                return <option value={c.id}>{c.name}</option>;
                            })}
                        </select>
                        <label htmlFor="" className='dailyReport-label-fldset-1'>
                        Department
                        </label>
                    </div>
                </div>
            </div>
            <div className='ReportFilter-4'>
                <div className='dailyReport-body-fldset-1'>
                    <div className='dailyReport-form-fldset-1'>
                        <select name="" id="" placeholder=''
                            className='dailyReport-text-fldset-1'>
                            <option value="">Status</option>
                            {employee.map((c) => {
                                return <option value={c.id}>{c.name}</option>;
                            })}
                        </select>
                        <label htmlFor="" className='dailyReport-label-fldset-1'>
                            Status
                        </label>
                    </div>
                </div>
            </div>
            <div className='ReportFilter-4'>
                <div className='dailyReport-body-fldset-1'>
                    <div className='dailyReport-form-fldset-1'>
                        <select name="" id="" placeholder=''
                            className='dailyReport-text-fldset-1'>
                            <option value="">Attendance Status</option>
                            {employee.map((c) => {
                                return <option value={c.id}>{c.name}</option>;
                            })}
                        </select>
                        <label htmlFor="" className='dailyReport-label-fldset-1'>
                            Attendance Status
                        </label>
                    </div>
                </div>
            </div>
            <div className='ReportFilter-4'>
                <div className='d-flex justify-content-end'>
                    <div className='ReportFilter-5' role='button' onClick={onClose}>Cancel</div>
                    <div className='ReportFilter-6' role='button'>Submit</div>
                </div>
            </div>
        </div>
    )
}

export default ReportFilter