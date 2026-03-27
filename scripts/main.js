// Aktif sayfa linkini vurgula
document.addEventListener("DOMContentLoaded", function () {
    var linkler = document.querySelectorAll("nav ul li a");
    var sayfa = window.location.pathname.split("/").pop() || "index.html";

    for (var i = 0; i < linkler.length; i++) {
        if (linkler[i].getAttribute("href") === sayfa) {
            linkler[i].classList.add("active");
        }
    }
});
