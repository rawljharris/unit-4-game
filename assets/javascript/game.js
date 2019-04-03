//Speudo coding
var randomResult = randomNumberGenerator();
var loss = 0;
var win = 0;
var userScore = 0;

//setting element variables


//new randon number generated at the start of each game
function randomNumberGenerator() {
    return Math.floor(Math.random() * 102) + 19;
}
console.log(randomResult);

function randomCrystalGenerated(){
    return Math.floor(Math.random() *12) + 1;
}

//every crystal needs a random number
var crystalOneValue = randomCrystalGenerated();
var crystalTwoValue = randomCrystalGenerated();
var crystalThreeValue = randomCrystalGenerated();
var crystalFourValue = randomCrystalGenerated();
$("#image1").attr("data-crystalvalue", crystalOneValue);
$("#image2").attr("data-crystalvalue", crystalTwoValue);
$("#image3").attr("data-crystalvalue", crystalThreeValue);
$("#image4").attr("data-crystalvalue", crystalFourValue);


console.log(crystalOneValue, crystalTwoValue, crystalThreeValue, crystalFourValue);

//when clicking any crystal, it should add the previous result until it equal total score
function incrementScore() {
    // read value from image
    var currentValue = parseInt($(this).attr("data-crystalvalue"))
    userScore += currentValue;
    console.log(userScore)
}

$("#image1").on("click", incrementScore);
$("#image2").on("click", incrementScore);
$("#image3").on("click", incrementScore);
$("#image4").on("click", incrementScore);
console.log("#incrementScore")

console.log(userScore);



//if greater than the Random result, then we decrement a loss counter
//if it is equal, then we increment a win counter