// const startButton = document.querySelector(".start");
// const music = new Audio('best-game-console-301284.mp3');
// const gameoversound = new Audio('game-over-deep-male-voice-clip-352695.mp3');
// const restart = document.querySelector(".restart");
// const quit = document.querySelector(".quit");
// const finalscore = document.querySelector(".finalScore");


// const startScreen = document.querySelector(".startscreen");
// const gameScreen = document.querySelector(".gamescreen");
// const startGameBtn = document.querySelector(".startgamebtn");

// // Hide game screen initially
// gameScreen.style.display = 'none';

// // Start game on button click
// startGameBtn.addEventListener("click", function() {
//   startScreen.style.display = 'none';
//   gameScreen.style.display = 'flex';

//   // Start background music
//   music.play();
// });



// restart.addEventListener("click", function(e) {
//   location.reload();
// });

// quit.addEventListener("click", function(e) {
//   location.href = 'somepage.html';
// });

// startButton.addEventListener("click", function(e) {
//   e.preventDefault();
//   if (music.paused) {
//     music.play();
//   } else {
//     music.pause();
//   }
// });

// document.addEventListener("keydown", function (e) {
//   const dino = document.querySelector('.obstacle');
//   let dleft = parseInt(window.getComputedStyle(dino).left);
//   let dtop = parseInt(window.getComputedStyle(dino).top);

//   if (e.key === 'ArrowUp') {
//     dino.classList.add('animatedino');
//     setTimeout(() => {
//       dino.classList.remove('animatedino');
//     }, 1000);
//   } else if (e.key === 'ArrowLeft') {
//     dleft -= 15;
//     dino.style.left = dleft + "px";
//   } else if (e.key === 'ArrowDown') {
//     dtop += 15;
//     dino.style.top = dtop + "px";
//   } else if (e.key === 'ArrowRight') {
//     dleft += 15;
//     dino.style.left = dleft + "px";
//   }
// });

// let cross = true;
// let scores = 0;
// const score = document.querySelector(".score");
// const ball = document.querySelector('.animateball');

// let rep = setInterval(() => {
//   const dino = document.querySelector(".obstacle");
//   const ball = document.querySelector(".ball");
//   const gameover = document.querySelector(".gameover");

//   const dinoRect = dino.getBoundingClientRect();
//   const ballRect = ball.getBoundingClientRect();

//   const isColliding = !(
//     ballRect.right < dinoRect.left ||
//     ballRect.left > dinoRect.right ||
//     ballRect.bottom < dinoRect.top ||
//     ballRect.top > dinoRect.bottom
//   );

//   if (isColliding) {
//     if (gameoversound.paused) {
//       gameoversound.play();
//     }
//     setTimeout(() => {
//       gameoversound.pause();
//     }, 2000);
//     gameover.style.visibility = 'visible';
//     finalscore.innerHTML='Final score is:'+ scores;
//     scores = 0;
//     updatescore(scores);
//     ball.style.animation = 'none';
//     clearInterval(rep);
//     music.pause();
//   } else {
//     if (dinoRect.left < ballRect.left && cross) {
//       scores += 1;
//       updatescore(scores);
//       cross = false;

//       let style = window.getComputedStyle(ball);
//       let duration = style.getPropertyValue("animation-duration");
//       let durationNum = parseFloat(duration);
//       let newdur = durationNum - 0.1;
//       if (newdur <= 0.5) newdur = 0.5;
//       ball.style.animationDuration = newdur + 's';
//       console.log('New animation duration:', newdur + 's');

//       setTimeout(() => {
//         cross = true;
//       }, 4000);
//     }
//   }
// }, 50);

// function updatescore(scores) {
//   score.innerHTML = scores;
// }









const startButton = document.querySelector(".start");
const music = new Audio('best-game-console-301284.mp3');
const gameoversound = new Audio('game-over-deep-male-voice-clip-352695.mp3');
const restart = document.querySelector(".restart");
const quit = document.querySelector(".quit");
const finalscore = document.querySelector(".finalScore");

const startScreen = document.querySelector(".startscreen");
const gameScreen = document.querySelector(".gamescreen");
const startGameBtn = document.querySelector(".startgamebtn");

const score = document.querySelector(".score");
const ball = document.querySelector('.animateball');

let rep;        // game loop interval reference
let cross = true;
let scores = 0;

// Hide game screen initially
gameScreen.style.display = 'none';

// Start game on Start button click
startGameBtn.addEventListener("click", function () {
  startScreen.style.display = 'none';
  gameScreen.style.display = 'flex';
  const begin = new Audio('let-the-games-begin-classic-announcement-retro-movie-guy-1-00-02.mp3');
  begin.play();
  setTimeout(()=>{
    begin.pause();
  },3000);
  // Start background music
  setTimeout(()=>{
    music.play(); 
  },3000);

  // Start ball movement animation (if not already started)
  ball.classList.add('animateball');

  // Start main game loop
  rep = setInterval(() => {
    const dino = document.querySelector(".obstacle");
    const ballRect = ball.getBoundingClientRect();
    const dinoRect = dino.getBoundingClientRect();
    const gameover = document.querySelector(".gameover");

    // Collision detection
    const isColliding = !(
      ballRect.right < dinoRect.left ||
      ballRect.left > dinoRect.right ||
      ballRect.bottom < dinoRect.top ||
      ballRect.top > dinoRect.bottom
    );

    if (isColliding) {
      if (gameoversound.paused) {
        gameoversound.play();
      }
      setTimeout(() => {
        gameoversound.pause();
      }, 2000);

      gameover.style.visibility = 'visible';
      finalscore.innerHTML = 'Final score is: ' + scores;
      scores = 0;
      updatescore(scores);
      ball.style.animation = 'none';
      clearInterval(rep);
      music.pause();
    } else {
      if (dinoRect.left < ballRect.left && cross) {
        scores += 1;
        updatescore(scores);
        cross = false;

        let style = window.getComputedStyle(ball);
        let duration = style.getPropertyValue("animation-duration");
        let durationNum = parseFloat(duration);
        let newdur = durationNum - 0.1;
        if (newdur <= 0.5) newdur = 0.5;
        ball.style.animationDuration = newdur + 's';
        console.log('New animation duration:', newdur + 's');

        setTimeout(() => {
          cross = true;
        }, 4000);
      }
    }
  }, 50);
});

// Update score display
function updatescore(scores) {
  score.innerHTML = scores;
}

// Restart button
restart.addEventListener("click", function (e) {
  location.reload();
});

// Quit button
quit.addEventListener("click", function (e) {
  location.href = 'somepage.html';
});

// Mute / Unmute button toggle
startButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
});

// Arrow keys control obstacle
document.addEventListener("keydown", function (e) {
  const dino = document.querySelector('.obstacle');
  let dleft = parseInt(window.getComputedStyle(dino).left);
  let dtop = parseInt(window.getComputedStyle(dino).top);

  if (e.key === 'ArrowUp') {
    dino.classList.add('animatedino');
    setTimeout(() => {
      dino.classList.remove('animatedino');
    }, 1000);
  } else if (e.key === 'ArrowLeft') {
    dleft -= 15;
    dino.style.left = dleft + "px";
  } else if (e.key === 'ArrowDown') {
    dtop += 15;
    dino.style.top = dtop + "px";
  } else if (e.key === 'ArrowRight') {
    dleft += 15;
    dino.style.left = dleft + "px";
  }
});
