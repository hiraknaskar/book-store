const jwt = require("jsonwebtoken");
const user = require("../models/user");

const authenticateToken=(req,res,next)=>{
    const authHeader= req.headers["authorization"];
    const token =authHeader && authHeader.split(" ")[1];
    if(token==null){
        return res.status(401).json({message: "Authentication token required"});
    }
    jwt.verify(token, "book111", (err, user)=>{
        if(err){
            return res.status(403).json({message: "Token expired. please signIn again"});
        }
        req.user=user;
        next();
    });
};
module.exports={authenticateToken};