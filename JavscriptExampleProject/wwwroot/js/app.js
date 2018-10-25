// Make h1 in header have different text
document.getElementById('h1').innerHTML = "Yo!";
// Make nav ul li elements get larger when you hover over them
const lis = document.querySelectorAll('li');

//function mouseOver() {
//    console.log("Yo");
//    this.style.fontSize = "20px";
//}
const mouseOver = () => { this.style.fontSize = "20px";}
//for (var i in lis) {
//    lis[i].onmouseover = mouseOver;
//}
//lis.forEach(function (li) {
//    li.onmouseover = mouseOver;
//})
lis.forEach ()

// Add another element to the main element
var foo = document.createElement("p");
var bar = document.createTextNode("I'm still Jenny from the block.");
foo.appendChild(bar);

var element = document.getElementById("para1");
element.appendChild(foo);
// Dynamically change the color of the background on the footer when the user hovers over it
var foot = document.querySelector('footer');
function mouseOver2() {
    this.style.backgroundColor = "orange";
}
foot.onmouseover = mouseOver2;
// Change the font size of the paragraphs in the main element when the user clicks them
var para = document.querySelectorAll('main p');
//for (var i in para) {
//    para[i].onclick = function () { this.style.fontSize = "20px" };
//}
para.forEach(function (p) {
    p.onclick = function () { this.style.fontSize = "20px" };
})
// Change the text in the footer when the user clicks it
foot.onclick = function () {
    this.innerHTML = "It's JENNY!";
}

// Remove the h1 element in the header
var parent = document.getElementById("parent");
var child = document.getElementById("h1");
parent.removeChild(child);

// Put something in the place of the h1 in the header
var foo = document.createElement("h1");
var bar = document.createTextNode("Yo, I'm back and I'm still from the block!");
foo.appendChild(bar);
//var navBar = document.querySelector("nav");
//var navBar = document.getElementsByTagName('nav').item(0);
var navBar = document.getElementsByTagName('nav')[0];
var element = document.getElementById("parent");
element.insertBefore(foo, navBar);

// Change the text in one of the paragraph tags in the main element
var para2 = document.getElementById("para2");
para2.innerHTML = "Used to have a little now I have alot.";

// Change the size of the header element to 200px using grid syntax
var gridstuff = document.getElementById("container");
gridstuff.style.gridTemplateRows = "200px auto auto";
