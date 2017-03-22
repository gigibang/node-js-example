var person = {
    firstname: "Simon",
    lastname: "Mo",
    age: 28
}
console.log(person);

var bacon = function addNumber(a, b) {
    console.log("blablab");
}

var movies = require('./emily');
var movies = require('./bucky');

var fs = require('fs');
// fs.writeFileSync("corn.txt", "Corn is good!")
console.log(fs.readFileSync("corn.txt").toString());

var path=require('path');
var websiteHome="Desktop/Bucky//thenewboston/home.html";
var websiteAbout="Desktop/Bucky/thenewboston/about.html";

console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));
console.log(__dirname);