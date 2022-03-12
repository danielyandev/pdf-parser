import React, {useState} from "react";
import "./inputs.css"

function PasswordInput(props: any) {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <input type={visible ? 'text' : 'password'} {...props} />
      <i className={`far toggle-password ${visible ? 'fa-eye' : 'fa-eye-slash'}`} onClick={() => setVisible(!visible)}/>
    </div>
  )
}

export default PasswordInput