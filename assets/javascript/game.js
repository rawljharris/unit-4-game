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
$("#RandomNum1").text(randomResult);

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

function resetGame() {  
    randomResult = randomNumberGenerator();

    crystalOneValue = randomCrystalGenerated();
    crystalTwoValue = randomCrystalGenerated();
    crystalThreeValue = randomCrystalGenerated();
    crystalFourValue = randomCrystalGenerated(); 
    $("#image1").attr("data-crystalvalue", crystalOneValue);
    $("#image2").attr("data-crystalvalue", crystalTwoValue);
    $("#image3").attr("data-crystalvalue", crystalThreeValue);
    $("#image4").attr("data-crystalvalue", crystalFourValue);

    userScore = 0;

}

console.log(crystalOneValue, crystalTwoValue, crystalThreeValue, crystalFourValue);

//when clicking any crystal, it should add the previous result until it equal total score
function incrementScore() {
    // read value from image
    var currentValue = parseInt($(this).attr("data-crystalvalue"))

    userScore += currentValue;
    console.log(userScore)
    
    //if it is equal, then we increment the win counter
    if (userScore == randomResult) {
        win++;
        console.log("wins:" + win);
        //print wins to page in wins element
        $("#wins").text(win);
        //reset function
        resetGame();
        console.log(randomResult);
        console.log(crystalOneValue, crystalTwoValue, crystalThreeValue, crystalFourValue);
    }
    
    //if greater than the Random result, then they lose add 1 to losses counter
    if (userScore > randomResult) {
        loss++;
        console.log("losses:" + loss);
        //print wins to page in wins element
        $("#losses").text(loss);
        //reset function
        resetGame();
        console.log(randomResult);
        console.log(crystalOneValue, crystalTwoValue, crystalThreeValue, crystalFourValue);
    }
}

$("#image1").on("click", incrementScore);
$("#image2").on("click", incrementScore);
$("#image3").on("click", incrementScore);
$("#image4").on("click", incrementScore);
console.log("#incrementScore")

console.log(userScore);

