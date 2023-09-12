const mongoose = require("mongoose");
const {v4: uuid} = require("uuid");

const personSchema = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
        required: [true, "This is required"]
    }
});

module.exports = mongoose.model("Person", personSchema);