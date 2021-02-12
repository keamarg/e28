/* A small game, where you have to guess what the zoomed image is*/


//The images used
let images = { Strawberry: "images/strawberry.jpg", Lime: "images/lime.jpg", Car: "images/car.jpg", Ball: "images/ball.jpg", Cat: "images/cat.jpg", Hat: "images/hat.jpg", Flower: "images/flower.jpg", Tree: "images/tree.jpg", Sea: "images/sea.jpg", Cow: "images/cow.jpg", Salad: "images/salad.jpg", Mask: "images/mask.jpg" };

startGame();

//Function that holds the game
function startGame() {
    let zoomImage = document.getElementById("zoomImage");
    let currentImage = Math.floor(Math.random() * Object.keys(images).length);
    let usedImages = [Object.keys(images)[currentImage]];
    let urlImage = "url(" + Object.values(images)[currentImage] + ")";
    let nopeImage = "url('images/nope.png')";

    // Show zoomed image
    zoomImage.style.backgroundImage = urlImage;

    // Create randomized labels for the radiobuttons, based on the image names
    let radioButton1Label = document.getElementById("radioButton1Label");
    let radioButton2Label = document.getElementById("radioButton2Label");
    let radioButton3Label = document.getElementById("radioButton3Label");
    let radioButtons = document.getElementById("radioButtons");

    randomNumber = Math.ceil(Math.random() * 3);
    switch (randomNumber) {
        case 1:
            radioButton1Label.innerHTML = Object.keys(images)[currentImage];
            radioButton2Label.innerHTML = createLabelName();
            radioButton3Label.innerHTML = createLabelName();
            break;
        case 2:
            radioButton1Label.innerHTML = createLabelName();
            radioButton2Label.innerHTML = Object.keys(images)[currentImage];
            radioButton3Label.innerHTML = createLabelName();;
            break;
        case 3:
            radioButton1Label.innerHTML = createLabelName();
            radioButton2Label.innerHTML = createLabelName();
            radioButton3Label.innerHTML = Object.keys(images)[currentImage];
            break;
    }


    // Function for creating labelnames
    function createLabelName() {
        let labelName;
        while ((labelName == undefined) || (usedImages.includes(labelName))) {
            labelName = Object.keys(images)[Math.floor(Math.random() * Object.keys(images).length)];
        };
        usedImages.push(labelName);
        return labelName;
    }

    // Listen for radiobutton press, and show image
    radioButtons.addEventListener("click", function (e) {
        if ((e.target.innerHTML == usedImages[0]) || (e.target.nextElementSibling.innerHTML == usedImages[0])) {
            fullImage.style.backgroundImage = urlImage;
        } else {
            fullImage.style.backgroundImage = nopeImage;
        }
    })

    // Listen for new game request
    let button = document.getElementById("tryAgain");
    button.addEventListener("click", function () {
        resetGame();
    })

    // Function to reset the game
    function resetGame() {
        fullImage.style.backgroundImage = "";
        var radio = document.getElementsByName("guess");
        for (var i = 0; i < radio.length; i++) {
            radio[i].checked = false;
        }
        startGame();
    }
}