// components/ai_chat_bot.js
class AiChatBot extends HTMLElement {
    connectedCallback() {
        // [cite: 63] 懸浮按鈕樣式與圖片
        const style = `
            <style>
                .chatbot-container {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    z-index: 1050;
                }
                .chat-btn {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    border: none;
                    background: transparent;
                    cursor: pointer;
                    transition: transform 0.3s;
                    padding: 0;
                }
                .chat-btn:hover { transform: scale(1.1); }
                .chat-btn img { width: 100%; height: 100%; object-fit: contain; }
                /* 預留對話視窗樣式 (預設隱藏) */
                .chat-window {
                    display: none;
                    width: 300px;
                    height: 400px;
                    background: white;
                    border-radius: 10px;
                    box-shadow: 0 5px 25px rgba(0,0,0,0.2);
                    position: absolute;
                    bottom: 70px;
                    right: 0;
                    flex-direction: column;
                    overflow: hidden;
                }
                .chat-window.active { display: flex; }
                .chat-header { background: var(--yite-blue); color: white; padding: 10px; display: flex; justify-content: space-between; }
                .chat-body { flex: 1; padding: 10px; overflow-y: auto; background: #f8f9fa; }
                .chat-footer { padding: 10px; border-top: 1px solid #ddd; display: flex; }
            </style>
        `;

        this.innerHTML = `
        ${style}
        <div class="chatbot-container">
            <div class="chat-window" id="chatWindow">
                <div class="chat-header">
                    <span>AI 客服助手</span>
                    <button type="button" class="btn-close btn-close-white" id="closeChat"></button>
                </div>
                <div class="chat-body" id="chatBody">
                    <div class="alert alert-light">您好！我是譯德 AI 助手，請問有什麼我可以幫您的？</div>
                </div>
                <div class="chat-footer">
                    <input type="text" class="form-control form-control-sm me-2" placeholder="輸入訊息...">
                    <button class="btn btn-sm btn-primary">送出</button>
                </div>
            </div>
            
            <button class="chat-btn" id="toggleChat">
                <img src="images/ai_chatbot.jpg" alt="AI Chat">
            </button>
        </div>
        `;

        // 綁定開關事件
        this.querySelector('#toggleChat').addEventListener('click', () => {
            this.querySelector('#chatWindow').classList.toggle('active');
        });
        this.querySelector('#closeChat').addEventListener('click', () => {
            this.querySelector('#chatWindow').classList.remove('active');
        });
    }
}
customElements.define('ai-chat-bot', AiChatBot);