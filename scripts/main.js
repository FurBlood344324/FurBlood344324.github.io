document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");
    const page = window.location.pathname.split("/").pop() || "index.html";

    for (let i = 0; i < links.length; i++) {
        if (links[i].getAttribute("href") === page) {
            links[i].classList.add("active");
        }
    }
});
