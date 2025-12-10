// pages/article_page.js
export default class ArticlePage extends HTMLElement {
    constructor() {
        super();
        // 模擬文章資料 (實際專案中通常會放在 articles.json)
        this.articles = [
            {
                id: 1,
                title: "108課綱升學趨勢：素養題型如何準備？",
                author: "王大明 主任",
                date: "2025-06-15",
                content: "面對108課綱的變革，傳統的死記硬背已無法應付現在的考試。素養題型強調的是「閱讀理解」與「邏輯推演」的能力。學生必須學會從長篇大論的題目中擷取關鍵資訊，並運用跨領域的知識來解決問題。家長應鼓勵孩子多閱讀課外讀物，並參與實驗或社會實踐...",
                ai_summary: [
                    "素養題型重視閱讀理解與邏輯推演，非死記硬背。",
                    "跨領域知識運用是解題關鍵。",
                    "建議多閱讀課外讀物並累積實作經驗。"
                ]
            },
            {
                id: 2,
                title: "如何幫助孩子克服數學焦慮？",
                author: "陳名師",
                date: "2025-07-02",
                content: "許多學生看到數學題目就害怕，這往往源於過去的挫折經驗。要克服數學焦慮，首先要建立「成長型思維」，讓孩子知道數學能力是可以透過練習進步的。其次，拆解問題，從簡單的步驟開始獲得成就感。最後，家長的鼓勵至關重要，不要過度強調分數...",
                ai_summary: [
                    "建立成長型思維，相信能力可經練習提升。",
                    "拆解問題，由簡入深累積成就感。",
                    "家長應重鼓勵輕分數，減少孩子壓力。"
                ]
            }
        ];
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="container py-5">
                <div class="text-center mb-5">
                    <h2 class="fw-bold" style="color: var(--yite-blue);">教育專欄</h2>
                    <p class="text-secondary">深度解析教育趨勢，分享學習心法</p>
                </div>

                <div class="row justify-content-center">
                    <div class="col-lg-8" id="article-list">
                        </div>
                </div>
            </div>
        `;

        this.renderArticles();
    }

    renderArticles() {
        const container = this.querySelector('#article-list');

        container.innerHTML = this.articles.map(article => `
            <div class="card border-0 shadow-sm mb-5">
                <div class="card-body p-4">
                    <div class="mb-3">
                        <span class="badge bg-light text-dark border">教育趨勢</span>
                        <span class="text-muted small ms-2"><i class="far fa-calendar-alt"></i> ${article.date}</span>
                    </div>
                    
                    <h3 class="fw-bold mb-3" style="color: var(--yite-blue);">${article.title}</h3>
                    
                    <p class="card-text text-secondary lh-lg mb-4">
                        ${article.content}
                    </p>

                    <div class="bg-light p-3 rounded mb-3 border border-secondary border-opacity-10">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <h6 class="fw-bold m-0 text-primary">
                                <i class="fas fa-robot me-1"></i> Gemini AI 摘要助手
                            </h6>
                            <button class="btn btn-sm btn-warning text-dark fw-bold btn-summary" data-id="${article.id}">
                                <i class="fas fa-magic me-1"></i> 生成 3 點摘要
                            </button>
                        </div>
                        
                        <div class="summary-content mt-2" id="summary-${article.id}">
                            <p class="text-muted small m-0 fst-italic">點擊按鈕，立即生成文章重點...</p>
                        </div>
                    </div>

                    <div class="text-end">
                        <a href="#" class="text-decoration-none fw-bold" style="color: var(--yite-gold);">閱讀全文 <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        `).join('');

        // 綁定按鈕事件
        this.querySelectorAll('.btn-summary').forEach(btn => {
            btn.addEventListener('click', (e) => this.generateSummary(e));
        });
    }

    generateSummary(e) {
        const btn = e.currentTarget;
        const articleId = btn.dataset.id;
        const summaryContainer = this.querySelector(`#summary-${articleId}`);
        const articleData = this.articles.find(a => a.id == articleId);

        // 1. 鎖定按鈕並顯示 Loading
        btn.disabled = true;
        btn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> 生成中...';

        // 2. 模擬 AI 思考延遲 (1.5秒)
        setTimeout(() => {
            // 3. 顯示摘要結果
            const points = articleData.ai_summary.map(point => `<li>${point}</li>`).join('');

            summaryContainer.innerHTML = `
                <ul class="mb-0 small text-dark fade-in">
                    ${points}
                </ul>
            `;

            // 4. 更新按鈕狀態
            btn.innerHTML = '<i class="fas fa-check me-1"></i> 已完成';
            btn.classList.remove('btn-warning');
            btn.classList.add('btn-success', 'text-white');

            // 加上淡入動畫類別
            const style = document.createElement('style');
            style.innerHTML = `
                .fade-in { animation: fadeIn 0.5s ease-in; }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            `;
            this.appendChild(style);

        }, 1500);
    }
}
customElements.define('article-page', ArticlePage);