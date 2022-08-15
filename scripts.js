const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const cactus_group = document.getElementById("cactus_group");
const watch = document.getElementById("watch");
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
    let cactus_gLeft = parseInt(window.getComputedStyle(cactus_group).getPropertyValue("left"));
    //detect collison
    if(((cactus_gLeft<50 && cactus_gLeft > 0) && dinoTop >= 140) || (cactusLeft <50 && cactusLeft > 0 && dinoTop >= 140)) {
        //collison
        console.log("collision");
        alert ("Game Over!");
    }

}, 10)

document.addEventListener("keydown", function (event) {
    jump();
});
function increment() {
    if (running == 1) {
      setTimeout(function() {
        Dtime++;
        var hours = Math.floor(Dtime / 10 / 3600);
        if (hours <= 9) {
          hours = "0" + hours;
        }
        var mins = Math.floor(Dtime / 10 / 60) % 60; // Remainder operator
        if (mins <= 9) {
          mins = "0" + mins;
        }
        var secs = Math.floor(Dtime / 10) % 60; // Remainder operator
        if (secs <= 9) {
          secs = "0" + secs;
        }
        document.getElementById("watch").innerHTML = hours + ":" + mins + ":" + secs;
        increment();
      }, 100);
    }
  }
  var running = 1;
  var Dtime = 0; //Setting it just under 1 hour for testing purposes
  increment();