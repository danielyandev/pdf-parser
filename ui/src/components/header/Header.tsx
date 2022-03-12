import React from "react";
import "./Header.css"

function Header() {
  return (
    <div className="header d-flex justify-content-between">
      <img src="/assets/images/logo.png" alt="logo" className="mx-3 mt-2"/>

      <div className="d-flex align-items-center mr-5">

        <div className="dropdown text-end">
          <a href="#" className="d-block link-dark text-decoration-none d-flex align-items-center"
             id="account-dropdown"
             data-bs-toggle="dropdown"
             aria-expanded="false">
            <i className="fa fa-user-circle fs-1 color-primary"/>
            <span className="mx-3">Name Surname</span>
          </a>
          <ul className="dropdown-menu text-small" aria-labelledby="account-dropdown">
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Header