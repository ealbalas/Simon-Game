var buttons = $(".btn");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handleClick);
}
function handleClick() {
    var btnColor = this.id;
    console.log(btnColor);
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