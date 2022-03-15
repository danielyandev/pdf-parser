import express, {Request, Response} from "express";
import AuthController from "./controllers/AuthController";
import {verifySignUpMiddleware} from "./middleware/VerifySignUp";
import {verifyToken} from "./middleware/JwtAuth";
import UploadController from "./controllers/UploadController";

const multer = require("multer")
const cors = require("cors")
const upload = multer({ dest: './uploads/' })
const app = express()

// allow cors
app.use(cors())
// parse requests of content-type - application/json
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// tester
app.get( "/hi", ( req: Request, res: Response ) => { res.send( "hi" ) })

app.post( "/api/login", AuthController.login)
app.post( "/api/register", [verifySignUpMiddleware], AuthController.register)
app.post( "/api/upload", [upload.single('file'), verifyToken], UploadController.upload)

export default app