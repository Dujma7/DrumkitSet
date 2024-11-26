function playAudio(id) {
    const audio = document.getElementById(id);
    if (audio) {
        audio.play();
        audio.currentTime = 0;
    }
    else {
        alert("Error");
    }
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var btnInnerHTML = this.innerHTML;

        switch (btnInnerHTML) {
            case "W":
                var tom1 = new Audio("sounds/tom-1.mp3")
                tom1.play()
                break;
            case "A":
                var tom2 = new Audio("sounds/tom-2.mp3")
                tom2.play()
                break;
            case "S":
                var tom3 = new Audio("sounds/tom-3.mp3")
                tom3.play()
                break;
            case "D":
                var tom4 = new Audio("sounds/tom-4.mp3")
                tom4.play()
                break;
            case "F":
                var snare = new Audio("sounds/snare.mp3")
                snare.play()
                break;
            case "K":
                var kick = new Audio("sounds/kick-bass.mp3")
                kick.play()
                break;
            case "C":
                var crash = new Audio("sounds/crash.mp3")
                crash.play()
                break;
                
        
            default:
                console.log("hello")
                break;
        }
        addAnimation(btnInnerHTML);})}

document.addEventListener("keypress", function (event) {
    var keystroke = (event.key).toLowerCase();
    addAnimation(event.key)

    switch (keystroke) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play()
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play()
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play()
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play()
            break;
        case "f":
            var snare = new Audio("sounds/snare.mp3")
            snare.play()
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play()
            break;
        case "c":
            var crash = new Audio("sounds/crash.mp3")
            crash.play()
            break;

}})

function addAnimation(key) {
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}
