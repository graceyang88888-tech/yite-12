// pages/home_page.js
export default class HomePage extends HTMLElement {
    async connectedCallback() {
        this.innerHTML = `
            <header class="hero-section d-flex align-items-center justify-content-center text-white text-center position-relative" 
                style="background: url('images/index.jpg') no-repeat center center/cover; height: 90vh;">
                <div class="overlay position-absolute top-0 start-0 w-100 h-100" style="background: rgba(22, 43, 78, 0.6);"></div>
                
                <div class="container position-relative z-1">
                    <h1 class="display-3 fw-bold mb-4">Live Your Dreams</h1>
                    <p class="lead mb-4 fs-4">自1987年起，深耕教育，成就無數菁英學子</p>
                    <a href="#courses" class="btn btn-warning btn-lg text-dark fw-bold px-5">查看熱門課程</a>
                </div>
            </header>

            <section class="py-5">
                <div class="container py-5">
                    <div class="row align-items-center">
                        <div class="col-lg-6 mb-4 mb-lg-0">
                            <img src="images/2.jpg" alt="About Us" class="img-fluid rounded shadow" style="max-width: 100%; height: auto;">
                        </div>
                        <div class="col-lg-6 ps-lg-5">
                            <h2 class="fw-bold mb-3" style="color: var(--yite-blue);">關於譯德文理補習班</h2>
                            <p class="text-secondary lh-lg mb-4">
                                我們相信每一個孩子都有無限的潛能。透過系統化的教學與個別化的輔導，我們在過去的三十年間，幫助了無數學生考取心中理想的第一志願。
                            </p>
                            <a href="#about" class="btn btn-outline-primary rounded-pill px-4">了解更多 <i class="fas fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="parallax-section d-flex align-items-center justify-content-center" 
                style="background: linear-gradient(rgba(242, 172, 62, 0.8), rgba(242, 172, 62, 0.8)), url('images/5.jpg') no-repeat fixed center center/cover; height: 400px;">
                <div class="text-center text-white container">
                    <h2 class="display-5 fw-bold mb-3">啟發思考，點燃熱情</h2>
                    <p class="fs-5">不僅僅是填鴨，我們更重視培養孩子解決問題的能力。</p>
                </div>
            </section>

            <section class="py-5 bg-light">
                <div class="container py-5">
                    <div class="d-flex justify-content-between align-items-end mb-5">
                        <h2 class="fw-bold" style="color: var(--yite-blue);">最新消息</h2>
                        <a href="#news" class="text-decoration-none fw-bold" style="color: var(--yite-gold);">查看更多 ></a>
                    </div>
                    
                    <div class="row" id="news-container">
                        <div class="text-center w-100">
                            <div class="spinner-border text-secondary" role="status"></div>
                        </div>
                    </div>
                </div>
            </section>
        `;

        //  Fetch News Data
        await this.loadNews();
    }

    async loadNews() {
        try {
            const response = await fetch('data/news.json');
            if (!response.ok) throw new Error('無法讀取資料');

            const allNews = await response.json();
            // 只顯示最新的 3 筆
            const latestNews = allNews.slice(0, 3);

            const container = this.querySelector('#news-container');
            container.innerHTML = latestNews.map(news => `
                <div class="col-md-4 mb-4">
                    <div class="card h-100 border-0 shadow-sm hover-card">
                        <div class="card-body">
                            <span class="badge bg-secondary mb-2">${news.category}</span>
                            <h5 class="card-title fw-bold text-dark mt-2">${news.title}</h5>
                            <p class="card-text text-muted small mb-3">${news.date}</p>
                            <p class="card-text text-truncate">${news.summary}</p>
                        </div>
                        <div class="card-footer bg-white border-0 pb-3">
                            <a href="#news" class="btn btn-sm btn-outline-secondary w-100 stretched-link">閱讀詳情</a>
                        </div>
                    </div>
                </div>
            `).join('');

        } catch (error) {
            console.error(error);
            this.querySelector('#news-container').innerHTML = `<p class="text-danger text-center">目前無法載入新聞資料。</p>`;
        }
    }
}

// 定義自定義元素
customElements.define('home-page', HomePage);