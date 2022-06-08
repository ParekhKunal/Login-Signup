const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const routesUrls = require("./routes/routes");

const app = express();
dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log("Database Connected")
);

app.use(express.json());
app.use(cors());
app.use("/app", routesUrls);
app.listen(4000, () => console.log("Server is running on port 4000"));

//create a react-app
//cd into app create a new folder for backend
//npm init
//npm install express nodemon mongoose dotenv cors
//touch server.js
//inside a package.js place "start":"nodemon server.js" to start a backend server
//Create a .env file in backend folder where we have to place the path of Database i.e DATABASE_ACCESS:""
//Create a models folder for making Schema of Database
//Create a test.http for testing the API to store the value in database
//install axios using npm install axios for post function to front