import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'
import './common.css'

const Layout = () => {
  return (
    <div className='dashboard-admin'>
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
