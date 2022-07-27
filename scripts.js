const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
function jump() {
    if (dino.classList != "jump") {
            dino.classList.add("jump");
        setTimeout(function () {
            dino.classList.remove("jump")
        }, 300);
    }
}

let isAlive = setInterval(function () {
    // get current dino Y pos
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    //get current dino X pos
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    //console.log(cactusLeft);

    //detect collison
    if(cactusLeft <50 && cactusLeft > 0 && dinoTop >= 140) {
        //collison
        console.log("collision");
        alert ("Game Over!");
    }

}, 10)

document.addEventListener("keydown", function (event) {
    jump();
});

