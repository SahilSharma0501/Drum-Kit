var size = document.querySelectorAll(".drum").length;
for (var i = 0; i < size; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function handle() {
    var press = this.innerHTML;
    chooseAudio(press);
    animation(press);
  });
}
document.addEventListener("keydown", function(event)
{
  chooseAudio(event.key);
  animation(event.key);
});
function chooseAudio(num) {
  if (num === "f") {
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
  } else if (num === "a") {
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
  } else if (num === "s") {
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
  } else if (num === "d") {
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
  } else if (num === "j") {
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
  } else if (num === "k") {
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
  } else if (num === "l") {
    var kick = new Audio("sounds/Imran_Khan_-_Bewafa_64556917.mp3");
    kick.play();
  }
}

function animation(num)
{
  var x = document.querySelector("." + num);
  x.classList.add("pressed");
  setTimeout(function()
  {
    x.classList.remove("pressed");
  }, 100);
}
