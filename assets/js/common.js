// ========================== 常數與初始化 ==========================
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
    loadBanner();
    initGalleryModal();
});

// ========================== 載入區 ==========================
function loadHeader() {
    fetch('/includes/header.html')
        .then(res => res.text())
        .then(html => {
            document.getElementById('header-placeholder').innerHTML = html;

            highlightCurrentMenu();
            initHeaderMenu();

            setTimeout(adjustMenuPosition, 1000);
            window.addEventListener('resize', adjustMenuPosition);
        });
}

function loadFooter() {
    fetch('/includes/footer.html')
        .then(res => res.text())
        .then(html => {
            document.getElementById('footer-placeholder').innerHTML = html;
        });
}

function loadBanner() {
    fetch('/includes/banner.html')
        .then(res => res.text())
        .then(html => {
            document.getElementById('banner-placeholder').innerHTML = html;
        });
}

// ========================== Header Menu 功能 ==========================
function initHeaderMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');

    if (!menuBtn || !menu) return;

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    });

    // 點擊任一連結後收起選單（手機 UX）
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            menuBtn.classList.remove('active');
        });
    });
}

function adjustMenuPosition() {
    const header = document.querySelector('header');
    const menu = document.querySelector('.menu');
    const spacer = document.querySelector('.header-spacer');

    if (header) {
        const headerHeight = header.offsetHeight;

        // 設定 menu 的 top（可選）
        if (menu) {
            menu.style.top = `${headerHeight}px`;
        }

        // ✅ 設定 spacer 高度
        if (spacer) {
            spacer.style.height = `${headerHeight}px`;
        }
    }
}

function highlightCurrentMenu() {
    const currentPath = window.location.pathname.replace(/\/$/, '');
    const menuLinks = document.querySelectorAll('.menu a');
    console.log("Current path:", currentPath);

    menuLinks.forEach(link => {
        const linkPath = link.getAttribute('href')?.replace(/\/$/, '');
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
}

// ========================== 圖片 Modal ==========================
function initGalleryModal() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');

    if (!modal || !modalImg) return;

    galleryItems.forEach(img => {
        img.addEventListener('dblclick', () => {
            modalImg.src = img.src;
            modal.classList.add('show');
        });
    });
}

function hideModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.classList.remove('show');
    }
}
