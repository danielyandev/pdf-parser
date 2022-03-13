import {User} from "../models/User";

const isValidEmail = (email: string) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  return email.match(regex)
}

export const verifySignUpMiddleware = async (req: any, res: any, next: any) => {

  if (!isValidEmail(req.body.email)) {
    return res.status(400).send({
      message: "Invalid email format"
    })
  }

  if (req.body.password !== req.body.password_confirmation) {
    return res.status(400).send({
      message: "Password should be confirmed"
    })
  }

  const user: any = await User.findOne({email: req.body.email}).exec()

  if (user) {
    return res.status(400).send({
      message: "Email is already in use"
    })
  }

  next()
}