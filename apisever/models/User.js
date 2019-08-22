// 数据库model文件
const mongoose = require("mongoose");

// schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: "http://localhost:9090/avatar.jpeg"
  }
});

// model
module.exports = mongoose.model("user", userSchema);
