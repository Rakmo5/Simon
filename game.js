// // alert("hello");

// let gamePattern = [];

// let userClickedPattern = [];

// // function nextSequence(){
// //     // level +=1;
// //     userClickedPattern = []; // important!
// //     level++;
// //     $("#warning").hide();
// //     $("#level-title").text("Level " + level); // only at start
// //     gamePattern.push(colours[getRandomNumber(4)]);
// //     // $("h1").text("level "+ level)
// //     displaySequence();
// //     checkAnswer();   
// // }

// // // CHANGE: nextSequence – lock input before showing, unlock after sequence finishes

// function nextSequence(){
//     userClickedPattern = [];
//     acceptingInput = false;
//     level++;
//     $("#warning").hide();
//     $("#level-title").text("Level "+ level);

//     const nextColour = colours[getRandomNumber(4)];
//     gamePattern.push(nextColour);

//     // Pass a callback to unlock input after sequence display
//     displaySequence(() =>{
//         acceptingInput=true;
//     })
// } 

// function getRandomNumber(max){
//     return Math.floor(Math.random()*max);
// }

// const colours = ["red","blue","green","yellow"];


// // $(".btn").click(function (){
// //     let userChosenColour = $(this).attr("id");
// //     // console.log(userChosenColour);
// //     userClickedPattern.push(userChosenColour);
// //     // console.log(userClickedPattern);
// //     playSound(userChosenColour);
// //     animatePress(userChosenColour);
// //     checkAnswer(userClickedPattern.length-1)
// // });

// // // CHANGE: button clicks – ignore if game not started or input locked

// $(".btn").click(function (){
//     if
// (!started || ! acceptingInput) return ;
// const userChosenColour = $(this).attr("id");
// userClickedPattern.push(userChosenColour);
// playSound(userChosenColour);
// animatePress(userChosenColour);
// checkAnswer(userClickedPattern.length-1)
// });

// // Function to play sound , takes input colour
// function playSound(name){
//     let audio = new Audio("./sounds/"+name+".mp3");
//     audio.play();
// }

// // Function to animate button , takes input colour
// function animatePress(currentColour){
//     $("#"+currentColour).addClass("pressed");
//     setTimeout(function (){
//         $("#"+currentColour).removeClass("pressed");  
//     },100)
// }


// // Key board clicks
// const keyMap = {
//     "a":"green",
//     "s":"red",
//     "d":"yellow",
//     "f":"blue"
// }

// // $(document).keypress(function(event){
// //     let chosenColour = keyMap[event.key];
// //     if (chosenColour){
// //         userClickedPattern.push(chosenColour);
// //         playSound(chosenColour);
// //         animatePress(chosenColour);
// //         checkAnswer(userClickedPattern.length-1);
// //     }
// // })

// // // REPLACE BOTH keypress handlers with ONE unified handler

// $(document).on('keypress',function(event){
//     const key = event.key.toLowerCase();

//     if (!started){
//         level = 0;
//         gamePattern=[];
//         started = true;
//         nextSequence();
//         return;
//     }

//     // Ignore input while sequence is animating
//     if (!acceptingInput) return;

//     // ASDF mapping 
//     const chosenColour = keyMap[key];
//     if (chosenColour){
//         userClickedPattern.push(chosenColour);
//         playSound(chosenColour);
//         animatePress(chosenColour);
//         checkAnswer(userClickedPattern.length-1)
//     }
// });


// // function displaySequence() {
// //     let i = 0;

// //     // Use setInterval to show each color one by one
// //     const interval = setInterval(function() {
// //         if (i >= gamePattern.length) {
// //             clearInterval(interval); // stop when done
// //             return;
// //         }

// //         let currentColour = gamePattern[i];
// //         // Flash animation
// //         animatePress(currentColour);
// //         // Play sound
// //         playSound(currentColour);

// //         i++;
// //     }, 600); // 600ms delay between each color
// // }

