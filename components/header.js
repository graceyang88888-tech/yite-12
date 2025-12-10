// components/header.js
class YiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-custom fixed-top">
            <div class="container">
                <a class="navbar-brand d-flex align-items-center" href="#home">
                    <img src="images/yite_logo.jpg" alt="Yite Academy" height="40" class="me-2">
                    <span class="fw-bold" style="color: var(--yite-blue);">譯德補習班</span>
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#yiteNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="yiteNavbar">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link" href="#home">首頁</a></li>
                        <li class="nav-item"><a class="nav-link" href="#about">關於我們</a></li>
                        <li class="nav-item"><a class="nav-link" href="#news">最新消息</a></li>
                        <li class="nav-item"><a class="nav-link" href="#courses">熱門課程</a></li>
                        <li class="nav-item"><a class="nav-link" href="#teachers">師資介紹</a></li>
                        <li class="nav-item"><a class="nav-link" href="#article">教育專欄</a></li>
                        <li class="nav-item"><a class="nav-link" href="#contact">聯絡我們</a></li>
                    </ul>
                    
                    <form class="d-flex" role="search">
                        <div class="input-group">
                            <input class="form-control form-control-sm" type="search" placeholder="搜尋課程..." aria-label="Search">
                            <button class="btn btn-outline-warning" type="submit">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
        `;

        // [cite: 51] 加入 Scroll 監聽，實現 Sticky 變色效果
        window.addEventListener('scroll', () => {
            const navbar = this.querySelector('.navbar-custom');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}
customElements.define('yite-header', YiteHeader);