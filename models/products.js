const mongoose = require("mongoose");
const { Schema } = mongoose;

userSchema ProductSchema=new Schema({
  category:{type:Schema.Types.ObjectId, ref:'Category'},// will have to add category.js model later
  name:String,
	price:Number,
	image:String
});

module.exports=mongoose.model('Product',ProductSchema);
