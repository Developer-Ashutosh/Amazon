document.querySelector(".side-bar").addEventListener("click", function () {
    document.querySelector(".side-menu").style.display = "block";
});

document.querySelector(".fa-xmark").addEventListener("click", function () {
    document.querySelector(".side-menu").style.display = "none";
}
);
window.addEventListener("scroll", function () {
    document.querySelector(".side-menu").style.display = "none";
}
);