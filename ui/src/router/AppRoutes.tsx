import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "../components/auth/login/Login";
import Register from "../components/auth/Register";
import Home from "../components/home/Home";
import AuthRoute from "./AuthRoute";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <AuthRoute path="/" component={Home} />
    </Routes>
  )
}

export default AppRoutes