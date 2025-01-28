document.addEventListener("DOMContentLoaded", function () {
    const imgLink1 = document.getElementById('img-link-1');
    const imgLink2 = document.getElementById('img-link-2');

    const options = {
        root: null, // از viewport به عنوان مرجع استفاده می‌شود
        rootMargin: '0px',
        threshold: 0.2 // 20 درصد از المان باید در viewport باشد
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // اضافه کردن کلاس برای فعال کردن انیمیشن
                entry.target.classList.add('visible');

                // اگر می‌خواهید انیمیشن فقط یک بار اجرا شود، مشاهده‌گر را متوقف کنید
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // شروع مشاهده المان‌ها
    observer.observe(imgLink1);
    observer.observe(imgLink2);
});