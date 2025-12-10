// router.js
export default class Router {
    constructor() {
        this.routes = {
            '': 'home_page',       // 預設首頁
            '#home': 'home_page',
            '#about': 'about_page',
            '#news': 'news_page',
            '#courses': 'course_page',
            '#teachers': 'teacher_page',
            '#contact': 'contact_page',
            '#article': 'article_page' // [cite: 79]
        };
        this.viewContainer = document.getElementById('router-view');
    }

    init() {
        window.addEventListener('hashchange', () => this.loadRoute());
        this.loadRoute(); // 初始載入
    }

    async loadRoute() {
        const hash = window.location.hash || '';
        const pageName = this.routes[hash] || '404'; // 如果找不到路由則顯示 404

        // 簡單的載入動畫
        this.viewContainer.innerHTML = '<div class="text-center mt-5"><div class="spinner-border text-secondary"></div></div>';

        try {
            // 動態匯入 Pages 元件 [cite: 19]
            // 注意：我們假設 pages 資料夾下有對應的 .js 檔，並 export default 一個 Web Component 或渲染函數
            const module = await import(`./pages/${pageName}.js`);

            // 清空容器並加入新頁面的 Web Component
            // 假設每個頁面都定義為 <page-name-component>
            // 這裡為了彈性，我們先假設每個 page js file 會負責渲染自己
            // 但依照 Web Component 規範，最乾淨的做法是插入標籤：

            this.viewContainer.innerHTML = ''; // 清空
            const pageElement = document.createElement(`${pageName.replace('_', '-')}`);
            this.viewContainer.appendChild(pageElement);

            // 滾動回頂部
            window.scrollTo(0, 0);

        } catch (error) {
            console.error('Page load error:', error);
            this.viewContainer.innerHTML = `<div class="container py-5"><h3>頁面建構中 (404)</h3><p>無法載入 ${pageName}</p></div>`;
        }
    }
}