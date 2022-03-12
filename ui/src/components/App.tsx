import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import AuthRoute from "../router/AuthRoute";
import Home from "./Home";
import GuestRoute from "../router/GuestRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthRoute> <Home/> </AuthRoute>}/>
      <Route path="/login" element={<GuestRoute> <Login/> </GuestRoute>}/>
      <Route path="/register" element={<GuestRoute> <Register/> </GuestRoute>}/>
    </Routes>
  )
}

export default App;
