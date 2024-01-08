import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Notification = () => {
  return (
    <>
      <div className='container h-100' id='attendence-bg'>
        <div className='mt-3' id='notification-bg'>
          <div className='mt-2 ms-4'>
            <h3 className='fw-semibold'>Notifications</h3>
          </div>
          <div className='container d-flex justify-content-around flex-nowrap me-2  mt-5  '>
            {/* <i className="bi-bell"></i> */}
            {/* <FontAwesomeIcon icon={faEnvelope} /> */}

            <select className="bg-white rounded-1 border-1 select-w text-dark">
              <option > All Notifications</option>
              <option value="1">Attendance</option>
              <option value="2">Announcement</option>
              <option value="3">Notes</option>
              <option value="3"> Leave Request</option>
              <option value="3">&#x20B9; Payment</option>
              <option value="3">Live Track</option>
            </select>


            <select className="bg-white rounded-1 border-1 select-w" >
              <option >All Branches</option>
              <option value="1">One company</option>
            </select>

            <select className="bg-white rounded-1 border-1 select-w" >
              <option >All Departments</option>
              <option value="1">One company</option>
            </select>

            <input type='text' className="bg-white rounded-1 border-1 select-w border-1 ps-2 input-t" placeholder='All Employees'></input>

          </div>
          <div className='border-top mt-5 mx-3'>
            <div className='d-flex justify-content-center fs-5 fw-semibold notification-detail'>
              <p className='text-center'>Your staff isn’t using the Staff App?</p>
            </div>
            <div className='d-flex justify-content-center fw-lighter fs-6'>
              <p className='text-center'>Get real-time updates when Staff marks attendance on Staff App</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Notification