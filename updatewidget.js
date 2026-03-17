(function() {
    const style = document.createElement('style');
    style.textContent = `
        :root {
            --widget-bg: #202124;
            --widget-surface: #303134;
            --widget-text: #e8eaed;
            --widget-secondary: #9aa0a6;
            --widget-accent: #7dabff;
            --widget-shadow: 0 4px 12px rgba(0,0,0,0.5);
            --widget-transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .update-widget-container {
            position: fixed;
            bottom: 24px;
            right: 24px;
            z-index: 9999;
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            pointer-events: none;
        }

        .update-info-panel {
            background-color: var(--widget-bg);
            color: var(--widget-text);
            padding: 16px;
            border-radius: 12px;
            box-shadow: var(--widget-shadow);
            margin-bottom: 12px;
            width: 240px;
            transform: translateY(20px) scale(0.9);
            opacity: 0;
            transition: var(--widget-transition);
            border: 1px solid var(--widget-surface);
            pointer-events: auto;
            visibility: hidden;
        }

        .update-info-panel.is-visible {
            transform: translateY(0) scale(1);
            opacity: 1;
            visibility: visible;
        }

        .update-info-panel h4 {
            margin: 0 0 8px 0;
            font-size: 14px;
            font-weight: 500;
            color: var(--widget-accent);
        }

        .update-info-panel p {
            margin: 4px 0;
            font-size: 13px;
            color: var(--widget-secondary);
        }

        .update-info-panel .timestamp {
            color: var(--widget-text);
            font-weight: 500;
        }

        .update-trigger-btn {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: var(--widget-bg);
            border: 1px solid var(--widget-surface);
            box-shadow: var(--widget-shadow);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: var(--widget-transition);
            pointer-events: auto;
            padding: 0;
            outline: none;
        }

        .update-trigger-btn:hover {
            background-color: var(--widget-surface);
            transform: scale(1.05);
        }

        .update-trigger-btn:active {
            transform: scale(0.95);
        }

        .update-trigger-btn img {
            width: 20px;
            height: 20px;
            opacity: 0.9;
        }

        .update-trigger-btn.active {
            background-color: var(--widget-accent);
        }
        
        .update-trigger-btn.active img {
            filter: invert(0); /* Black icon when background is light blue */
        }
    `;
    document.head.appendChild(style);

    const container = document.createElement('div');
    container.className = 'update-widget-container';

    const lastUpdatedDate = document.lastModified ? new Date(document.lastModified).toLocaleDateString() : 'Recently';

    container.innerHTML = `
        <div class="update-info-panel" id="updatePanel">
            <h4>Data Info</h4>
            <p>Last updated:</p>
            <p class="timestamp">${lastUpdatedDate}</p>
        </div>
        <button class="update-trigger-btn" id="updateBtn" title="Site Info">
            <img src="assets/favicon.png" alt="!">
        </button>
    `;

    document.body.appendChild(container);

    const btn = document.getElementById('updateBtn');
    const panel = document.getElementById('updatePanel');

    const togglePanel = (e) => {
        e.stopPropagation();
        const isVisible = panel.classList.toggle('is-visible');
        btn.classList.toggle('active', isVisible);
    };

    btn.addEventListener('click', togglePanel);

    document.addEventListener('click', (e) => {
        if (!container.contains(e.target)) {
            panel.classList.remove('is-visible');
            btn.classList.remove('active');
        }
    });

})();