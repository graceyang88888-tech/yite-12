// pages/news_page.js
export default class NewsPage extends HTMLElement {
    async connectedCallback() {
        this.innerHTML = `
            <div class="container py-5">
                <div class="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5">
                    <h2 class="fw-bold mb-3 mb-md-0" style="color: var(--yite-blue);">最新消息與公告</h2>
                    
                    <div class="btn-group" role="group" id="news-filters">
                        <button type="button" class="btn btn-outline-primary active" data-category="all">全部</button>
                        <button type="button" class="btn btn-outline-primary" data-category="行政公告">行政公告</button>
                        <button type="button" class="btn btn-outline-primary" data-category="榮譽榜">榮譽榜</button>
                    </div>
                </div>

                <div class="list-group list-group-flush border-top" id="news-list">
                    <div class="text-center py-5">
                        <div class="spinner-border text-secondary"></div>
                    </div>
                </div>
            </div>
        `;

        await this.loadNews();
        this.initFilters();
    }

    async loadNews() {
        try {
            const res = await fetch('data/news.json');
            this.allNews = await res.json();
            this.renderNews(this.allNews);
        } catch (err) {
            console.error(err);
            this.querySelector('#news-list').innerHTML = '<p class="text-danger">無法載入訊息。</p>';
        }
    }

    renderNews(data) {
        const container = this.querySelector('#news-list');
        if (data.length === 0) {
            container.innerHTML = '<div class="p-4 text-center text-muted">目前沒有此類別的消息。</div>';
            return;
        }

        container.innerHTML = data.map(item => `
            <a href="#" class="list-group-item list-group-item-action py-4 d-flex flex-column flex-md-row gap-3 align-items-start" onclick="return false;">
                <div class="d-flex flex-column align-items-center justify-content-center bg-light rounded p-2 border" style="min-width: 80px;">
                    <span class="h4 fw-bold mb-0 text-dark">${item.date.split('-')[2]}</span>
                    <span class="small text-uppercase text-muted">${item.date.split('-')[1]}月</span>
                </div>
                
                <div class="flex-grow-1">
                    <div class="d-flex align-items-center mb-2">
                        <span class="badge bg-warning text-dark me-2">${item.category}</span>
                        <h5 class="mb-0 fw-bold text-dark">${item.title}</h5>
                    </div>
                    <p class="text-secondary mb-0 text-truncate" style="max-width: 600px;">${item.summary}</p>
                </div>

                <div class="align-self-center d-none d-md-block text-muted">
                    <i class="fas fa-chevron-right"></i>
                </div>
            </a>
        `).join('');
    }

    initFilters() {
        const buttons = this.querySelectorAll('#news-filters button');
        buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // 1. 切換按鈕樣式
                buttons.forEach(b => b.classList.remove('active', 'btn-primary'));
                buttons.forEach(b => b.classList.add('btn-outline-primary'));

                e.target.classList.remove('btn-outline-primary');
                e.target.classList.add('active', 'btn-primary');

                // 2. 執行篩選
                const category = e.target.dataset.category;
                const filtered = category === 'all'
                    ? this.allNews
                    : this.allNews.filter(n => n.category === category);

                this.renderNews(filtered);
            });
        });
    }
}
customElements.define('news-page', NewsPage);