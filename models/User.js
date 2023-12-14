const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
//   username: { type: String, required: true, min: 4 ,unique: true},
//   password: String,
//   author: { type:String, required: true},
username: { type: String, required: true, min: 4, unique: true },
password: String,
// ทำให้ฟิลด์ author ไม่จำเป็นต้องมี
author: { type: String, required: false },
});
const UserModel = model("User", UserSchema)
module.exports = UserModel;
