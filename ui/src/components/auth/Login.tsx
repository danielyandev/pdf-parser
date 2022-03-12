import React, {useState} from "react";
import PasswordInput from "../inputs/PasswordInput";
import "./Auth.css"
import {Link, Navigate} from "react-router-dom";
import {signIn} from "../../requests/auth";
import {useDispatch} from "react-redux";
import {saveToken} from "../../store/actions/auth";
const {NotificationManager} = require("react-notifications");

function Login() {
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleFormSubmit = async (e: any) => {
    e.preventDefault()
    // check if both inputs are filled
    if (Object.values(form).includes('')) {
      return false
    }

    const {response, error} = await signIn(form)

    if (error) {
      NotificationManager.error('Invalid credentials')
      return false
    }

    dispatch(saveToken(response.data))

    return <Navigate to="/" />

  }

  const handleInputChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9 p-0 bg-image-login"/>
        <div className="col-md-3 "/>
      </div>
      <div className="form-wrapper-login p-5">

        <p className="text-center color-primary form-header">SIGN IN</p>

        <form onSubmit={handleFormSubmit}>
          <input type="text"
                 className="form-control mt-4"
                 placeholder="Email or phone"
                 name="email"
                 defaultValue={form.email}
                 onChange={handleInputChange}/>
          <PasswordInput className="form-control mt-4"
                         placeholder="Password"
                         name="password"
                         defaultValue={form.password}
                         onChange={handleInputChange}/>
          <button className="btn form-btn mt-5 w-100" type="submit">SIGN IN</button>
        </form>

        <p className="text-center mt-5">
          New user? <Link to="/register" className="fw-bold color-primary">Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login