//scroll bar

window.onscroll = function () {
  scroll();
};

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

// image slider

function slide_func() {
  document.querySelector("#image-1").style.display = "none";
  document.querySelector("#image-2").style.display = "none";
  document.querySelector("#image-3").style.display = "none";
  document.querySelector("#image-4").style.display = "none";
  document.querySelector("#image-5").style.display = "none";
  document.querySelector("#circle-1").style.background = "none";
  document.querySelector("#circle-2").style.background = "none";
  document.querySelector("#circle-3").style.background = "none";
  document.querySelector("#circle-4").style.background = "none";
  document.querySelector("#circle-5").style.background = "none";
  document.querySelector("#circle-1").style.width = "20%";
  document.querySelector("#circle-2").style.width = "20%";
  document.querySelector("#circle-3").style.width = "20%";
  document.querySelector("#circle-4").style.width = "20%";
  document.querySelector("#circle-5").style.width = "20%";
  document.querySelector("#circle-1").style.borderRadus = "50%";
  document.querySelector("#circle-2").style.borderRadus = "50%";
  document.querySelector("#circle-3").style.borderRadus = "50%";
  document.querySelector("#circle-4").style.borderRadus = "50%";
  document.querySelector("#circle-5").style.borderRadus = "50%";
}

let img_num = 1;
function next() {
  img_num++;
  if (img_num == 6) {
    img_num = 1;
  }

  if (img_num == 1) {
    slide_func();
    document.querySelector("#image-1").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "1/5";
    document.querySelector("#circle-1").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-1").style.width = "50%";
    document.querySelector("#circle-1").style.borderRadius = "15px";
  }

  if (img_num == 2) {
    slide_func();
    document.querySelector("#image-2").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "2/5";
    document.querySelector("#circle-2").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-2").style.width = "50%";
    document.querySelector("#circle-2").style.borderRadius = "15px";
  }

  if (img_num == 3) {
    slide_func();
    document.querySelector("#image-3").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "3/5";
    document.querySelector("#circle-3").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-3").style.width = "50%";
    document.querySelector("#circle-3").style.borderRadius = "15px";
  }

  if (img_num == 4) {
    slide_func();
    document.querySelector("#image-4").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "4/5";
    document.querySelector("#circle-4").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-4").style.width = "50%";
    document.querySelector("#circle-4").style.borderRadius = "15px";
  }

  if (img_num == 5) {
    slide_func();
    document.querySelector("#image-5").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "5/5";
    document.querySelector("#circle-5").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-5").style.width = "50%";
    document.querySelector("#circle-5").style.borderRadius = "15px";
  }
}

function back() {
  img_num--;
  if (img_num == 0) {
    img_num = 5;
  }

  if (img_num == 1) {
    slide_func();
    document.querySelector("#image-1").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "1/5";
    document.querySelector("#circle-1").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-1").style.width = "50%";
    document.querySelector("#circle-1").style.borderRadius = "15px";
  }

  if (img_num == 2) {
    slide_func();
    document.querySelector("#image-2").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "2/5";
    document.querySelector("#circle-2").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-2").style.width = "50%";
    document.querySelector("#circle-2").style.borderRadius = "15px";
  }

  if (img_num == 3) {
    slide_func();
    document.querySelector("#image-3").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "3/5";
    document.querySelector("#circle-3").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-3").style.width = "50%";
    document.querySelector("#circle-3").style.borderRadius = "15px";
  }

  if (img_num == 4) {
    slide_func();
    document.querySelector("#image-4").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "4/5";
    document.querySelector("#circle-4").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-4").style.width = "50%";
    document.querySelector("#circle-4").style.borderRadius = "15px";
  }

  if (img_num == 5) {
    slide_func();
    document.querySelector("#image-5").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "5/5";
    document.querySelector("#circle-5").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-5").style.width = "50%";
    document.querySelector("#circle-5").style.borderRadius = "15px";
  }
}

setInterval(next, 3000);

// circle slide

function cir_1() {
  img_num = 1;
  slide_func();
  document.querySelector("#image-1").style.display = "block";
  document.querySelector("#p-slide").innerHTML = "1/5";
  document.querySelector("#circle-1").style.background = "rgb(70, 199, 99)";
  document.querySelector("#circle-1").style.width = "50%";
  document.querySelector("#circle-1").style.borderRadius = "15px";
}
function cir_2() {
  img_num = 2;
  slide_func();
  document.querySelector("#image-2").style.display = "block";
  document.querySelector("#p-slide").innerHTML = "2/5";
  document.querySelector("#circle-2").style.background = "rgb(70, 199, 99)";
  document.querySelector("#circle-2").style.width = "50%";
  document.querySelector("#circle-2").style.borderRadius = "15px";
}
function cir_3() {
  img_num = 3;
  slide_func();
  document.querySelector("#image-3").style.display = "block";
  document.querySelector("#p-slide").innerHTML = "3/5";
  document.querySelector("#circle-3").style.background = "rgb(70, 199, 99)";
  document.querySelector("#circle-3").style.width = "50%";
  document.querySelector("#circle-3").style.borderRadius = "15px";
}
function cir_4() {
  img_num = 4;
  slide_func();
  document.querySelector("#image-4").style.display = "block";
  document.querySelector("#p-slide").innerHTML = "4/5";
  document.querySelector("#circle-4").style.background = "rgb(70, 199, 99)";
  document.querySelector("#circle-4").style.width = "50%";
  document.querySelector("#circle-4").style.borderRadius = "15px";
}
function cir_5() {
  img_num = 5;
  slide_func();
  document.querySelector("#image-5").style.display = "block";
  document.querySelector("#p-slide").innerHTML = "5/5";
  document.querySelector("#circle-5").style.background = "rgb(70, 199, 99)";
  document.querySelector("#circle-5").style.width = "50%";
  document.querySelector("#circle-5").style.borderRadius = "15px";
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
