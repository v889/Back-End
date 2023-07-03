import mongoose, { Schema } from "mongoose";
const ProductSchema=new Schema({
    "title": {type:String,required:true,unique:true},
    "description":String,
    "price": {type:Number,required:true},
    "discountPercentage": Number,
    "rating": {type:Number,min:[0,'wrong min rating'],max:[5,'wrong max rating']},
    "stock": Number,
    "brand":String,
    "category": String,
    "thumbnail": String,
    "images":[String]
});
export const Product=mongoose.model('Product',ProductSchema)