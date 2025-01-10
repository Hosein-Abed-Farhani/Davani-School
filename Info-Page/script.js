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

  console.log(winScroll);

  // box anim

  // for laptop
  if (900 < document.body.clientWidth) {
    if (winScroll >= 480) {
      document.querySelector("#info-boxes-1").style.translate = "0px";
      document.querySelector("#info-boxes-2").style.translate = "0px";
    }
    if (winScroll >= 550) {
      document.querySelector("#info-boxes-3").style.translate = "0px";
      document.querySelector("#info-boxes-4").style.translate = "0px";
    }
  }
  // for tablet
  if (555 < document.body.clientWidth < 900) {
    if (winScroll >= 285) {
      document.querySelector("#info-boxes-1").style.translate = "0px";
    }
    if (winScroll >= 585) {
      document.querySelector("#info-boxes-2").style.translate = "0px";
    }
    if (winScroll >= 880) {
      document.querySelector("#info-boxes-3").style.translate = "0px";
    }
    if (winScroll >= 1180) {
      document.querySelector("#info-boxes-4").style.translate = "0px";
    }
  }

  // for mobile
  if (document.body.clientWidth < 555) {
    if (winScroll >= 50) {
      document.querySelector("#info-boxes-1").style.translate = "0px";
    }
    if (winScroll >= 350) {
      document.querySelector("#info-boxes-2").style.translate = "0px";
    }
    if (winScroll >= 650) {
      document.querySelector("#info-boxes-3").style.translate = "0px";
    }
    if (winScroll >= 950) {
      document.querySelector("#info-boxes-4").style.translate = "0px";
    }
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

// content js
