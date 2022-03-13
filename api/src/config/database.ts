import {connect, connection} from "mongoose"
import {MONGO_URI} from "./constants";

export const connectDb = () => {
  connect(MONGO_URI)
  connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
}