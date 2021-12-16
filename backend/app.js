const express= require("express");
const app = express();
const session = require("express-session");



app.use(session({secret:"my secret",resave:false,saveUninitialized:false})) 
//





app.get("/",(req,res)=>{
  res.send("hello")
})


const PORT = process.env.PORT || 8001;

app.listen(PORT,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("app is running"+PORT);
})