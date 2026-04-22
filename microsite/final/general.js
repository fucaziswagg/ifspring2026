const navBtn = document.getElementById("nav-btn");
const popupMenu = document.getElementById("popup-menu");
const menu_overlay = document.getElementById("popup-overlay");
const menu_x = document.getElementById("menu-x");
const involvedBtns = document.querySelectorAll(".involved-btn");
const involved_modal = document.getElementById("involved-container");
const involved_x = document.getElementById("involved-x");

navBtn.addEventListener("click", () => {
    popupMenu.classList.add("open");
    menu_overlay.classList.add("open");
});

function closePopup() {
    popupMenu.classList.remove("open");
    menu_overlay.classList.remove("open");
}
menu_overlay.addEventListener("click", closePopup);
menu_x.addEventListener("click", closePopup);

involvedBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        involved_modal.showModal();
    });
});
involved_x.addEventListener("click", () => {
    involved_modal.close();
});
involved_modal.addEventListener("click", (e) => {
    const dialogRect = involved_modal.getBoundingClientRect();

    const clickedOutside =
        e.clientX < dialogRect.left ||
        e.clientX > dialogRect.right ||
        e.clientY < dialogRect.top ||
        e.clientY > dialogRect.bottom;

    if (clickedOutside) {
        involved_modal.close();
    }
});
