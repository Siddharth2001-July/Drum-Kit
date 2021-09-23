// For mouse clicks

var noOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfButtons; i++) {
    // This event listener runs the function specified after the event (click here)
    document.querySelectorAll(".drum")[i].addEventListener("click", wDrum);

    function wDrum() {
        var button = this.innerHTML;
        makeSound(button);
        buttonAnimation(button);
    }
}
// For keyboard keys
// This event listener runs the anonymous function (which dont name) declared after the event (keydown/keypress here)
document.addEventListener("keydown", function (event) {
    var key = event.key;
    makeSound(key);
    buttonAnimation(key);
});

function makeSound(pressed) {
    switch (pressed) {
        case 'w':
            var sound = new Audio('sounds/crash.mp3');
            sound.play();
            break;

        case 'a':
            var sound = new Audio('sounds/kick-bass.mp3');
            sound.play();
            break;

        case 's':
            var sound = new Audio('sounds/snare.mp3');
            sound.play();
            break;

        case 'd':
            var sound = new Audio('sounds/tom-1.mp3');
            sound.play();
            break;

        case 'j':
            var sound = new Audio('sounds/tom-2.mp3');
            sound.play();
            break;

        case 'k':
            var sound = new Audio('sounds/tom-3.mp3');
            sound.play();
            break;

        case 'l':
            var sound = new Audio('sounds/tom-4.mp3');
            sound.play();
            break;

        default:
            console.log('Press the key shown above!');
            break;
    }
}

function buttonAnimation(key) {
    var pressedKey = document.querySelector("." + key);
    pressedKey.classList.add("pressed");
    // Passing an anonymous function to remove pressed class and after that, delay time
    setTimeout(function () { pressedKey.classList.remove("pressed"); }, 150);
}