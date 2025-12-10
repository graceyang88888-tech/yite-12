// components/header.js
class YiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-custom fixed-top">
            <div class="container">
                
                <a class="navbar-brand d-flex align-items-center" href="#home">
                    <img src="images/yite_logo.jpg" alt="Yite Academy" height="40" class="me-2 rounded-circle">
                    <span class="fw-bold d-none d-sm-block" style="color: var(--yite-blue);">譯德補習班</span>
                    <span class="fw-bold d-block d-sm-none" style="color: var(--yite-blue);">譯德</span>
                </a>

                <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <i class="fas fa-bars fa-lg" style="color: var(--yite-blue);"></i>
                </button>

                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">YITE ACADEMY</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                            <li class="nav-item"><a class="nav-link" href="#home">首頁</a></li>
                            <li class="nav-item"><a class="nav-link" href="#about">關於我們</a></li>
                            <li class="nav-item"><a class="nav-link" href="#news">最新消息</a></li>
                            <li class="nav-item"><a class="nav-link" href="#courses">熱門課程</a></li>
                            <li class="nav-item"><a class="nav-link" href="#teachers">師資介紹</a></li>
                            <li class="nav-item"><a class="nav-link" href="#article">教育專欄</a></li>
                            <li class="nav-item"><a class="nav-link" href="#contact">聯絡我們</a></li>
                        </ul>
                        
                        <form class="d-flex mt-3 mt-lg-0" role="search" onsubmit="return false;">
                            <div class="input-group">
                                <input class="form-control form-control-sm" type="search" placeholder="搜尋..." aria-label="Search">
                                <button class="btn btn-warning btn-sm text-white" type="submit">
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
        `;

        this.initEffects();
    }

    initEffects() {
        // 1. 處理 Sticky Navbar (滾動變色)
        window.addEventListener('scroll', () => {
            const navbar = this.querySelector('.navbar-custom');
            const toggleIcon = this.querySelector('.fa-bars');
            const logoText = this.querySelectorAll('.navbar-brand span');

            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
                if (toggleIcon) toggleIcon.style.color = '#fff';
                logoText.forEach(span => span.style.color = '#fff');
            } else {
                navbar.classList.remove('scrolled');
                if (toggleIcon) toggleIcon.style.color = 'var(--yite-blue)';
                logoText.forEach(span => span.style.color = 'var(--yite-blue)');
            }
        });

        // 2. ★ 關鍵功能：點擊連結後自動收回選單 ★
        const navLinks = this.querySelectorAll('.nav-link');
        const offcanvasElement = document.getElementById('offcanvasNavbar');

        // 取得 Bootstrap 的 Offcanvas 實例 (需要確保 Bootstrap JS 已載入)
        // 我們在點擊時才去抓實例，確保 DOM 已經準備好

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // 檢查目前是否為手機版 (offcanvas 是否顯示中)
                // Bootstrap 會在 body 加上 .offcanvas-open，或者檢查 offcanvas 元素是否有 .show
                if (offcanvasElement.classList.contains('show')) {
                    // 透過 Bootstrap API 關閉選單
                    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
                    if (bsOffcanvas) {
                        bsOffcanvas.hide();
                    }
                }
            });
        });
    }
}
customElements.define('yite-header', YiteHeader);