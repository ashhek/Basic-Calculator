const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/bmiCalculator.html", function(req,res){
    res.sendFile(__dirname + "/bmicalculator.html");
 });

 app.post("bmiCalculator.html", function(req,res){
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);

    var bmi = weight/(height*height);
    res.send("Your bmi is " + bmi);

});

app.post("/", function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);


    var result = num1+num2;
    res.send("The calculation is "+result);
});

app.listen(3000, function(){
    console.log("server is ruuning in port in 3000");
});
