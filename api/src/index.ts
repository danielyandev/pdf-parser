import express from "express";
const app = express();

// Constants
const PORT: number = 8080;

// define a route handler for the default home page
app.get( "/", ( req: any, res: any ) => {
    res.send( "hi" );
} );

// start the express server
app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});
