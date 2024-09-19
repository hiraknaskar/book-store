const mongoose = require("mongoose");

const conn =async() =>{
    //if any error comes then display the error
    try{
        // if no error then run this
        await mongoose.connect(`${process.env.URI}`);
        console.log("connected to database");
    }catch(error){
        //if error , then display
        console.log(error)
    }
};

//running the error finding function
conn();