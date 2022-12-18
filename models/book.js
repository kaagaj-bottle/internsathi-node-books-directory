const mongoose = require("mongoose");

const mongooseSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  publisher: String,
  description: String,
  datePublished: Date,
  genre: String,
  url: String,
});

mongooseSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Book", bookSchema);
