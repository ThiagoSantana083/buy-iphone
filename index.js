let circle = document.querySelector(".circle");
let cell = document.querySelector(".img-cell")
let green = document.querySelector(".green");
let pink = document.querySelector(".pink");
let blue = document.querySelector(".blue");
let black = document.querySelector(".black");
let white = document.querySelector(".white");
let red = document.querySelector(".red");

green.addEventListener("click", () => {
    circle.style.background = "#445c42"
    cell.setAttribute("src", "img/green.png")
});

pink.addEventListener("click", () => {
    circle.style.background = "#f8ddd6"
    cell.setAttribute("src", "img/pink.png")
});

blue.addEventListener("click", () => {
    circle.style.background = "#225f7e"
    cell.setAttribute("src", "img/blue.png")
});

black.addEventListener("click", () => {
    circle.style.background = "#192028"
    cell.setAttribute("src", "img/black.png")
}); 

white.addEventListener("click", () => {
    circle.style.background = "#f7f2ee"
    cell.setAttribute("src", "img/white.png")
});

red.addEventListener("click", () => {
    circle.style.background = "#ae0617"
    cell.setAttribute("src", "img/red.png")
});