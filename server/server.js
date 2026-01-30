const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// API ROUTES
app.use("/api", require("./routes/api"));

mongoose
  .connect("mongodb://127.0.0.1:27017/edufolio")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
