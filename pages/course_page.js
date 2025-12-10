// pages/course_page.js
export default class CoursePage extends HTMLElement {
    async connectedCallback() {
        this.innerHTML = `
            <div class="bg-light py-5">
                <div class="container">
                    <h2 class="text-center mb-5 fw-bold" style="color: var(--yite-blue);">熱門課程系列</h2>
                    
                    <yite-sidebar-layout>
                        
                        <div slot="sidebar-menu">
                            <h4 class="mb-3 fw-bold">課程分類</h4>
                            <div class="list-group shadow-sm" id="category-filters">
                                <button type="button" class="list-group-item list-group-item-action active d-flex justify-content-between align-items-center" data-category="all">
                                    全部課程 <i class="fas fa-chevron-right small"></i>
                                </button>
                                <button type="button" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-category="國小部">
                                    國小部 <i class="fas fa-chevron-right small"></i>
                                </button>
                                <button type="button" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-category="國中部">
                                    國中部 <i class="fas fa-chevron-right small"></i>
                                </button>
                                <button type="button" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-category="高中部">
                                    高中部 <i class="fas fa-chevron-right small"></i>
                                </button>
                            </div>
                            
                            <div class="mt-4 p-3 bg-white rounded shadow-sm border">
                                <h6 class="fw-bold text-muted">課程諮詢</h6>
                                <p class="small text-secondary mb-2">不確定孩子適合什麼課程？歡迎預約免費試聽。</p>
                                <a href="#contact" class="btn btn-sm btn-outline-warning w-100 text-dark">預約試聽</a>
                            </div>
                        </div>

                        <div slot="main-content">
                            <nav aria-label="breadcrumb" class="mb-4">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#home" class="text-decoration-none text-muted">首頁</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">熱門課程</li>
                                </ol>
                            </nav>

                            <div class="row g-4" id="courses-container">
                                <div class="col-12 text-center py-5">
                                    <div class="spinner-border text-primary" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                    <p class="mt-2 text-muted">正在為您載入課程...</p>
                                </div>
                            </div>
                        </div>

                    </yite-sidebar-layout>
                </div>
            </div>
        `;

        await this.loadCourses();
        this.initFilters();
    }

    async loadCourses() {
        try {
            const res = await fetch('data/courses.json');
            this.courses = await res.json();
            this.renderCourses(this.courses);
        } catch (err) {
            console.error(err);
            this.querySelector('#courses-container').innerHTML = '<div class="col-12"><div class="alert alert-danger">無法讀取課程資料，請稍後再試。</div></div>';
        }
    }

    renderCourses(data) {
        const container = this.querySelector('#courses-container');
        if (data.length === 0) {
            container.innerHTML = '<div class="col-12"><div class="alert alert-info">此分類目前尚無課程。</div></div>';
            return;
        }

        container.innerHTML = data.map(course => `
            <div class="col-lg-6 col-md-6 fade-in"> 
                <div class="card h-100 shadow-sm border-0 hover-lift">
                    <div class="position-relative">
                        <img src="${course.image}" class="card-img-top" alt="${course.name}" style="height: 200px; object-fit: cover;">
                        <span class="position-absolute top-0 end-0 bg-warning text-dark badge m-2 shadow-sm">${course.category}</span>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title fw-bold text-dark mb-2">${course.name}</h5>
                        <p class="card-text text-secondary small flex-grow-1 line-clamp-2">${course.summary}</p>
                        <div class="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
                            <small class="text-primary fw-bold"><i class="fas fa-chalkboard-teacher me-1"></i> ${course.teacher}</small>
                            <button class="btn btn-sm btn-outline-primary rounded-pill">課程詳情</button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    initFilters() {
        const buttons = this.querySelectorAll('#category-filters button');
        buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // 處理按鈕樣式切換
                // 注意：因為有點擊 icon 的可能性，使用 e.currentTarget 確保抓到 button 元素
                const targetBtn = e.currentTarget;

                buttons.forEach(b => b.classList.remove('active'));
                targetBtn.classList.add('active');

                // 篩選邏輯
                const category = targetBtn.dataset.category;
                const filtered = category === 'all'
                    ? this.courses
                    : this.courses.filter(c => c.category === category);

                this.renderCourses(filtered);
            });
        });
    }
}
customElements.define('course-page', CoursePage);