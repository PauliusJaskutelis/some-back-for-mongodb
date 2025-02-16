const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    id: { type: Number, require: true, unique: true },
    first_name: { type: String, require: true, unique: false },
    last_name: { type: String, require: true, unique: false },
    email: { type: String, require: true, unique: false },
    password: { type: String, require: true, unique: false },
    adress: { type: String, require: false, unique: false },
});

module.exports = mongoose.model("User", UserSchema);