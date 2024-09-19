const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
require("./connection/conn");
const user =require("./routes/user");
const books =require("./routes/book");
const favourite= require("./routes/favourite");
const cart = require("./routes/carts");

// //getting from server
// app.get("/",(req,res)=>{
//     res.send("Hello from backend side ")
// });


//routes 
app.use("/api/v1",user);
app.use("/api/v1",books);
app.use("/api/v1",favourite);
app.use("/api/v1",cart);
//creating port
app.listen(process.env.PORT,()=>{
    console.log(`server started from port ${process.env.PORT}`);
});