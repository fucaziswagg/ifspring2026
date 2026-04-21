const closePopupBtn = document.getElementById("popup-close-btn");
const initialPopup = document.getElementById("initial-popup");

window.addEventListener("load", () => {
    initialPopup.classList.remove("hidden");

    requestAnimationFrame(() => {
        initialPopup.classList.add("show");
    });
});

closePopupBtn.addEventListener("click", () => {
    initialPopup.classList.remove("show");

    setTimeout(() => {
        initialPopup.classList.add("hidden"); // hide after fade completes
    }, 1000);
});

