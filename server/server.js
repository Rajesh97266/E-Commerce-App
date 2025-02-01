const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
//create a database connection
mongoose
  .connect(
    "mongodb+srv://rajesh97266:YukyjiksPzXjp6Qf@cluster0.cfnjl.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
    console.log("Connection failed!" + error);
  });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);


app.use(cookieParser());
app.use(express.json());

app.listen(PORT ,()=>{
    console.log(`Server is running on port ${PORT}`)
})