import React, {useState} from "react";
import PasswordInput from "../inputs/PasswordInput";
import "./Auth.css"
import {Link, Navigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {signIn, signUp} from "../../requests/auth";
import {saveToken} from "../../store/actions/auth";
const {NotificationManager} = require("react-notifications");

function Register() {
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    password_confirmation: '',
    agreement: false
  })

  const handleFormSubmit = async (e: any) => {
    e.preventDefault()

    // check if both inputs are filled
    if (Object.values(form).includes('')) {
      NotificationManager.warning('All fields should be filled')
      return false
    }

    const {password, password_confirmation, email, agreement} = form
    if (password !== password_confirmation) {
      NotificationManager.error('Password should be confirmed')
      return false
    }

    if (!agreement) {
      NotificationManager.error('Please read and accept Terms of Service and Privacy Policy')
      return false
    }

    const {response, error} = await signUp(form)

    if (error) {
      const message = response.data.message || 'Sign Up error, please try later'
      NotificationManager.error(message)
      return false
    }

    NotificationManager.success('Sign Up success, you will be redirected soon')

    const res = await signIn({email, password})
    if (res.error) {
      NotificationManager.error('Sign In error, please try to login later')
      return false
    }

    dispatch(saveToken(res.response.data))

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
        <div className="col-md-9 p-0 bg-image-register"/>
        <div className="col-md-3 "/>
      </div>
      <div className="form-wrapper-register p-5">

        <p className="text-center color-primary form-header">SIGN UP</p>
        <form onSubmit={handleFormSubmit}>
          <input type="text" className="form-control mt-4" placeholder="Name" name="name"
                 defaultValue={form.name}
                 onChange={handleInputChange}/>
          <input type="text" className="form-control mt-4" placeholder="Surname" name="surname"
                 defaultValue={form.surname}
                 onChange={handleInputChange}/>
          <input type="text" className="form-control mt-4" placeholder="Email" name="email"
                 defaultValue={form.email}
                 onChange={handleInputChange}/>
          <PasswordInput className="form-control mt-4" placeholder="Password" name="password"
                         defaultValue={form.password}
                         onChange={handleInputChange}/>
          <PasswordInput className="form-control" placeholder="Confirm password" name="password_confirmation"
                         defaultValue={form.password_confirmation}
                         onChange={handleInputChange}/>

          <input type="checkbox" id="checkbox-agree" defaultChecked={form.agreement}
                 onChange={() => setForm({...form, agreement: !form.agreement})}/><span> </span>
          <label className="color-primary" htmlFor="checkbox-agree">
            I agree to the
            <a href="#" className="fw-bold color-primary"> Terms of Service </a>
            and
            <a href="#" className="fw-bold color-primary"> Privacy Policy</a>
          </label>

          <button className="btn form-btn mt-5 w-100" type="submit">SIGN UP</button>
        </form>

        <p className="text-center mt-5">
          Have an account? <Link to="/login" className="fw-bold color-primary">Sign in</Link>
        </p>
      </div>
    </div>
  )
}

export default Register