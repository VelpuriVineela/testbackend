const express = require("express");
const mongoose = require("mongoose");

const jobRoutes = require("./routes/job");

const app = express();

mongoose
  .connect(
    "mongodb+srv://vineela26:pLQQl3SyxnIobLfW@cluster0.uwtvw3o.mongodb.net/"
  )
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("Databae connection failed", err);
  });
app.use(express.json());

app.use("/api/v1/job", jobRoutes);

app.listen(10000, () => console.log("Server is up and running at port 5000"));
