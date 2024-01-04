import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Employee from './Components/Employee'
import Category from './Components/Category'
import Profile from './Components/Profile'
import AddCategory from './Components/AddCategory'
import AddEmployee from './Components/AddEmployee'
import EditEmployee from './Components/EditEmployee'
import Start from './Components/Start'
import EmployeeLogin from './Components/EmployeeLogin'
import EmployeeDetail from './Components/EmployeeDetail'
// import PrivateRoute from './Components/PrivateRoute'
import AdminRegistration from './Components/AdminRegistration'
import EmployeeMenu from './Components/EmployeeMenu'
import Attendence from './Components/Attendence'
import Report from './Components/Report'




function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start />}></Route>
        <Route path='/adminregistration' element={<AdminRegistration />}></Route>
        <Route path='/adminlogin' element={<Login />}></Route>
        <Route path='/employee_login' element={<EmployeeLogin />}></Route>
        <Route path='/employee_details/:id' element={<EmployeeDetail />}></Route>
        <Route path='/dashboard' element={
          // <PrivateRoute>
            <Dashboard />
          // </PrivateRoute>
        }>
          <Route path='' element={<Home />}></Route>
          <Route path='/dashboard/employeemenu' element={<EmployeeMenu />}>
            {/* <Route path='/dashboard/employeemenu/employee' element={<Employee/>}></Route> */}
          </Route>
          <Route path='/dashboard/employee' element={<Employee />}></Route>
          <Route path='/dashboard/category' element={<Category />}></Route>
          <Route path='/dashboard/add_category' element={<AddCategory />}></Route>
          <Route path='/dashboard/profile' element={<Profile />}></Route>
          <Route path='/dashboard/attendence' element={<Attendence />}></Route>
          <Route path='/dashboard/report' element={<Report />}></Route>
          <Route path='/dashboard/add_employee' element={<AddEmployee />}></Route>
          <Route path='/dashboard/edit_employee/:id' element={<EditEmployee />}
          ></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App