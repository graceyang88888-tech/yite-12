// components/sidebar.js
class YiteSidebarLayout extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                }
                * { box-sizing: border-box; }

                /* 佈局容器 */
                .layout-container {
                    display: grid;
                    gap: 2rem;
                    width: 100%;
                    /* 手機版預設：單欄 (上下堆疊) */
                    grid-template-columns: 1fr; 
                }

                /* 側邊欄外觀 */
                .sidebar {
                    background: #f8f9fa;
                    padding: 1.5rem;
                    border-radius: 8px;
                    border: 1px solid #eee;
                }

                /* --- 電腦版斷點 (平板以上) --- */
                /* 只要大於 768px，強制切成左右兩塊 */
                @media (min-width: 768px) {
                    .layout-container {
                        /* 左邊固定 260px，右邊自動填滿 (1fr) */
                        grid-template-columns: 260px 1fr; 
                        align-items: start;
                    }

                    .sidebar {
                        border-top: 4px solid var(--yite-blue, #162B4E);
                        position: sticky; /* 讓側邊欄固定 */
                        top: 90px;
                        height: fit-content; /* 內容多高就多高 */
                    }
                }

                /* 標題樣式 */
                ::slotted(h3), ::slotted(h4), ::slotted(h6) {
                    color: #162B4E;
                    border-bottom: 2px solid #F2AC3E;
                    padding-bottom: 8px;
                    margin-bottom: 16px;
                }
            </style>

            <div class="layout-container">
                <aside class="sidebar">
                    <slot name="sidebar-menu"></slot>
                </aside>

                <section class="content">
                    <slot name="main-content"></slot>
                </section>
            </div>
        `;
    }
}
customElements.define('yite-sidebar-layout', YiteSidebarLayout);