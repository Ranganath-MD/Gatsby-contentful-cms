
import React from "react"
import Home from "./Home"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="main">
      <div className="header">
        <Home />
      </div>
      <div className="child-components">
        <main>{children}</main>
      </div>
    </div>
  )
}


export default Layout
