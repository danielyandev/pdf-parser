const jwt = require("jsonwebtoken")
import {JWT_TOKEN_SECRET_KEY} from "../config/constants"

export const verifyToken = (req: any, res: any, next: any) => {
  let token = req.body.token || req.query.token || req.headers.authorization
  if (!token) {
    return res.status(403).send({
      headers: req.headers,
      message: "No token provided"
    })
  }

  // example: Bearer token
  // need to take tre 2nd part
  token = token.split(' ')[1]
  jwt.verify(token, JWT_TOKEN_SECRET_KEY, (err: any, decoded: any) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized"
      })
    }
    next()
  })
}