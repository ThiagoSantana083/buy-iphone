let circle = document.querySelector(".circle");
let cell = document.querySelector(".img-cell")
let green = document.querySelector(".green");
let pink = document.querySelector(".pink");
let blue = document.querySelector(".blue");
let black = document.querySelector(".black");
let white = document.querySelector(".white");
let red = document.querySelector(".red");

green.addEventListener("click", () => {
    cell.setAttribute("src", "img/green.png")
    circle.style.background = "#445c42"
});

pink.addEventListener("click", () => {
    cell.setAttribute("src", "img/pink.png")
    circle.style.background = "#f8ddd6"
});

blue.addEventListener("click", () => {
    cell.setAttribute("src", "img/blue.png")
    circle.style.background = "#225f7e"
});

black.addEventListener("click", () => {
    cell.setAttribute("src", "img/black.png")
    circle.style.background = "#192028"
}); 

white.addEventListener("click", () => {
    cell.setAttribute("src", "img/white.png")
    circle.style.background = "#f7f2ee"
});

red.addEventListener("click", () => {
    cell.setAttribute("src", "img/red.png")
    circle.style.background = "#ae0617"
});