const express = require('express');
const ejs=require("ejs");
const PORT=5000;
const bodyParser=require('body-parser')
const mongoose=require('mongoose');
const User=require('./models/Users');

mongoose.connect("mongodb://localhost:7814/usersDB",{
  useNewUrlParser:true,
  useUnifiedTopology:true});
const app = express();

app.use(express.static("public"));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true }));
// Start serv & listen on port 5000.
app.listen(5000, function () {
  console.log('Node listening on port 5000')
})

//Listen for get request on root url. eg. http://localhost:5000
app.get("/", function (req, res) {
  res.render("index")
});
app.get("/register", function (req, res) {
    res.render("register")
  });
  app.get("/login", function (req, res) {
    res.render("login")
  });
    /////////PORTS REQUESTS ARE HERE /////////////
    app.post('/register',(req,res)=>{
       const email=req.body.email;
       const password= req.body.password;

       const newUser= new User({
           email:email,
           password:password
       })
       newUser.save((err)=>{
           err? console.log(err):res.send("Successfully Created User");
       });
    });
    app.post('/login',(req,res)=>{
        const email=req.body.email;
        const password=req.body.password;
    })
    