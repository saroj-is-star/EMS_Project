import React from 'react'

const PayEmployees = () => {
  return (
    <div className='pay_employee_bg'>
      <div className='text-center'>
      <div >
        <img src="/Images/pay-emp-bg.png" alt="PayEmpBg" className='img-pay-emp'/>
      </div>
      <div className=''>
        <p>Pay your employees using SalaryBox in simple steps</p>
      </div>
      <div>
        <p>Please complete your business KYC now to activate your SalaryBox wallet</p>
      </div>
      <div>
        <button className='btn btn-info'>Do KYC Verification</button>
      </div>
      </div>
    </div>
  )
}

export default PayEmployees