// pages/about_page.js
export default class AboutPage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="bg-light py-5 text-center">
                <div class="container">
                    <h1 class="fw-bold display-5" style="color: var(--yite-blue);">關於譯德</h1>
                    <p class="lead text-secondary">專注教育三十載，成就您的未來</p>
                </div>
            </div>

            <div class="container py-5">
                <div class="row align-items-center">
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <img src="images/2.jpg" alt="教學現場" class="img-fluid rounded shadow w-100">
                    </div>
                    <div class="col-lg-6 ps-lg-5">
                        <h3 class="fw-bold mb-3" style="color: var(--yite-blue);">起源與傳承</h3>
                        <p class="text-secondary lh-lg">
                            譯德文理補習班成立於 1987 年 [cite: 4]，深耕在地教育三十餘年。
                            創辦人深信「教育不是灌輸，而是點燃火焰」。我們從一間小小的教室起步，
                            堅持小班制教學與個別化輔導，陪伴無數孩子走過升學的關鍵時刻。
                        </p>
                        <p class="text-secondary lh-lg">
                            隨著時代變遷，我們不斷引進數位教學工具與 AI 輔助學習系統，
                            但「以人為本」的教育初衷始終未變。
                        </p>
                    </div>
                </div>
            </div>

            <div class="parallax-section d-flex align-items-center justify-content-center text-center text-white" 
                style="background: linear-gradient(rgba(22, 43, 78, 0.7), rgba(22, 43, 78, 0.7)), url('images/5.jpg') no-repeat fixed center center/cover; height: 300px;">
                <div class="container">
                    <h2 class="fw-bold">我們的核心價值</h2>
                    <p class="fs-5 mt-2">專業 • 熱忱 • 創新 • 陪伴</p>
                </div>
            </div>

            <div class="container py-5">
                <h3 class="text-center fw-bold mb-5" style="color: var(--yite-blue);">為什麼選擇譯德？</h3>
                <div class="row g-4 text-center">
                    <div class="col-md-4">
                        <div class="p-4 border rounded shadow-sm h-100">
                            <i class="fas fa-users fa-3x mb-3 text-warning"></i>
                            <h5 class="fw-bold">精緻小班教學</h5>
                            <p class="text-secondary small">確保每位學生都能獲得老師充分的關注與指導，問題不過夜。</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="p-4 border rounded shadow-sm h-100">
                            <i class="fas fa-laptop-code fa-3x mb-3 text-warning"></i>
                            <h5 class="fw-bold">數位與 AI 輔助</h5>
                            <p class="text-secondary small">引入現代化學習分析工具，精準診斷學習盲點，提升複習效率。</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="p-4 border rounded shadow-sm h-100">
                            <i class="fas fa-heart fa-3x mb-3 text-warning"></i>
                            <h5 class="fw-bold">雙導師制度</h5>
                            <p class="text-secondary small">除了授課名師，每班配置專責班導師，全方位照顧學生的學習與心理狀態。</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define('about-page', AboutPage);