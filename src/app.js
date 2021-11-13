const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");
const hbs = require('hbs');

// public static path
console.log(path.join(__dirname,"../public"));
const staticPath = path.join(__dirname,"../public");
const partialPath = path.join(__dirname,"../partials");

app.set("view engine","hbs");
hbs.registerPartials(partialPath);

app.use("/",express.static(staticPath));

app.get("/", (req,res)=>
{
    //res.send("Welcome to Sahil Donde Channel");
    res.render("index");
});

app.get("/index", (req,res)=>
{
    //res.send("Welcome to Sahil Donde Channel");
    res.render("index");
});

app.get("/about", (req,res)=>
{
    //res.send("Welcome to Sahil Donde About Page");
    res.render("about");
});

app.get("/weather", (req,res)=>
{
    res.render("weather");
});

app.get("/*", (req,res)=>
{
    res.render("404_error",
    {
        errorMsg:"Oops 😖 !! Pages not found ❌"
    });
});

app.listen(port,()=>
{
    console.log(`Server is listening at Port no ${port}`);
});