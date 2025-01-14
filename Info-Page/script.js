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

// box - 2 - anim

// Intersection Observer for Animations
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2, // وقتی ۱۰% از عنصر در viewport قرار گرفت، رویداد فعال می‌شود
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const target = entry.target;
      // انیمیشن برای باکس‌های تاریخچه و دانش‌آموزان
      if (target.classList.contains("davani-box")) {
        target.style.opacity = "1";
      }
    }
  });
}, observerOptions);

// مشاهده عناصر برای انیمیشن
document.querySelectorAll(".davani-box").forEach((box) => {
  observer.observe(box);
});

// تنظیمات Observer برای نمایش عناصر
const newObserverOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2, // وقتی ۱۰٪ از عنصر در viewport قرار گرفت، رویداد فعال می‌شود
};

// box - 1 - anim
const newObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const observedElement = entry.target;
      // نمایش عناصر بر اساس عرض صفحه
      observedElement.style.transform = "translateX(0)";
      observedElement.style.opacity = "1";
    }
  });
}, newObserverOptions);

// مشاهده عناصر برای انیمیشن بر اساس عرض صفحه
document
  .querySelectorAll(
    "#info-boxes-1, #info-boxes-2, #info-boxes-3, #info-boxes-4"
  )
  .forEach((element, index) => {
    // ابتدا حالت اولیه‌ی عناصر را تنظیم کنید
    if (index % 2 === 0) {
      // عناصر سمت چپ
      element.style.transform = "translateX(300px)";
    } else {
      // عناصر سمت راست
      element.style.transform = "translateX(-300px)";
    }
    element.style.opacity = "0";

    newObserver.observe(element);
  });
