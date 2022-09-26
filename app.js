//jshint esversion:6
const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();
const date=require(__dirname+"/date.js");
//ten file
let workItems=[];
var items=["buy Food","cook food","eat food"];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.get("/", function(req, res) {
  let day=  date.getDay();
  res.render("list",{
    listTitle:day,
    newListItem:items,
  });
});
app.post("/",function(req,res){

  var item=req.body.newItem;
  if(req.body.list==="Work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
  items.push(item);
  res.redirect("/");
}
});
app.get("/work",function(req,res){
  res.render("list",{
    listTitle:"Work List",
    newListItem:workItems
  })
});
app.get("/about",function(req,res){
  res.render("about");
})
app.post("/work",function(req,res){
  var item=req.body.newItem;
  items.push(item);
  res.redirect("/work");

});




app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
