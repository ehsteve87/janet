var mongoose = require("mongoose");
var gifSchema = new mongoose.Schema({
  call: String,
  url: String,
  creator: String
});

module.exports = mongoose.model("Gif", gifSchema);