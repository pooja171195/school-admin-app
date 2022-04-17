const express = require("express");

//const path = require("path");

const cors = require("cors");
const connect = require("./src/config/db");
const adminController = require("./src/controllers/teacher.controller");

const app = express();

app.use(cors());

app.use(express.json());
app.use("/teachers", adminController);

app.listen(process.env.PORT || 8080, async () => {
  try {
    await connect();
    console.log("listening on port 8080");
  } catch (e) {
    console.log("e:", e.message);
  }
});