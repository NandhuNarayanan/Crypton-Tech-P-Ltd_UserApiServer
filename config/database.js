const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = mongoose.connect("mongodb+srv://galaxy:galaxy@galaxy.r7h7jli.mongodb.net/crypton-tech");
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDb;
