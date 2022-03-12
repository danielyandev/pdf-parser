import React from "react";
import PasswordInput from "../inputs/PasswordInput";
import "./Auth.css"
import {Link} from "react-router-dom";

function Register() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9 p-0 bg-image-register"/>
        <div className="col-md-3 "/>
      </div>
      <div className="form-wrapper-register p-5">

        <p className="text-center color-primary form-header">SIGN UP</p>
        <input type="text" className="form-control mt-4" placeholder="Name"/>
        <input type="text" className="form-control mt-4" placeholder="Surname"/>
        <input type="text" className="form-control mt-4" placeholder="Email"/>
        <PasswordInput className="form-control mt-4" placeholder="Password"/>
        <PasswordInput className="form-control" placeholder="Confirm password"/>

        <input type="checkbox" id="checkbox-agree"/><span> </span>
        <label className="color-primary" htmlFor="checkbox-agree">
          I agree to the
          <a href="#" className="fw-bold color-primary"> Terms of Service </a>
          and
          <a href="#" className="fw-bold color-primary"> Privacy Policy</a>
        </label>

        <button className="btn form-btn mt-5 w-100">SIGN UP</button>

        <p className="text-center mt-5">
          Have an account? <Link to="/login" className="fw-bold color-primary">Sign in</Link>
        </p>
      </div>
    </div>
  )
}

export default Register