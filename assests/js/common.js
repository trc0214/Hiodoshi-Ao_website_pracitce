function initHeaderMenu() {
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");

    if (!menuBtn || !menu) return;

    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active");
        menu.classList.toggle("active");
    });
}

fetch("/includes/header.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("header-placeholder").innerHTML = html;
        initHeaderMenu(); // 🔧 載入 header 之後再綁定事件
    });
