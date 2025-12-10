// components/footer.js
class YiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer style="background-color: var(--yite-blue); color: var(--text-light);" class="py-5 mt-auto">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <h5>譯德文理補習班</h5>
                        <p>自1987年起，專注於提供最優質的升學輔導。</p>
                    </div>
                    <div class="col-md-4 mb-3">
                        <h5>快速連結</h5>
                        <ul class="list-unstyled">
                            <li><a href="#about" class="text-decoration-none text-white-50">關於我們</a></li>
                            <li><a href="#courses" class="text-decoration-none text-white-50">課程介紹</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 mb-3">
                        <h5>聯絡資訊</h5>
                        <p><i class="fas fa-phone me-2"></i> (02) 1234-5678</p>
                        <p><i class="fas fa-map-marker-alt me-2"></i> 台北市某某區某某路123號</p>
                    </div>
                </div>
                <hr style="border-color: rgba(255,255,255,0.1);">
                <div class="text-center small">
                    &copy; 2025 Yite Academy. All Rights Reserved.
                </div>
            </div>
        </footer>
        `;
    }
}
customElements.define('yite-footer', YiteFooter);