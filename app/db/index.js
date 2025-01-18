const mongoose = require("mongoose");
const { urldb } = require("../config");

mongoose.connect(urldb).then(() => console.log("mongo db connected"));

const db = mongoose.connection;

module.exports = db;
