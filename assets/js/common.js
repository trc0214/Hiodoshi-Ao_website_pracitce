function initHeaderMenu() {
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");

    if (!menuBtn || !menu) return;

    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active");
        menu.classList.toggle("active");
    });
}

function adjustMenuPosition() {
    const header = document.querySelector('header');
    const menu = document.querySelector('.menu');
    if (header && menu) {
        const headerHeight = header.offsetHeight;
        menu.style.top = `${headerHeight}px`;
    }
}

// 載入 header 並初始化
fetch("/includes/header.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("header-placeholder").innerHTML = html;

        // header 載入完，初始化 menu 功能
        initHeaderMenu();

        // 等待一秒後再初始化調整 menu 位置
        setTimeout(() => {
            adjustMenuPosition();
        }, 1000);

        // 監聽 resize 事件，動態調整位置
        window.addEventListener('resize', adjustMenuPosition);
    });

// 載入 footer 並初始化
fetch("/includes/footer.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("footer-placeholder").innerHTML = html;
    });

fetch("/includes/banner.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("banner-placeholder").innerHTML = html;
    })

document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');

    galleryItems.forEach(img => {
        img.addEventListener('dblclick', () => {
            modalImg.src = img.src;
            modal.classList.add('show');
        });
    });
});

function hideModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('show');
}

document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname;
    const menuLinks = document.querySelectorAll(".menu a");

    menuLinks.forEach(link => {
        if (link.getAttribute("href") = currentPath) {
            link.classList.add("active");
        }
    });
    console.log("Current path:", currentPath, "Menu links:", menuLinks);
});

// 動態載入 header.html
fetch('/includes/header.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById('header-placeholder').innerHTML = html;

        // ✅ 等 header 插入後再選取 menu link 並高亮當前頁
        const path = window.location.pathname;
        console.log("Current path:", path);

        const menuLinks = document.querySelectorAll('.menu a');
        console.log("Menu links:", menuLinks);

        menuLinks.forEach(link => {
            if (link.getAttribute('href') === path) {
                link.classList.add('active');  // 你可在 CSS 裡定義 .active 顏色
            }
        });
    });