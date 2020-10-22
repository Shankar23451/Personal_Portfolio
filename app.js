// <!--app.js, Umasangar Ramasamy, 301118867, October 16th 2020-->
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var unirest = require("unirest");

app.get("/", function(req,res){
    res.render("landing.ejs");
});

app.get("/aboutme", function(req, res){
   res.render("aboutme.ejs");
});

app.get("/sign-up", function(req, res){
   res.render("sign-up.ejs");
});

app.get("/projects", function(req, res){
   res.render("projects.ejs");
});

app.get("/services", function(req, res){
   res.render("services.ejs");
});

app.get("/contact", function(req, res){
   res.render("contact.ejs");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Personal portofolio server has started!!");
});