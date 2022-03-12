import React from "react";
import {Navigate} from "react-router-dom";

function AuthRoute (props: any) {

  return false ? props.children : <Navigate to="/login"/>
}

export default AuthRoute