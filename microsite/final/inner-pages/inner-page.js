const butterfly = document.getElementById("header-img");
const mainImg = document.getElementById("main-img");
const mainFigure = document.getElementById("main-figure");

window.addEventListener("load", () => {
    setTimeout(() => {
    butterfly.classList.add("fly-in");
    }, 500); // 0.5 second delay
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        setTimeout(() => {
            mainImg.classList.add("reveal");
        }, 500); // 0.5 second delay
        observer.unobserve(mainFigure); // run only once
        }
    });
    }, {
    threshold: 0.3 // triggers when 30% of the image is visible
});

observer.observe(mainFigure);
