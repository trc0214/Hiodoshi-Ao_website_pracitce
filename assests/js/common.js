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
