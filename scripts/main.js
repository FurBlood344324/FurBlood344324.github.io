// ===== Furkan Çevik Portfolyo — Ana Script Dosyası =====

document.addEventListener("DOMContentLoaded", () => {

    // ---- 1. Aktif Sayfa Navigasyon Vurgulama ----
    const navLinks = document.querySelectorAll("nav ul li a");
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        if (href === currentPage) {
            link.classList.add("active");
        }
    });

    // ---- 2. Scroll-to-Top Butonu ----
    const scrollBtn = document.createElement("button");
    scrollBtn.textContent = "↑";
    scrollBtn.setAttribute("aria-label", "Sayfanın başına dön");
    scrollBtn.id = "scrollTopBtn";

    // Buton stilleri (inline — harici CSS'e bağımlı değil)
    Object.assign(scrollBtn.style, {
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        width: "44px",
        height: "44px",
        fontSize: "1.3rem",
        fontWeight: "bold",
        color: "#fff",
        backgroundColor: "#e94560",
        border: "none",
        borderRadius: "50%",
        cursor: "pointer",
        opacity: "0",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        transform: "translateY(10px)",
        zIndex: "1000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    });

    document.body.appendChild(scrollBtn);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollBtn.style.opacity = "1";
            scrollBtn.style.transform = "translateY(0)";
        } else {
            scrollBtn.style.opacity = "0";
            scrollBtn.style.transform = "translateY(10px)";
        }
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // ---- 3. Bölümlere Giriş Animasyonu (Fade-In) ----
    const sections = document.querySelectorAll("main section, main article");

    // Başlangıçta gizle
    sections.forEach((sec) => {
        sec.style.opacity = "0";
        sec.style.transform = "translateY(20px)";
        sec.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.12,
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach((sec) => fadeInObserver.observe(sec));

    // ---- 4. Footer Yılı Otomatik Güncelleme ----
    const footerP = document.querySelector("footer p");
    if (footerP) {
        const year = new Date().getFullYear();
        footerP.innerHTML = footerP.innerHTML.replace(/\d{4}/, year);
    }
});
