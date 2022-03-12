import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Home from "../components/home/Home";
import AuthRoute from "./AuthRoute";
import GuestRoute from "./GuestRoute";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<GuestRoute> <Home/> </GuestRoute>}/>
      <Route path="/login" element={<GuestRoute> <Login/> </GuestRoute>}/>
      <Route path="/register" element={<GuestRoute> <Register/> </GuestRoute>}/>
    </Routes>
  )
}

export default AppRoutes