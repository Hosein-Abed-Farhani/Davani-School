// select-icon

function sel() {
  document.querySelector("#arrow-sel").style.rotate = "180deg";
}
function bul() {
  document.querySelector("#arrow-sel").style.rotate = "0deg";
}

function daste_ease_func() {
  // row
  document.querySelector("#new-1").style.display = "none";
  document.querySelector("#new-2").style.display = "none";
  document.querySelector("#new-3").style.display = "none";
  document.querySelector("#new-4").style.display = "none";
  document.querySelector("#new-5").style.display = "none";
  document.querySelector("#dahom-1").style.display = "none";
  document.querySelector("#dahom-2").style.display = "none";
  document.querySelector("#yazdah-1").style.display = "none";
  document.querySelector("#yazdah-2").style.display = "none";
  document.querySelector("#davazdah-1").style.display = "none";
  document.querySelector("#davazdah-2").style.display = "none";
  document.querySelector("#other").style.display = "none";
  //bottom
  document.querySelector("#bottom-new").style.display = "none";
  document.querySelector("#bottom-dah").style.display = "none";
  document.querySelector("#bottom-yazdah").style.display = "none";
  document.querySelector("#bottom-davazdah").style.display = "none";
  document.querySelector("#bottom-other").style.display = "none";
}

// daste bandi

let daste = document.querySelector("#daste-bandi");
function daste_fill() {
  if (daste.value == 0) {
    daste_ease_func();
    // row
    document.querySelector("#new-1").style.display = "flex";
    //bottom
    document.querySelector("#bottom-new").style.display = "flex";
  }
  if (daste.value == 1) {
    daste_ease_func();
    // row
    document.querySelector("#dahom-1").style.display = "flex";
    //bottom
    document.querySelector("#bottom-dah").style.display = "flex";
  }
  if (daste.value == 2) {
    daste_ease_func();
    // row
    document.querySelector("#yazdah-1").style.display = "flex";
    //bottom
    document.querySelector("#bottom-yazdah").style.display = "flex";
  }
  if (daste.value == 3) {
    daste_ease_func();
    // row
    document.querySelector("#davazdah-1").style.display = "flex";
    //bottom
    document.querySelector("#bottom-davazdah").style.display = "flex";
  }
  if (daste.value == 4) {
    daste_ease_func();
    // row
    document.querySelector("#other").style.display = "flex";
    //bottom
    document.querySelector("#bottom-other").style.display = "flex";
  }
}

function new_ease_func() {
  // row
  document.querySelector("#new-1").style.display = "none";
  document.querySelector("#new-2").style.display = "none";
  document.querySelector("#new-3").style.display = "none";
  document.querySelector("#new-4").style.display = "none";
  document.querySelector("#new-5").style.display = "none";

  // bottom
  document.querySelector("#bn-1").style.color = "rgb(75, 75, 75)";
  document.querySelector("#bn-2").style.color = "rgb(75, 75, 75)";
  document.querySelector("#bn-3").style.color = "rgb(75, 75, 75)";
  document.querySelector("#bn-4").style.color = "rgb(75, 75, 75)";
  document.querySelector("#bn-5").style.color = "rgb(75, 75, 75)";
}

function new_1() {
  new_ease_func();
  // row
  document.querySelector("#new-1").style.display = "flex";

  // bottom
  document.querySelector("#bn-1").style.color = "#43a047";
}
function new_2() {
  new_ease_func();
  // row
  document.querySelector("#new-2").style.display = "flex";

  // bottom
  document.querySelector("#bn-2").style.color = "#43a047";
}
function new_3() {
  new_ease_func();
  // row
  document.querySelector("#new-3").style.display = "flex";

  // bottom
  document.querySelector("#bn-3").style.color = "#43a047";
}
function new_4() {
  new_ease_func();
  // row
  document.querySelector("#new-4").style.display = "flex";

  // bottom
  document.querySelector("#bn-4").style.color = "#43a047";
}
function new_5() {
  new_ease_func();
  // row
  document.querySelector("#new-5").style.display = "flex";

  // bottom
  document.querySelector("#bn-5").style.color = "#43a047";
}

function dah_1(){
  // row
  document.querySelector("#dahom-1").style.display = "flex";
  document.querySelector("#dahom-2").style.display = "none";
  // bottom
  document.querySelector("#bd-1").style.color = "#43a047";
  document.querySelector("#bd-2").style.color = "rgb(75, 75, 75)";
}
function dah_2(){
  // row
  document.querySelector("#dahom-1").style.display = "none";
  document.querySelector("#dahom-2").style.display = "flex";
  // bottom
  document.querySelector("#bd-1").style.color = "rgb(75, 75, 75)";
  document.querySelector("#bd-2").style.color = "#43a047";
}

function yaz_1(){
  // row
  document.querySelector("#yazdah-1").style.display = "flex";
  document.querySelector("#yazdah-2").style.display = "none";
  // bottom
  document.querySelector("#by-1").style.color = "#43a047";
  document.querySelector("#by-2").style.color = "rgb(75, 75, 75)";
}
function yaz_2(){
  // row
  document.querySelector("#yazdah-1").style.display = "none";
  document.querySelector("#yazdah-2").style.display = "flex";
  // bottom
  document.querySelector("#by-1").style.color = "rgb(75, 75, 75)";
  document.querySelector("#by-2").style.color = "#43a047";
}

function dav_1(){
  // row
  document.querySelector("#davazdah-1").style.display = "flex";
  document.querySelector("#davazdah-2").style.display = "none";
  // bottom
  document.querySelector("#bz-1").style.color = "#43a047";
  document.querySelector("#bz-2").style.color = "rgb(75, 75, 75)";
}
function dav_2(){
  // row
  document.querySelector("#davazdah-1").style.display = "none";
  document.querySelector("#davazdah-2").style.display = "flex";
  // bottom
  document.querySelector("#bz-1").style.color = "rgb(75, 75, 75)";
  document.querySelector("#bz-2").style.color = "#43a047";
}

