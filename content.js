var greeting = 'Howdy';
var name = 'Molly';
var message = ', please check your order';
// concatenate the 3 variable above
var welcome = greeting + name + message;

// create variables to hold details about the sign
var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

// Get the element that has id of greeting
var el = document.getElementById('greeting');
// replace the message with a personalized welcome message
el.textContent = welcome;
// Get the element that has an id of userSign then update its content
var elSign = document.getElementById('userSign');
elSign.textContent = sign;
// get the element that has an id of tiles then update its contents
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;
// get the element that has an id of SubTotal then update its contents
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

// get the element that has an id of shipping then update its contents
var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

// get the element that has an id of grandTotal then update its contents
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;
