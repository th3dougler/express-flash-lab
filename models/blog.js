const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const blogSchema = new Schema({
  name: String,
  title: String,
  message: String,
},{
    timestamps: true,
});

module.exports = mongoose.model("blog", blogSchema);
