//import express
import express from "express";
const app = express();

//connect localhost to backend
app.listen(8800, () => {
  console.log("connected to backend");
});
