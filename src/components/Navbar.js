import React from "react"
import { FaAlignRight } from "react-icons/fa"

import PageLinks from "../constants/links"
import logo from "../assets/images/logo.svg"

const Navbar = ({toggleSidebar}) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Logo" />
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
