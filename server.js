const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

mongoose.connect("mongodb+srv://admin:admin@cluster0.t0ntt.mongodb.net/details")

// schema
const signupSchema= {
    email: String,
    username: String,
    password: String,
    dateofbirth: String
}

const SignUp = mongoose.model("SignUp", signupSchema);

app.get("/", function(req, res){
    res.sendFile(__dirname + "/login.html");
})

app.post("/", function(req, res){
    let newSignUp = new SignUp({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        dateofbirth: req.body.dateofbirth
    });
    newSignUp.save();
    res.redirect('/');
})

app.listen(3000, function(){
    console.log("server is running on 3000");
})



/* npm init

npm install express body-parser mongoose nodemon

nodemon index.js

*/