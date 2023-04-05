var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;
var buttons = $(".btn");
var buttonColors = ["red", "green", "blue", "yellow"];

var greenAudio = new Audio('sounds/green.mp3');
var redAudio = new Audio('sounds/red.mp3');
var blueAudio = new Audio('sounds/blue.mp3');
var yellowAudio = new Audio('sounds/yellow.mp3');
var wrongAudio = new Audio('sounds/wrong.mp3');

$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handleClick);
}

function handleClick() {
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    console.log(userChosenColor);
    buttonAnimation(userChosenColor);
    switch(userChosenColor) {
        case 'green':
            greenAudio.play();
            break;

        case 'red':
            redAudio.play();
            break;

        case 'yellow':
            yellowAudio.play();
            break;

        case 'blue':
            blueAudio.play();
            break;
    }

    checkingSequences();
}

function buttonAnimation(key) {
    var activeButton = $("." + key);
    activeButton.addClass("pressed");
    setTimeout(function() {
        activeButton.removeClass("pressed");
    }, 100);
}

function nextSequence() {
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChoosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChoosenColor);
    $("#"+randomChoosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    switch(randomChoosenColor) {
        case 'green':
            greenAudio.play();
            break;
    
        case 'red':
            redAudio.play();
            break;
    
        case 'yellow':
            yellowAudio.play();
            break;
    
        case 'blue':
            blueAudio.play();
            break;
    }
}

function checkingSequences() {
    for (let i = 0; i < userClickedPattern.length; i++) {
        if (gamePattern[i] == userClickedPattern[i]) {
            if (i == gamePattern.length - 1) {
                setTimeout(nextSequence(), 1000);
                userClickedPattern = [];
            }
        }
        else if (gamePattern[i] != userClickedPattern[i]) {
            gameOver();
        }
    }
}

function gameOver() {
    wrongAudio.play();
            $("#level-title").text("Game Over! Press any key to restart.");
            started = false;
            level = 0;
            $("body").addClass("game-over");
            setTimeout(function() {
                $("body").removeClass("game-over")
            }, 200);
            gamePattern = [];
            userClickedPattern = [];
}

