//import installations
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config();

//mongoose.com connection to add try catch error
const connect = async () => {
  try {
    await mongoose.connect("process.env.MONGO");
    //connected to mongoDB
    console.log("connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};
//connected or disconnected error message
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});
mongoose.connection.on("connected", () => {
  console.log("mongoDB connected!");
});

//connect backend with localhost 8800
app.listen(8800, () => {
  console.log("connected to backend.");
});
