const express = require('express');
const fs = require('fs');
const app = express();
app.use ('/f', express.static('files'));
//app.use('/pages',express.static('pages'));
const port = 4000;
var books = fs.readFileSync('books.json','utf8');

app.set('view engine','ejs');
app.get('/',function(req,res){
  res.sendFile(__dirname+"/index.html");
})
//API AIzaSyCbIZ6s5BUvmC-TK-1rT8eBpOlazSGqu50
// app.get('/produse/:id',(req,res)=>{
//   console.log(req.params.id);
//   var idprodus=req.params.id;
//   // onContentReady: function(c){
//   //   return c.id===idprodus;
//   // }
//   var date=carti.find(function(c){return c.id===idprodus});
//   res.render('profil',{carte: date});
//
//   var carti = JSON.parse(books);
//   console.log(carti);
// });
app.get("/index", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.get("/form", function(req, res) {
    res.sendFile(__dirname + "/form.html");
});
app.get("/about", function(req, res) {
    res.sendFile(__dirname + "/about.html");
});
app.get("/cursuri", function(req, res) {
    res.sendFile(__dirname + "/cursuri.html");
    return;
});
app.get("/contact", function(req, res) {
    res.sendFile(__dirname + "/contact.html");
    return;
});
app.get("/joc", function(req, res) {
    res.sendFile(__dirname + "/joc.html");
    return;
});

app.get("/summary", function(req, res){
  var formData = req.query;
  console.log(formData);
  res.render('summary', {fdata: req.query})
});


app.listen(port ,()=>{
  console.log("Server is on , on port :" , port);
})
