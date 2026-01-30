const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  name: String,
  email: String,
  bio: String,
  skills: [String],
});

module.exports = mongoose.model("Profile", ProfileSchema);
