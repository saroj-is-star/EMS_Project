import React from 'react'
import { Link } from 'react-router-dom'

const SupportHome = () => {
  return (
    <div className='support-home-bg'>
      <div className='support-home-bg-1'>
        <div className='raw'>
          <div className='col s-home-bg-3'>
            <h1>Hello, What can I do for you?</h1>
          </div>
          <div className='col s-home-bg-4'>
            <form action="">
              <div className='form-group my-0 form-bg'>
                <div className='input-group'>
                  <input type="text" className='form-control' placeholder='Enter the serch term here....' autoComplete='off' aria-level='Enter the serch term here....' />
                  <button className='input-group-text btn px-20 ' type='submut' tabIndex='-1' aria-level='Search'>
                    <span>
                      <i className="bi bi-search"></i>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='support-home-bg-2'>
        <div className="card mb-3 rounded-4 shadow card-bg" >
          <div className="row g-0">
            <div className="col-md-4 img-home">
              <img src="/Images/light-bulb.png" className="img-fluid rounded img-home-1" alt="" />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title">Articles browse</h5>
                <p className="card-text">Explore How-To's and learn best practices from our knowlege...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='support-home-bg-3'>
        <h2>About</h2>
        <Link
          to='/support/support-about'
          className='link-style'
        >
          <span >View all articles</span>
        </Link>
      </div>
      <div className='support-home-bg-4 container-fluid'>
        <div className="row row-cols-1 row-cols-md-3 g-0">
          <div className="col p-4 text-center">
            <div className="card h-100 img-home-2">
              <img src="/Images/light-bulb.png" className="card-img-top img-size" alt="" />
              <div className="card-body">
                <h5 className="card-title">Start Here</h5>
                <p className="card-text">Getting started with the Acetech is easy and simple...</p>
              </div>
            </div>
          </div>
          <div className="col p-4 text-center">
            <div className="card h-100 img-home-2">
              <img src="/Images/light-bulb.png" className="card-img-top img-size" alt="" />
              <div className="card-body">
                <h5 className="card-title">Attendance & Leaves</h5>
                <p className="card-text">Managing attendance and leaves of staff with Acetech...</p>
              </div>
            </div>
          </div>
          <div className="col p-4 text-center">
            <div className="card h-100 img-home-2">
              <img src="/Images/light-bulb.png" className="card-img-top img-size" alt="" />
              <div className="card-body">
                <h5 className="card-title">Salary and Payroll</h5>
                <p className="card-text">Managing salary and payroll is challenging for companies...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupportHome