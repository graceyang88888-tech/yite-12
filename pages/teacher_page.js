// pages/teacher_page.js
export default class TeacherPage extends HTMLElement {
    async connectedCallback() {
        this.innerHTML = `
            <div class="bg-white py-5">
                <div class="container">
                    <h2 class="text-center mb-4 fw-bold" style="color: var(--yite-blue);">專業師資群</h2>
                    
                    <yite-sidebar-layout>
                        
                        <div slot="sidebar-menu">
                            <div class="card border-0 bg-light p-3">
                                <h4 class="mb-3" style="color: var(--yite-blue);">加入我們</h4>
                                <p class="small text-secondary">
                                    我們擁有一群充滿熱忱與專業的教學團隊。嚴格的師資篩選與培訓，只為給孩子最好的教育品質。
                                </p>
                                <hr>
                                <p class="fw-bold mb-1">想成為我們的夥伴？</p>
                                <a href="#contact" class="btn btn-sm btn-outline-primary">聯絡我們</a>
                            </div>
                        </div>

                        <div slot="main-content">
                            <div class="row g-4" id="teachers-container">
                                <div class="col-12 text-center">
                                    <div class="spinner-border text-warning"></div>
                                </div>
                            </div>
                        </div>

                    </yite-sidebar-layout>
                </div>
            </div>
        `;

        await this.loadTeachers();
    }

    async loadTeachers() {
        try {
            const res = await fetch('data/teachers.json');
            const teachers = await res.json();

            const container = this.querySelector('#teachers-container');
            container.innerHTML = teachers.map(teacher => `
                <div class="col-lg-12">
                    <div class="card mb-3 shadow border-0 overflow-hidden">
                        <div class="row g-0 align-items-center">
                            <div class="col-md-4">
                                <img src="${teacher.image}" class="img-fluid w-100" alt="${teacher.name}" style="height: 250px; object-fit: cover;">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body p-4">
                                    <h5 class="card-title fw-bold fs-4 mb-0">${teacher.name}</h5>
                                    <p class="text-warning fw-bold mb-2">${teacher.subject}</p>
                                    <p class="card-text text-muted mb-3"><small>${teacher.education}</small></p>
                                    <p class="card-text">${teacher.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');

        } catch (err) {
            console.error(err);
        }
    }
}
customElements.define('teacher-page', TeacherPage);