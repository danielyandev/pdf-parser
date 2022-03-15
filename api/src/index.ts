// configure env
// important to have at the very top
require("dotenv").config({path: __dirname + "/./../.env"})

import {APP_PORT} from "./config/constants"
import {connectDb} from "./config/database";
import app from "./app";

// initiate mongoDB connection
connectDb()

// start the express server
app.listen(APP_PORT, () => {
    console.log(`Running on http://localhost:${APP_PORT}`)
})
