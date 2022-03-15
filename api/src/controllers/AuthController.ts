import {JWT_TOKEN_SECRET_KEY} from "../config/constants"
import {User} from "../models/User"
import {Request, Response} from "express";

const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const login = async (req: Request, res: Response) => {
  const user: any = await User.findOne({email: req.body.email}).exec()

  if (!user) {
    return res.status(404).send({message: "User Not found"})
  }

  const passwordIsValid = bcrypt.compareSync(
    req.body.password,
    user.password
  )

  if (!passwordIsValid) {
    return res.status(401).send({
      message: "Invalid credentials"
    })
  }

  const token = jwt.sign({id: user._id}, JWT_TOKEN_SECRET_KEY, {
    expiresIn: 86400 // 24 hours
  })

  const {name, surname, email} = user
  res.status(200).send({
    user: {name, surname, email},
    access_token: token
  })
}

const register = async (req: Request, res: Response) => {
  try {
    await User.create({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8)
    })
    res.status(204).send({message: "User was registered successfully!"})
  } catch (e: any) {
    res.status(400).send({message: e.message})
  }
}

export default {
  login,
  register
}