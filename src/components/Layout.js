import React, { useState } from "react"

import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

import "../assets/css/main.css"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebarHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <React.Fragment>
      <Navbar toggleSidebar={toggleSidebarHandler} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebarHandler} />
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default Layout
