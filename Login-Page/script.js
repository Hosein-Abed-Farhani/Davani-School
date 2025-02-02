// sign in and sign up script

function log_1() {
  document.querySelector(".right").style.display = "none";
  document.querySelector(".right-2").style.display = "flex";
}

function log_2() {
  document.querySelector(".right-2").style.display = "none";
  document.querySelector(".right").style.display = "flex";
}

// limit right click
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

// limit mouse down/prees

document.addEventListener("mousedown", function (event) {
  event.preventDefault();
});
