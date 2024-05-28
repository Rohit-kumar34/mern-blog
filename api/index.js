import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => {
    console.log(e.message);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/api/test", (req, res) => {
  console.log(res);
});
