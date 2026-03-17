(function() {
    const style = document.createElement('style');
    style.textContent = `
        .clash-banner-wrapper {
            position: fixed;
            bottom: 20px; /* Floating slightly above the bottom */
            left: 0;
            width: 100%;
            display: flex;
            justify-content: center;
            z-index: 100; /* High z-index to stay on top of other content */
            pointer-events: none; /* Allows clicking things behind the wrapper */
            animation: slideUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .clash-banner {
            pointer-events: auto; /* Re-enable clicks for the banner itself */
            background: linear-gradient(to bottom, #4a90e2, #2150a5);
            border: 4px solid #f3c31b;
            border-radius: 16px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.6), inset 0 2px 0 rgba(255,255,255,0.2);
            padding: 12px 24px;
            max-width: 95%;
            width: 550px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
        }

        .clash-banner-content {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .clash-icon {
            width: 44px;
            height: 44px;
            background: #f3c31b;
            border: 2px solid #000;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 3px 3px 0 rgba(0,0,0,0.4);
            flex-shrink: 0;
        }

        .clash-text {
            color: white;
            text-shadow: 2px 2px 0px #000;
            font-family: 'Open Sans', sans-serif;
            font-weight: 800;
            line-height: 1.2;
        }

        .clash-text .primary {
            font-size: 0.95rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            display: block;
        }

        .clash-text .secondary {
            font-size: 0.75rem;
            color: #ffd700;
            display: block;
            margin-top: 2px;
        }

        .clash-close-btn {
            background: #e74c3c;
            border: 2px solid #000;
            border-radius: 50%;
            color: white;
            width: 26px;
            height: 26px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 14px;
            font-weight: bold;
            box-shadow: 2px 2px 0 rgba(0,0,0,0.3);
            transition: transform 0.1s, background 0.2s;
            margin-left: 15px;
            flex-shrink: 0;
        }

        .clash-close-btn:hover {
            background: #c0392b;
        }

        .clash-close-btn:active {
            transform: scale(0.9);
        }

        @keyframes slideUp {
            from { transform: translateY(150%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

        @media (max-width: 640px) {
            .clash-banner-wrapper {
                bottom: 10px;
            }
            .clash-banner {
                padding: 10px 15px;
            }
            .clash-text .primary { font-size: 0.8rem; }
            .clash-text .secondary { font-size: 0.65rem; }
            .clash-icon { width: 36px; height: 36px; }

            /* Target the update widget from updatewidget.js */
            /* We shift it up by the approximate height of the banner (80px) */
            body:has(#clan-notice-banner) .update-widget-container {
                bottom: 90px !important;
                transition: bottom 0.4s ease;
            }
            
            /* Fallback for browsers that don't support :has() yet */
            .update-widget-container {
                transition: bottom 0.4s ease;
            }
        }
    `;
    document.head.appendChild(style);

    const bannerWrapper = document.createElement('div');
    bannerWrapper.className = 'clash-banner-wrapper';
    bannerWrapper.id = 'clan-notice-banner';

    bannerWrapper.innerHTML = `
        <div class="clash-banner">
            <div class="clash-banner-content">
                <div class="clash-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <line x1="19" y1="8" x2="19" y2="14"></line>
                        <line x1="22" y1="11" x2="16" y2="11"></line>
                    </svg>
                </div>
                <div class="clash-text">
                    <span class="primary">We're looking for new members!</span>
                    <span class="secondary">Open slots for active players & Co-Leaders.</span>
                </div>
            </div>
            <div class="clash-close-btn" title="Dismiss" onclick="const b = document.getElementById('clan-notice-banner'); b.remove();">✕</div>
        </div>
    `;

    document.body.appendChild(bannerWrapper);
})();