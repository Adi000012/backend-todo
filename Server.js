const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();
const routes = require("./routes/ToDoRoutes");
const cors = require("cors");

const app = express();
// Middleware
app.use(express.json());
app.use(cors());

app.use("/api", routes);

app.listen(process.env.PORT || 5000 , ()=>
{
  console.log("server is running...");
});
