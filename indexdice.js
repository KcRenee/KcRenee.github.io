var randomNumber1 = Math.floor((Math.random()*6) + 1);
var randomNumber2 = Math.floor((Math.random()*6) + 1);

var diceNum = "dice" + randomNumber1 + ".png";
var diceNum1 = "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", diceNum);
document.querySelectorAll("img")[1].setAttribute("src", diceNum1);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!🚩";
} else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else {
    document.querySelector("h1").innerHTML = "It's a draw!";
}