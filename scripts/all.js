//scroll bar

window.onscroll = function () {
  scroll();
};

function scroll() {
  var winScroll =
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
  var height = document.body.scrollHeight - document.body.clientHeight; // استفاده از document.body
  var scrolled = (winScroll / height) * 100;
  scrolled = Math.min(100, Math.max(0, scrolled)); // محدود کردن مقدار بین ۰ و ۱۰۰
  if (scrolled >= 95) {
    scrolled = 100;
  }
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

// محدود کردن راست کلیک روی عکس‌ها
document.addEventListener("contextmenu", function (event) {
  if (event.target.tagName === "IMG") {
    event.preventDefault();
  }
});

document.addEventListener("mousedown", function (event) {
  if (event.target.tagName === "IMG") {
    event.preventDefault();
  }
});
