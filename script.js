console.log("JS is initializing");

//Calculator Program
const display = document.getElementById("display");

function appendToDisplay(input) {
    if (input === '%') {
        display.value = (parseFloat(display.value) / 100).toString();
    } else {
        display.value += input;
    }
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function del() {
    display.value = display.value.slice(0, -1);
}

function addClickSoundToButtons() {
    var buttons = document.getElementsByTagName("button");

    Array.prototype.forEach.call(buttons, function (btn) {
        btn.addEventListener('click', function() {
            var sound = new Audio("clickSound.wav");
            sound.play();
        });
    });
}

addClickSoundToButtons();
