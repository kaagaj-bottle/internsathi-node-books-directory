require("dotenv").config();
const PORT = process.env.PORT;
const MONGODB_URI = `mongodb+srv://kaagaj-bottle:${process.env.MONGODBURIPASSWORD}@cluster0.kohug.mongodb.net/?retryWrites=true&w=majority`;

module.exports = {
  PORT,
  MONGODB_URI,
};
