const involved_modal = document.getElementById("involved-container");
const involved_x = document.getElementById("involved-x");

window.addEventListener("load", () => {
    involved_modal.showModal();
});

involved_x.addEventListener("click", () => {
    involved_modal.close();
});