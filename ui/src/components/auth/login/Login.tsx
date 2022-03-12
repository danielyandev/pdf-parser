import React from "react";
import "./Login.css"

function Login() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9 p-0 bg-image"/>
          <div className="col-md-3 "/>
        </div>
        <div className="form-wrapper p-5">

          <p className="text-center color-primary form-header">SIGN IN</p>
          <input type="text" className="form-control mt-4" placeholder="Email or phone"/>
          <input type="text" className="form-control mt-4" placeholder="Password"/>

          <button className="btn form-btn mt-5 w-100">SIGN IN</button>
        </div>
      </div>
    )
}

export default Login