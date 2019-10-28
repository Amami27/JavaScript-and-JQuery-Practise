/**********Working on my statement skill (Chapter 2)**********/
var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) {
    greeting = 'Good evening';
} else if (hourNow > 12) {
    greeting = 'Good afternoon';
} else if (hourNow > 0) {
    greeting = 'Good morning';
} else {
    greeting = 'Welcome';
}
var span = document.getElementById('date');
span.textContent = greeting;

/********** Using variables to store a boolean value (Chapter 3)***********/
var inStock;
var shipping;
inStock = true;
shipping = false;
var elStock = document.getElementByld('stock');
elStock.className = inStock;
var elShip = document.getElementById('shipping');
elShip.className = shipping;