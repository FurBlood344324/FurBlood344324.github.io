// Aktif sayfa linkini vurgula
document.addEventListener("DOMContentLoaded", function () {
    const linkler = document.querySelectorAll("nav ul li a");
    const sayfa = window.location.pathname.split("/").pop() || "index.html";

    for (let i = 0; i < linkler.length; i++) {
        if (linkler[i].getAttribute("href") === sayfa) {
            linkler[i].classList.add("active");
        }
    }
});
