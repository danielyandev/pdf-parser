import {User} from "../models/User";

export const verifySignUpMiddleware = async (req: any, res: any, next: any) => {

  const user: any = await User.findOne({email: req.body.email}).exec()

  if (user) {
    return res.status(400).send({
      message: "Email is already in use"
    })
  }

  if (req.body.password !== req.body.password_confirmation) {
    return res.status(400).send({
      message: "Password should be confirmed"
    })
  }

  next()
}