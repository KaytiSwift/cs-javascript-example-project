// Make h1 in header have different text
document.getElementById('h1').innerHTML = "Yo!";

// Make nav ul li elements get larger when you hover over them
const lis = document.querySelectorAll('li');

//function mouseOver() {
//    console.log("Yo");
//    this.style.fontSize = "20px";
//}
const getBigger = function () { this.style.fontSize = "20px";}
//for (var i in lis) {
//    lis[i].onmouseover = mouseOver;
//}
//lis.forEach(function (li) {
//    li.onmouseover = mouseOver;
//})
lis.forEach((item) => item.onmouseover = getBigger);

// Add another element to the main element
const foo = document.createElement("p");
const bar = document.createTextNode("I'm still Jenny from the block.");
foo.appendChild(bar);

const element = document.getElementById("para1");
element.appendChild(foo);

// Dynamically change the color of the background on the footer when the user hovers over it
const foot = document.querySelector('footer');
const changeBackColor = function () { this.style.backgroundColor = "orange"; }

foot.onmouseover = changeBackColor;

// Change the font size of the paragraphs in the main element when the user clicks them
const para = document.querySelectorAll('main p');
//for (var i in para) {
//    para[i].onclick = function () { this.style.fontSize = "20px" };
//}
para.forEach((p) => {
    p.onclick = function () { this.style.fontSize = "20px" };
})
// Change the text in the footer when the user clicks it
foot.onclick = function () {
    this.innerHTML = "It's JENNY!";
}

// Remove the h1 element in the header
const parent = document.getElementById("parent");
const child = document.getElementById("h1");
parent.removeChild(child);

// Put something in the place of the h1 in the header
const h = document.createElement('h1');
let text = document.createTextNode("Don't be fooled by the rocks that I got!");
h.appendChild(text);
//var navBar = document.querySelector("nav");
//var navBar = document.getElementsByTagName('nav').item(0);
const navBar = document.getElementsByTagName('nav')[0];
const element2 = document.getElementById("parent");
element2.insertBefore(h, navBar);

// Change the text in one of the paragraph tags in the main element
const para2 = document.getElementById("para2");
para2.innerHTML = "Used to have a little now I have alot.";

// Change the size of the header element to 200px using grid syntax
const gridstuff = document.getElementById("container");
gridstuff.style.gridTemplateRows = "200px auto auto";
