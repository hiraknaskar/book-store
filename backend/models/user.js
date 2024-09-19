const mongoose= require("mongoose");
const { type } = require("os");
const user = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique:true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required:true,
    },
    address:{
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        default:"https://fonts.googleapis.com/icon?family=Material+Icons",
    },
    role:{
        type: String,
        default: "user",
        enum:["user","admin"],
    },
    favourites:[
        {
            type:mongoose.Types.ObjectId,
            ref:"book",
        },
    ],
    cart:[
        {
            type:mongoose.Types.ObjectId,
            ref:"book",
        },
    ],
    orders:[
        {
            type:mongoose.Types.ObjectId,
            ref:"order",
        },
    ],
},
    {timestamps:true}
); 
module.exports=mongoose.model("user",user);