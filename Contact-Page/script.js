// loading

function loaded() {
  document.querySelector(".load-body").style.display = "none";
  document.querySelector(".body").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  loaded();
});

function scroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.querySelector(".scroll-bar").style.width = scrolled + "%";
  // float btn for scroll to top
  if (scrolled >= 5) {
    document.querySelector(".float-btn").style.translate = "0px";
  } else {
    document.querySelector(".float-btn").style.translate = "100px";
  }
}

// GoToTop

function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // اسکرول نرم
  });
}

// arrow animation
function arrow() {
  document.querySelector("#arrow-top").style.animation =
    "arrow 800ms ease-in-out";
  setTimeout(arrow_off, 1000);
}
function arrow_off() {
  document.querySelector("#arrow-top").style.animation = "none";
}

setInterval(arrow, 3000);
