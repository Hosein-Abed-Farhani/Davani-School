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

  // box - 1 - anim

  // for L laptop
  if (1200 < document.body.clientWidth) {
    if (winScroll >= 400) {
      document.querySelector("#info-boxes-1").style.translate = "0px";
      document.querySelector("#info-boxes-2").style.translate = "0px";
    }
    if (winScroll >= 550) {
      document.querySelector("#info-boxes-3").style.translate = "0px";
      document.querySelector("#info-boxes-4").style.translate = "0px";
    }
  }

  // for laptop and tablet
  if (900 < document.body.clientWidth) {
    if (winScroll >= 250) {
      document.querySelector("#info-boxes-1").style.translate = "0px";
      document.querySelector("#info-boxes-2").style.translate = "0px";
    }
    if (winScroll >= 550) {
      document.querySelector("#info-boxes-3").style.translate = "0px";
      document.querySelector("#info-boxes-4").style.translate = "0px";
    }
  }

  // for tablet and mobile
  if (document.body.clientWidth < 900) {
    if (winScroll >= 180) {
      document.querySelector("#info-boxes-1").style.translate = "0px";
    }
    if (winScroll >= 480) {
      document.querySelector("#info-boxes-2").style.translate = "0px";
    }
    if (winScroll >= 780) {
      document.querySelector("#info-boxes-3").style.translate = "0px";
    }
    if (winScroll >= 980) {
      document.querySelector("#info-boxes-4").style.translate = "0px";
    }
  }

  // for mobile
  if (document.body.clientWidth < 555) {
    if (winScroll >= 400) {
      document.querySelector("#info-boxes-1").style.translate = "0px";
    }
    if (winScroll >= 550) {
      document.querySelector("#info-boxes-2").style.translate = "0px";
    }
    if (winScroll >= 950) {
      document.querySelector("#info-boxes-3").style.translate = "0px";
    }
    if (winScroll >= 1300) {
      document.querySelector("#info-boxes-4").style.translate = "0px";
    }
  }

  // box - 2 - anim

  // for L laptop
  if (1200 < document.body.clientWidth) {
    if (winScroll >= 950) {
      document.querySelector("#dav-box-1").style.opacity = "1";
    }
    if (winScroll >= 1100) {
      document.querySelector("#dav-box-2").style.opacity = "1";
    }
  }

  //for laptop and tablet
  if (1000 < document.body.clientWidth) {
    if (winScroll >= 1150) {
      document.querySelector("#dav-box-1").style.opacity = "1";
    }
    if (winScroll >= 1300) {
      document.querySelector("#dav-box-2").style.opacity = "1";
    }
  }

  //for laptop and tablet
  if (900 < document.body.clientWidth) {
    if (winScroll >= 1000) {
      document.querySelector("#dav-box-1").style.opacity = "1";
    }
    if (winScroll >= 1150) {
      document.querySelector("#dav-box-2").style.opacity = "1";
    }
  }

  // for tablet and mobile
  if (555 < document.body.clientWidth) {
    if (winScroll >= 1500) {
      document.querySelector("#dav-box-1").style.opacity = "1";
    }
    if (winScroll >= 1700) {
      document.querySelector("#dav-box-2").style.opacity = "1";
    }
  }

  // for mobile
  if (document.body.clientWidth < 555) {
    if (winScroll >= 1800) {
      document.querySelector("#dav-box-1").style.opacity = "1";
    }
    if (winScroll >= 2000) {
      document.querySelector("#dav-box-2").style.opacity = "1";
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
