import React from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

function AuthRoute (props: any) {
  const token: string = useSelector((state: any) => state.auth.access_token)

  return token ? props.children : <Navigate to="/login"/>
}

export default AuthRoute