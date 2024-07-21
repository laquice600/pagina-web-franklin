
const toggleButton = document.getElementById("toggle-footer");
const footerContent = document.getElementById("footer-content");

toggleButton.addEventListener("click", () => {
    footerContent.style.display = footerContent.style.display === "none" ? "block" : "none";
});


