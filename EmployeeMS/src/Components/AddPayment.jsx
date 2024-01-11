import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DataTable from "react-data-table-component"

const AddPayment = () => {
  const columns = [
    {
      name: 'EMP ID',
      selector: row => row.emp_id,
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
      selector: row => row.ctc_month,
      sortable: true
    },
    {
      name: 'PAYABLE AMOUNT',
      selector: row => row.payable_amount,
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
      emp_id: 1,
      name: "saroj",
      joining_date: '08/01/2024',
      ctc_month: 97310,
      payable_amount: 123344,
      paid_amount: 33333,
      remaining_amount: 1222,
      ytd_blance: 1233,
      calculation_status: 'final',
    },
    {
      emp_id: 1,
      name: "Mohan",
      joining_date: '08/01/2024',
      ctc_month: 97310,
      payable_amount: 123344,
      paid_amount: 33333,
      remaining_amount: 1222,
      ytd_blance: 1233,
      calculation_status: 'final',
    },
  ]
  const [records, setRecords] = useState(data)
  function handleFilter(event) {
    const newData = data.filter(row => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setRecords(newData)
  }
  const tableHeaderstyle = {
    headCells: {
      style: {
        fontWeight: "bold",
        fontSize: "14px",
        backgroundColor: "pink",
      }
    }
  }
  const [date, setDate] = useState(new Date())
  const handleDate = (dt) => {
    setDate(dt)
  }

  function CustomInput({ value, onClick }) {
    return (
      <div className='input-group flex-nowrap lab'>
        <input type="text" className='form-control' value={value} onClick={onClick} readOnly />
        <div className='input-group-append'>
          <span className='input-group-text rounded-1' id='dat'>
            <i className="bi bi-calendar-check" />
          </span>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className='container h-100' id='attendence-bg'>
        <div className='mt-3' id='salary-bg'>
          <div className='container rounded-0 row salary-container-color pt-3 pb-4 ms-0'>

            <div className='col'>
              <span className='me-2'>
                <label className='me-2'>Branch</label><br />
                <select className="bg-white rounded-1 border-1 size-a" >
                  <option >All Branches</option>
                  <option value="1">One company</option>
                </select>
              </span>
            </div>

            <div className='col'>
              <span>
                <label className='me-2'>Payroll Month</label><br />
                <label>
                  <DatePicker
                    selected={date}
                    dateFormat="MM/yyyy"
                    onChange={(date) => handleDate(date)}
                    showMonthYearPicker
                    // maxDate={new Date()}
                    customInput={<CustomInput />}
                  />
                </label>
              </span>
            </div>

            <div className='col'>
              <span className='me-2'>
                <label className='me-2'>Wage Type</label><br />
                <select className="bg-white rounded-1 border-1 size-a" >
                  <option >Monthly</option>
                  <option value="1">Daily</option>
                  <option value="2">Hourly</option>
                </select>
              </span>
            </div>

          </div>

          <div className='text-end mb-3'>
            <label>
              <span className='rounded-0 d-flex salary-search-input mt-3'>
                <i className="bi bi-search text-center pt-1 ps-1"></i>
                <input type="text" className='border-0 ps-2 pe-2 input-t w-100' placeholder='Search Employee by name' onChange={handleFilter} />
              </span>
            </label>

          </div>
          <div className='text-center'>
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
    </>
  )
}

export default AddPayment