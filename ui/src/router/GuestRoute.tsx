import React from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

function GuestRoute (props: any) {
  const token: string = useSelector((state: any) => state.auth.access_token)

  return token ? <Navigate to="/" /> : props.children
}

export default GuestRoute