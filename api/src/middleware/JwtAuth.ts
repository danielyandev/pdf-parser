const jwt = require("jsonwebtoken")
import {JWT_TOKEN_SECRET_KEY} from "../config/constants"

export const verifyToken = (req: any, res: any, next: any) => {
  const token = req.body.token || req.query.token || req.headers["x-access-token"]
  if (!token) {
    return res.status(403).send({
      message: "No token provided"
    })
  }

  jwt.verify(token, JWT_TOKEN_SECRET_KEY, (err: any, decoded: any) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized"
      })
    }
    next()
  })
}