// JavaScript source code
function gambler() { // basically will call the script to be used when the button is clicked
    console.log("hi g")

var die1 = Math.ceil(Math.random() *6)
var die2 = Math.ceil(Math.random() *7)
document.getElementById("profit").innerHTML = result; // grabs
document.getElementById("doge").innerHTML = die1;
document.getElementById('bitcoin').innerHTML = die2;
var sum = die1+die2
result = sum
document
if (sum == 7 || sum == 11){
document.getElementById("result").innerHTML = "CRAPS - you lose"
}
else if (die1== die2 && die1%2 == 0){
document.getElementById("result").innerHTML = "DOUBLES - To the moon!!!!"
}
}