// // function displaySequence() {
// //     let i = 0;
// //     // Use setInterval to show each colour one by one
// //     const interval = setInterval(function(){
// //         if (i>= gamePattern.length){
// //             clearInterval(interval);
// //             return;
// //         }
        
// //         let currentColour = gamePattern[i];
// //         // Flash animation
// //         animatePress(currentColour);
// //         playSound(currentColour);
// //         i++;
// //     },600);
// // }

// // // CHANGE: displaySequence – accept a callback when done

// function displaySequence(done) {
//     let i = 0;
//     const interval = setInterval(function(){
//         if (i>= gamePattern.length){
//             clearIntverval(interval);
//             if (typeof done === "function") done();
//             return;
//         }
//         const currentColor = gamePattern[i];
//         animatePress(currentColor);
//         playSound(currentColor);
//         i++;

//     },600);
// }

// // Starting the game
// let acceptingInput=false;
// let level = 0;
// let started = false;
// let highScore = 0;

// // $(document).keypress(function() {
// //     if (!started) {
// //         level = 0;
// //         gamePattern = [];
// //         started = true;
// //         nextSequence(); // first sequence added
// //         $("#level-title").text("Level " + level);
// //     }
// // });




// function checkAnswer(currentLevel){
//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
//         if (userClickedPattern.length === gamePattern.length){
//             setTimeout(function(){
//                 nextSequence();
//             },1000);
//         }

//     } else{
//         playSound("wrong");
//         $("body").addClass("game-over");
//         $("#level-title").text("Game Over, Press Any Key to Restart ")
//         $("#warning").show();
//         setTimeout(function (){
//             $("body").removeClass("game-over");
//         },200);
//         startOver();
//     }

// }

// function startOver(){
    
//     if (level > highScore) {
//         highScore = level;
//         $("#high-score").text("Highest Level: " + highScore);
//     }
//     level = 0;
//     gamePattern=[];
//     started = false;
// }


// -------------------- Variables --------------------
let gamePattern = [];
let userClickedPattern = [];
let acceptingInput = false;
let level = 0;
let started = false;
let highScore = 0;

const colours = ["red", "blue", "green", "yellow"];
const keyMap = { a: "green", s: "red", d: "yellow", f: "blue" };
const sequenceDelay = 600;

// -------------------- Functions --------------------
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function playSound(name) {
  let audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(() => $("#" + currentColour).removeClass("pressed"), 100);
}

function displaySequence(done) {
  let i = 0;
  const interval = setInterval(function () {
    if (i >= gamePattern.length) {
      clearInterval(interval);
      if (typeof done === "function") done();
      return;
    }
    const currentColour = gamePattern[i];
    animatePress(currentColour);
    playSound(currentColour);
    i++;
  }, sequenceDelay);
}

function nextSequence() {
  userClickedPattern = [];
  acceptingInput = false;
  level++;

  $("#warning").hide();
  $("#level-title").text("Level " + level);

  const nextColour = colours[getRandomNumber(4)];
  gamePattern.push(nextColour);

  displaySequence(() => {
    acceptingInput = true;
  });
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(nextSequence, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    $("#warning").show();
    setTimeout(() => $("body").removeClass("game-over"), 200);
    startOver();
  }
}

function startOver() {
  if (level > highScore) {
    highScore = level;
    $("#high-score").text("Highest Level: " + highScore);
  }
  level = 0;
  gamePattern = [];
  started = false;
  acceptingInput = false;
}

// -------------------- Event Handlers --------------------
$(".btn").click(function () {
  if (!started || !acceptingInput) return;
  const userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

$(document).on("keypress", function (event) {
  const key = event.key.toLowerCase();

  if (!started) {
    started = true;
    nextSequence();
    return;
  }

  if (!acceptingInput) return;

  const chosenColour = keyMap[key];
  if (chosenColour) {
    userClickedPattern.push(chosenColour);
    playSound(chosenColour);
    animatePress(chosenColour);
    checkAnswer(userClickedPattern.length - 1);
  }
});
