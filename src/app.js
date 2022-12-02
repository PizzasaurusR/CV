const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("/public"));


app.get("/", function(req, res){
    res.sendFile(__dirname +"/index.html");
})

// scroll effect 
$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");
  
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];
  
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible");
      }
    }
  });

//   port
app.listen(3000, function(){
    console.log("Server is running on port 3000");
})