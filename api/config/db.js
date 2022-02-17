const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

mongoose
  .connect(
    "mongodb+srv://dev:v90jHR3AltOdE944@cluster0.4jyb3.mongodb.net/team1?retryWrites=true&w=majority",
  )
  .then(() => console.log("mongodb connected"))
  .catch(err => {
    console.log(err);
    process.exit();
  });
