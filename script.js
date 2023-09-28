const scroll = new LocomotiveScroll({
    el: document.querySelector('#wrapper'),
    smooth: true
});

const sideMenu = function () {
    document.querySelector(".side-bar").addEventListener("click", function () {
        document.querySelector(".side-menu").style.display = "block";
    });

    document.querySelector(".fa-xmark").addEventListener("click", function () {
        document.querySelector(".side-menu").style.display = "none";
    }
    );
}
sideMenu();
