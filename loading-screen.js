(function() {
    const style = document.createElement('style');
    style.textContent = `
        #coc-loader-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: #020617; 
            z-index: 999999;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: opacity 0.5s ease, visibility 0.5s ease;
        }

        #coc-loader-overlay.hidden {
            opacity: 0;
            visibility: hidden;
        }

        #coc-loader-img {
            width: 250px;
            height: auto;
            animation: float-sway 3s infinite ease-in-out;
        }

        .coc-loading-text {
            margin-top: 24px;
            color: #f3c31b;
            font-family: 'Open Sans', sans-serif;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 3px;
            font-size: 1.5rem;
            animation: blink 1.5s infinite both;
        }

        @keyframes float-sway {
            0% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-15px) rotate(2deg); }
            66% { transform: translateY(5px) rotate(-2deg); }
            100% { transform: translateY(0px) rotate(0deg); }
}

        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
    `;
    document.head.appendChild(style);

    const overlay = document.createElement('div');
    overlay.id = 'coc-loader-overlay';

    const img = document.createElement('img');
    img.id = 'coc-loader-img';
    img.src = 'assets/loading.png'; 
    img.alt = 'Loading...';

    const text = document.createElement('div');
    text.className = 'coc-loading-text';
    text.innerText = 'Grinderouz';

    overlay.appendChild(img);
    overlay.appendChild(text);

    if (document.body) {
        document.body.prepend(overlay);
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            document.body.prepend(overlay);
        });
    }

    window.addEventListener('load', () => {
        setTimeout(() => {
            overlay.classList.add('hidden');
            
            setTimeout(() => {
                if (overlay.parentNode) {
                    overlay.parentNode.removeChild(overlay);
                }
            }, 500); 
            
        }, 600); 
    });
})();