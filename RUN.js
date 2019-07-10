var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose")

mongoose.connect("mongodb+srv://test:test@authentication-ltrsa.mongodb.net/test?retryWrites=true&w=majority",{ useNewUrlParser: true });

var MongoSchema = new mongoose.Schema({
  Name:String,
  Surname:String,
  Email:String,
  Age:Number,
  Password:String
});

var Details = mongoose.model('Details',MongoSchema);
var app = express();
var urlencodedParser = bodyParser.urlencoded({extended:false});

app.use("/assets",express.static("assets"));

app.set('view engine','ejs');

app.get('/sign_in',function(req,res){
    res.render('Sign_In_Page',{Status_CHeck:"LOGIN"});
});

app.get('/',function(req,res){
    res.render('Sign_Up_Page',{Error:"Join Now"});
});

app.post('/',urlencodedParser,function(req,res){

  var check = {Email:req.body.Email};
  var Account = Details.find(check,function(err,data){
    if(err) throw err;
    if(data.length !=0)
    {
        console.log("EXISTS");
        res.render('Sign_Up_Page',{Error:"User Account Already Exists"});
    }
    else
    {
      console.log("NEW");
      if(req.body.Password === req.body.Confirm_Password)
      {
          var me = Details({Name:req.body.Name,Surname:req.body.Surname,Email:req.body.Email,Age:req.body.Age,Password:req.body.Password}).save(function(err){
            if(err) throw err;
          });
          res.render('Sign_In_Page',{Status_CHeck:"Sign in"});
      }
    }
  });
})

app.post('/Sign_In',urlencodedParser,function(req,res){
    var check = {Email:req.body.login,Password:req.body.passwrd}
    var Account = Details.find(check,function(err,data){
      if(err) throw err;
      if(data.length !=0)
      {
          console.log("EXISTS");
          res.render('Sign_In_Page',{Status_CHeck:'LOGIN Details Correct Welcome!!!'});
      }
      else
      {
        console.log("NEW");
        res.render('Sign_In_Page',{Status_CHeck:"Incorrect Email or Password"});
      }
    });
});

console.log("Now listening on port 3000");
app.listen(3000);
