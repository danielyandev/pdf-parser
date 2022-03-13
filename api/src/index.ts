import express from "express"
import AuthController  from "./controllers/AuthController"
import {PORT} from "./config/constants"
import {verifySignUpMiddleware} from "./middleware/VerifySignUp"
import {connectDb} from "./config/database";

const cors = require("cors")
const app = express()

// initiate mongoDB connection
connectDb()

// allow cors
app.use(cors())
// parse requests of content-type - application/json
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// tester
app.get( "/hi", ( req: any, res: any ) => { res.send( "hi" ) })

app.post( "/api/login", AuthController.login)
app.post( "/api/register", [verifySignUpMiddleware], AuthController.register)

// start the express server
app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`)
})
