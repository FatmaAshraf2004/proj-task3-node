const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  title: { type: String, trim: true, required: true },
  text: { type: String, trim: true, required: true },
});

mongoose.model("notes", userSchema);
