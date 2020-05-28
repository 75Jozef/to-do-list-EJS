//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser"); // musíš dať bodyParser takto
const date = require(__dirname + "/date.js"); // tptp je ejs modularita, vytvoril som si modul sám, v ňom mám finkciu a exportujem jej returned hodnotu a sem do app.js ju prenášam len tak, že do nejakej premennej naviažem pairmo tento modul, ktorý do nej prenesie hodnotu, keď ju zavolá pri priradení

const app = express();

let items = [];
let works = [];

app.set("view engine", "ejs"); // toto musí byť vždy ak chcem používať templating; najpr inštauj "npm i ejs" a potom takto používať

app.use(bodyParser.urlencoded({extended: true})); // toto musí byť vždy ak chcem čítať POST!!!

app.use(express.static("public")); // tu určíte folder, z ktorého bude express ťahať súbory pre web page; ostatné nevidí, musíme  mu to explicitne určiť touto funkciou app.use; tento web totiž beží na serveri a nie u klienta na počítačí resp. nie v jeho folderoch ; ale na folderoch servera

app.get("/", function(req, res) {
let day = date.getDay;

  res.render("list", {
    listTitle: day,
    mojePlany: items
  });

});

app.post("/", function(req, res) {
  let item = req.body.newItem;
if (req.body.list === "Work") {
  works.push(item);
    res.redirect("/work");
} else {
  items.push(item);
  res.redirect("/");
}

});

app.get("/work", function (req, res) {
  res.render("list", {
    listTitle: "Work List",
    mojePlany: works
  });
});

app.post("/work", function(req,res) {
  let item = req.body.newItem;
  works.push(item);
  res.redirect("/work");
});


app.get("/about", function(req,res) {
  res.render("about");
});


app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
