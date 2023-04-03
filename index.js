var gamePattern = [];
var buttons = $(".btn");
var buttonColors = ["red", "green", "blue", "yellow"];

var randomNumber = nextSequence();
var randomChoosenColor = buttonColors[randomNumber];
gamePattern.push(randomChoosenColor);
$("#"+randomChoosenColor).fadeOut(100).fadeIn(100);

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handleClick);
}
function handleClick() {
    var btnColor = this.id;
    console.log(btnColor);
    buttonAnimation(btnColor);
    switch(btnColor) {
        case 'green':
            var audio = new Audio('sounds/green.mp3');
            audio.play();
            break;

        case 'red':
            var audio = new Audio('sounds/red.mp3');
            audio.play();
            break;

        case 'yellow':
            var audio = new Audio('sounds/yellow.mp3');
            audio.play();
            break;

        case 'blue':
            var audio = new Audio('sounds/blue.mp3');
            audio.play();
            break;
    }
}

function buttonAnimation(key) {
    var activeButton = $("." + key);
    activeButton.addClass("pressed");
    setTimeout(function() {
        activeButton.removeClass("pressed");
    }, 100);
}

function nextSequence() {
    var randomNum = Math.floor(Math.random() * 4);
    return randomNum;
}




