const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

// __dirname already exists in CommonJS
app.use(express.static(path.join(__dirname, "frontend/project/dist")));

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "frontend/project/dist/index.html")
  );
});

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.use("/api/auth", require("./routes/auth"));
app.use("/api/posts", require("./routes/post"));

app.listen(5000, () => console.log("Server running on port 5000"));
