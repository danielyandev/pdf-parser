import React from "react";
import PasswordInput from "../inputs/PasswordInput";
import "./Auth.css"
import {Link, Navigate} from "react-router-dom";

function Login() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9 p-0 bg-image-login"/>
        <div className="col-md-3 "/>
      </div>
      <div className="form-wrapper-login p-5">

        <p className="text-center color-primary form-header">SIGN IN</p>
        <input type="text" className="form-control mt-4" placeholder="Email or phone"/>
        <PasswordInput className="form-control mt-4" placeholder="Password"/>
        <button className="btn form-btn mt-5 w-100">SIGN IN</button>

        <p className="text-center mt-5">
          New user? <Link to="/register" className="fw-bold color-primary">Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login