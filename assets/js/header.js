// header.js 中不使用 DOMContentLoaded（因為它不會再觸發）
(function () {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');

    if (!menuBtn || !menu) return;

    function adjustMenuPosition() {
        const header = document.querySelector('header');
        if (header && menu) {
            menu.style.top = `${header.offsetHeight}px`;
        }
    }

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });

    window.addEventListener('resize', adjustMenuPosition);
    adjustMenuPosition(); // ✅ 初次執行
})();
