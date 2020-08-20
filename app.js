let words = document.querySelector("#words");
let speedControl = document.querySelector("#speedControl");
let speedDisplay = document.querySelector("#speedDisplay");
let amountControl = document.querySelector("#amountControl");
let textControl = document.querySelector("#textControl");

textControl.value = sampleText[Math.floor(Math.random() * (sampleText.length))];

let color = document.querySelectorAll(".color");
let color1 = document.querySelector("#color1").value;
let color2 = document.querySelector("#color2").value;
let color3 = document.querySelector("#color3").value;
let color4 = document.querySelector("#color4").value;
let color5 = document.querySelector("#color5").value;

let backgroundControl = document.querySelector("#backgroundControl");
backgroundControl.addEventListener("input", () => {
    document.body.style.backgroundColor = backgroundControl.value;
})

let modeControl = document.querySelector("#modeControl");
let blurControl = document.querySelector("#blurControl");
let blurDisplay = document.querySelector("#blurDisplay");

rendercontent = () => {
    for (let i = 0; i < amountControl.value; i++) {
        let pixel = document.createElement("span");
        pixel.textContent = textControl.value;
        pixel.id = color[0].value;
        pixel.style.transition = blur + "ms";
        words.appendChild(pixel);
    }
}


let speed = Number(speedControl.value);
speedDisplay.textContent = speed + " milliseconds";
let blur = Number(blurControl.value);
blurDisplay.textContent = blur + " milliseconds";

var myVar = setInterval(myTimer, speed);

speedControl.addEventListener("input", () => {
    speed = speedControl.value;
    speedDisplay.textContent = speed + " milliseconds";
    clearInterval(myVar);
    myVar = setInterval(myTimer, speed);
});

blurControl.addEventListener("input", () => {
    blur = blurControl.value;
    blurDisplay.textContent = blur + " milliseconds";
    let spans = document.querySelectorAll("span");
    spans.forEach(span => {
        span.style.transition = blur + "ms";
    });
})

amountControl.addEventListener("input", () => {
    words = document.querySelector("#words");
    if (amountControl.value > 300) {
        amountControl.value = 300;
    }
    clearInterval(myVar);
    words.innerHTML = "";
    rendercontent();
    /*     i = Math.floor(Math.random() * (words.children.length)) */
    i = 0;
    myVar = setInterval(myTimer, speed);
})

textControl.addEventListener("input", () => {
    let spans = document.querySelectorAll("span");
    spans.forEach(span => {
        span.textContent = textControl.value;
    });
})

let mode = modeControl.value;

modeControl.addEventListener("change", () => {
    mode = modeControl.value;
    i = 0;
    let spans = document.querySelectorAll("span");
    spans.forEach(span => {
        span.id = color1;
        span.style.color = color1;
    })
})

rendercontent();

let i = 0;

function myTimer() {
    /*     for (let it = 0; it < 5; it++) {
            console.log(it);
            if (words.children[i].id == color[it].value && it != 4) {
                let color = document.querySelectorAll(".color");
                console.log(color[it + 1].value);
                words.children[i].id = color[it + 1].value;
                words.children[i].style.color = color[it + 1].value;
            } else if (words.children[i].id == color[it].value && it == 4) {
                let color = document.querySelectorAll(".color");
                console.log(color[0].value);
                words.children[i].id = color[0].value;
                words.children[i].style.color = color[0].value;
            }
        } */


    if (mode == "fade") {
        color5 = document.querySelector("#color5").value;
        color4 = document.querySelector("#color4").value;
        color3 = document.querySelector("#color3").value;
        color2 = document.querySelector("#color2").value;
        color1 = document.querySelector("#color1").value;
        if (i > 0) {
            words.children[i - 1].id = color4;
            words.children[i - 1].style.color = color4;
        }
        if (i > 1) {
            words.children[i - 2].id = color3;
            words.children[i - 2].style.color = color3;
        }
        if (i > 2) {
            words.children[i - 3].id = color2;
            words.children[i - 3].style.color = color2;
        }
        if (i > 3) {
            words.children[i - 4].id = color1;
            words.children[i - 4].style.color = color1;
        }
        if (i == 4) {

            words.children[words.children.length - 1].id = color1;
            words.children[words.children.length - 1].style.color = color1;
        }
        if (i == 3) {
            words.children[words.children.length - 1].id = color2;
            words.children[words.children.length - 1].style.color = color2;
            words.children[words.children.length - 2].id = color1;
            words.children[words.children.length - 2].style.color = color1;
        }
        if (i == 2) {
            words.children[words.children.length - 1].id = color3;
            words.children[words.children.length - 1].style.color = color3;
            words.children[words.children.length - 2].id = color2;
            words.children[words.children.length - 2].style.color = color2;
            words.children[words.children.length - 3].id = color1;
            words.children[words.children.length - 3].style.color = color1;
            words.children[words.children.length - 4].id = color1;
            words.children[words.children.length - 4].style.color = color1;
        }
        if (i == 1) {
            words.children[words.children.length - 1].id = color4;
            words.children[words.children.length - 1].style.color = color4;
            words.children[words.children.length - 2].id = color3;
            words.children[words.children.length - 2].style.color = color3;
            words.children[words.children.length - 3].id = color2;
            words.children[words.children.length - 3].style.color = color2;
            words.children[words.children.length - 4].id = color1;
            words.children[words.children.length - 4].style.color = color1;
        }
        words.children[i].id = color5;
        words.children[i].style.color = color5;
    } else {
        if (words.children[i].id == color2) {
            color3 = document.querySelector("#color3").value;
            words.children[i].id = color3;
            words.children[i].style.color = color3;
        } else if (words.children[i].id == color3) {
            color4 = document.querySelector("#color4").value;
            words.children[i].id = color4;
            words.children[i].style.color = color4;
        } else if (words.children[i].id == color4) {
            color5 = document.querySelector("#color5").value;
            words.children[i].id = color5;
            words.children[i].style.color = color5;
        } else if (words.children[i].id == color5) {
            color1 = document.querySelector("#color1").value;
            words.children[i].id = color1;
            words.children[i].style.color = color1;
        } else {
            color2 = document.querySelector("#color2").value;
            words.children[i].id = color2;
            words.children[i].style.color = color2;
        }
    }

    i++;
    if (mode == "random") {
        i = Math.floor(Math.random() * (words.children.length))
    } else {
        if (i > words.children.length - 1) {
            i = 0;
        }
    }
}

let menu = document.querySelector("#menu");
let controls = document.querySelector("#controls");
menu.addEventListener("click", () => {
    controls.classList.toggle("hidden")
})
