var hungerBar = document.getElementById("hunger-bar");
var happyBar = document.getElementById("happy-bar");
var healthBar = document.getElementById("health-bar");

function petDay() {
  let i = 0;
  if (i == 0) {
    i = 1;
    const petAge = document.getElementById("pet-age");
    let age = 0;
    setInterval(frame, 1800000);
    function frame() {
      age++;
      petAge.innerHTML = age + " Days Old";
    }
  }
}

let hungerWidth = 50;

function feed() {
  let id = setInterval(frame, 20);
  function frame() {
    if (hungerWidth <= 0) {
      clearInterval(id);
      i = 0;
    } else {
      hungerWidth--;
      hungerBar.style.width = hungerWidth + "%";
      hungerBar.innerHTML = hungerWidth + "%";
    }
  }
}

const feedButton = document.getElementById("feed");
feedButton.addEventListener('mouseout', hungerMove);


function hungerMove() {
  let i = 0;
  if (i == 0) {
    i = 1;
    // var hungerBar = document.getElementById("hunger-bar");
    // let width = 50;
    let id = setInterval(frame, 200000);
    function frame() {
      if (hungerWidth >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        hungerWidth += 2;
        hungerBar.style.width = hungerWidth + "%";
        hungerBar.innerHTML = hungerWidth + "%";
      }
    }
  }
}


let healthWidth = 80;

function clean() {
  let id = setInterval(frame, 20);
  function frame() {
    if (healthWidth >= 100) {
      clearInterval(id);
      i = 0;
    } else {
      healthWidth++;
      healthBar.style.width = healthWidth + "%";
      healthBar.innerHTML = healthWidth + "%";
    }
  }
}

const cleanButton = document.getElementById("clean");
cleanButton.addEventListener('mouseout', healthMove);

function healthMove() {
  let i = 0;
  if (i == 0) {
    i = 1;
    // var healthBar = document.getElementById("health-bar");
    // let width = 70;healthW    
    let id = setInterval(frame, 300000);
    function frame() {
      if (healthWidth <= 0) {
        clearInterval(id);
        i = 0;
      } else {
        healthWidth--;
        healthBar.style.width = healthWidth + "%";
        healthBar.innerHTML = healthWidth + "%";
      }
    }
  }
}

let happyWidth = 60;

function play() {
  let id = setInterval(frame, 20);
  function frame() {
    if (happyWidth >= 100) {
      clearInterval(id);
      i = 0;
    } else {
      happyWidth++;
      happyBar.style.width = happyWidth + "%";
      happyBar.innerHTML = happyWidth + "%";
    }
  }
}

const playButton = document.getElementById("play");
playButton.addEventListener('mouseout', happyMove);

function happyMove() {
  let i = 0;
  if (i == 0) {
    i = 1;
    //   var happyBar = document.getElementById("happy-bar");
    let id = setInterval(frame, 120000);
    function frame() {
      if (happyWidth <= 0) {
        clearInterval(id);
        i = 0;
      } else {
        happyWidth--;
        happyBar.style.width = happyWidth + "%";
        happyBar.innerHTML = happyWidth + "%";
      }
      //   console.log(happyWidth);
    }
  }
}
