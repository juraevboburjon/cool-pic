require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const path = require("path");

const postRoute = require("./routes/post.route");
const authRoute = require("./routes/auth.route");
const commentRoute = require("./routes/comment.route");

const corsOptions = {
  origin: ["http://localhost:3000", "https://cool-pic.vercel.app"], // Укажите URL фронтенда
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

const PORT = process.env.PORT || 8000;

// Routes
app.use("/api/post", postRoute);
app.use("/api/auth", authRoute);
app.use("/api/comment", commentRoute);

app.get("/", (req, res) => {
  res.send("Server is running!");
});

module.exports = app;

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
