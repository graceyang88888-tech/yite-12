// pages/contact_page.js
export default class ContactPage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-6">
                        <h2 class="fw-bold mb-4" style="color: var(--yite-blue);">聯絡我們</h2>
                        <p class="text-muted mb-4">有任何課程諮詢或預約試聽的需求，歡迎填寫下方表單，我們將盡快與您聯繫。</p>
                        
                        <form onsubmit="alert('感謝您的留言！我們會盡快聯絡您。'); return false;">
                            <div class="mb-3">
                                <label for="name" class="form-label">家長/學生姓名</label>
                                <input type="text" class="form-control" id="name" required placeholder="請輸入姓名">
                            </div>
                            <div class="mb-3">
                                <label for="phone" class="form-label">聯絡電話</label>
                                <input type="tel" class="form-control" id="phone" required placeholder="09xx-xxx-xxx">
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">電子信箱 (選填)</label>
                                <input type="email" class="form-control" id="email" placeholder="name@example.com">
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">諮詢內容</label>
                                <textarea class="form-control" id="message" rows="5" placeholder="我想詢問國中數學課程..."></textarea>
                            </div>
                            <button type="submit" class="btn btn-warning w-100 fw-bold py-2">送出訊息</button>
                        </form>
                    </div>

                    <div class="col-lg-6">
                        <div class="h-100 d-flex flex-column">
                            <div class="bg-light p-4 rounded mb-4">
                                <h4 class="fw-bold mb-3" style="color: var(--yite-blue);">譯德文理補習班</h4>
                                <ul class="list-unstyled text-secondary">
                                    <li class="mb-2"><i class="fas fa-map-marker-alt me-2 text-warning"></i> 台北市某某區某某路 123 號</li>
                                    <li class="mb-2"><i class="fas fa-phone me-2 text-warning"></i> (02) 1234-5678</li>
                                    <li class="mb-2"><i class="fas fa-clock me-2 text-warning"></i> 週一至週五 14:00 - 21:30</li>
                                    <li><i class="fas fa-clock me-2 text-warning" style="opacity: 0;"></i> 週六 09:00 - 17:00 (週日公休)</li>
                                </ul>
                            </div>

                            <div class="flex-grow-1 border rounded overflow-hidden shadow-sm" style="min-height: 300px;">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.0359730551163!2d121.50501447412844!3d24.998893577839123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9d8c7b24d29%3A0x8826de25cee17eb6!2zMjM15paw5YyX5biC5Lit5ZKM5Y2A5pmv5a6J6LevMTLomZ8!5e0!3m2!1szh-TW!2stw!4v1764731643295!5m2!1szh-TW!2stw" 
                                    width="100%" 
                                    height="100%" 
                                    style="border:0;" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define('contact-page', ContactPage);