const mongoose= require("mongoose");
const { type } = require("os");

const order = new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
            ref:"user",
    },
    book:{
        type:mongoose.Types.ObjectId,
        ref:"books",
    },
    book:{
        type:mongoose.Types.ObjectId,
        ref:"books",
    },
    status:{
        type:String,
        default: "Order Placed",
        enum:["Order Placed","Out for delivery","Delivered","Canceled"]
    },
    
},
{timestamps: true},
);
module.exports=mongoose.model("order",order);