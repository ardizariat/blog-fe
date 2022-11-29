import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const index = () => {
  return (
    <div className="nk-app-root">
      {/* main @s */}
      <div className="nk-main ">
        {/* sidebar @s */}
        <Sidebar />
        {/* sidebar @e */}
        {/* wrap @s */}
        <div className="nk-wrap ">
          {/* main header @s */}
          <Navbar />
          {/* main header @e */}
          {/* content @s */}
          <Outlet />
          {/* content @e */}
          {/* footer @s */}
          <Footer />
          {/* footer @e */}
        </div>
        {/* wrap @e */}
      </div>
      {/* main @e */}
    </div>
  )
}

export default index
