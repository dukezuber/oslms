import express from "express";
import {PORT, MONGOOSEURL} from "./Config/config.js";
import  mongoose from "mongoose";
import route from "./Routes/routes.js";
import  jwt from "jsonwebtoken";
import { ValidationError } from 'express-validation';
try {
  await mongoose.connect(MONGOOSEURL);
    console.log("Connect DB")
} catch (error) {
  console.log("Discunnect DB..");
}

const app = express();

app.use(express.json());

app.use(route);

app.use('*',(req,res)=>{
  res.json({msg:'404'})
});

// use validation
app.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    // Send a custom error response for validation errors
    return res.status(err.statusCode).json({
      status: err.statusCode,
      error: 'Validation Error',
      details: err.details.body.map((detail) => detail.message), // Custom response
    });
  }

  // Handle other types of errors
  return res.status(500).json({
    status: 500,
    message: 'Internal Server Error',
  });
});


// use port.
app.listen(PORT, () => {
    console.log(`Port listen ${PORT}`);
});
