import React from "react";
import "./Header.css"

function Header() {
  return (
    <div className="header d-flex justify-content-between">
      <img src="/assets/images/logo.png" alt="logo" className="mx-3 mt-2"/>

      <div className="d-flex align-items-center mr-5">
        <i className="fa fa-user-circle fs-1 color-primary"/>
        <span className="mx-3">Name Surname</span>
      </div>
    </div>
  )
}

export default Header