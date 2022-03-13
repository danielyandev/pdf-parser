import express, {Request, Response} from "express"
import AuthController  from "./controllers/AuthController"
import {PORT} from "./config/constants"
import {verifySignUpMiddleware} from "./middleware/VerifySignUp"
import {connectDb} from "./config/database";
import {verifyToken} from "./middleware/JwtAuth";
import UploadController from "./controllers/UploadController";

const multer = require("multer")
const cors = require("cors")
const app = express()
const upload = multer({ dest: './uploads/' })

// initiate mongoDB connection
connectDb()

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

// start the express server
app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`)
})
