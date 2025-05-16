require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const postRoute = require("./routes/post.route");
const authRoute = require("./routes/auth.route");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8000;

// Routes
app.use("/api/post", postRoute);
app.use("/api/auth", authRoute);

const startapp = async () => {
  try {
    await mongoose
      .connect(process.env.DB_URI)
      .then(() => console.log("DB connected"));
    app.listen(PORT, () => console.log(`Listen on ${PORT} port`));
  } catch (error) {
    console.log(`Error on DB ${error}`);
  }
};
startapp();
