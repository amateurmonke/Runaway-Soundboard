var numberOfButtons = document.querySelectorAll(".piano").length;

for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function(event) {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        
    });
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
});


function makeSound(key)
{
    switch (key) {
        case "a":
            var p1 = new Audio('./audio/piano1.mp3');
            p1.play();
            break;

        case "s":
            var p2 = new Audio('./audio/piano2.mp3');
            p2.play();
            break;

        case "d":
            var p3 = new Audio('./audio/piano3.mp3');
            p3.play();
            break;

        case "f":
            var p4 = new Audio('./audio/piano4.mp3');
            p4.play();
            break;

        case "g":
            var p5 = new Audio('./audio/piano5.mp3');
            p5.play();
            break;

        case "h":
            var p6 = new Audio('./audio/piano6.mp3');
            p6.play();
            break;

        case "j":
            var p7 = new Audio('./audio/piano7.mp3');
            p7.play();
            break;

        case "k":
            var p8 = new Audio('./audio/piano8.mp3');
            p8.play();
            break;

        case "l":
            var instrumental = new Audio('./audio/instrumental.mp3');
            instrumental.play();
            break;

        default:
            console.log();
    }
}