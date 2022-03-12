import React from "react";
import {Navigate} from "react-router-dom";

function GuestRoute (props: any) {

  return false ? props.children : <Navigate to="/"/>
}

export default GuestRoute