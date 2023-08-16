
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDice1 = "dice" + randomNumber1 + ".png";
var randomImgSrc1 = "images/" + randomDice1;

document.querySelector(".img1").setAttribute("src", randomImgSrc1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDice2 = "dice" + randomNumber2 + ".png";
var randomImgSrc2 = "images/" + randomDice2;

document.querySelector(".img2").setAttribute("src", randomImgSrc2);

// Displaying the winner
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Won🥇";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Won🥇";
} else {
    document.querySelector("h1").innerHTML = "It's a Draw";
}
