import React from 'react'
import Dashboard from './Components/Dashboard'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Dashboard />
    <Outlet />
    </>
  )
}

export default Layout