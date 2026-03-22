(function() {
    const style = document.createElement('style');
    style.textContent = `
        .discord-banner-wrapper {
            position: fixed;
            bottom: 20px;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: center;
            z-index: 100;
            pointer-events: none;
            animation: slideUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .discord-banner {
            pointer-events: auto;
            background: linear-gradient(to bottom, #5865F2, #4752C4);
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
            transition: transform 0.2s ease;
        }

        .discord-banner:hover {
            transform: translateY(-3px);
        }

        .discord-banner-content {
            display: flex;
            align-items: center;
            gap: 15px;
            text-decoration: none;
            flex-grow: 1;
            cursor: pointer;
        }

        .discord-icon {
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

        .discord-text {
            color: white;
            text-shadow: 2px 2px 0px #000;
            font-family: 'Open Sans', sans-serif;
            font-weight: 800;
            line-height: 1.2;
        }

        .discord-text .primary {
            font-size: 0.95rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            display: block;
        }

        .discord-text .secondary {
            font-size: 0.75rem;
            color: #ffd700;
            display: block;
            margin-top: 2px;
        }

        .discord-close-btn {
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

        .discord-close-btn:hover {
            background: #c0392b;
        }

        .discord-close-btn:active {
            transform: scale(0.9);
        }

        @keyframes slideUp {
            from { transform: translateY(150%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

        @media (max-width: 640px) {
            .discord-banner-wrapper {
                bottom: 10px;
            }
            .discord-banner {
                padding: 10px 15px;
            }
            .discord-text .primary { font-size: 0.8rem; }
            .discord-text .secondary { font-size: 0.65rem; }
            .discord-icon { width: 36px; height: 36px; }

            body:has(#discord-notice-banner) .update-widget-container {
                bottom: 90px !important;
                transition: bottom 0.4s ease;
            }
            
            .update-widget-container {
                transition: bottom 0.4s ease;
            }
        }
    `;
    document.head.appendChild(style);

    const bannerWrapper = document.createElement('div');
    bannerWrapper.className = 'discord-banner-wrapper';
    bannerWrapper.id = 'discord-notice-banner';

    const discordInviteLink = "https://discord.gg/jEN9NNdA4v";

    bannerWrapper.innerHTML = `
        <div class="discord-banner">
            <a href="${discordInviteLink}" target="_blank" rel="noopener noreferrer" class="discord-banner-content">
                <div class="discord-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
                    </svg>
                </div>
                <div class="discord-text">
                    <span class="primary">Join our Discord Server!</span>
                    <span class="secondary">Stats, war logs, base layouts, & more.</span>
                </div>
            </a>
            <div class="discord-close-btn" title="Dismiss" onclick="document.getElementById('discord-notice-banner').remove();">✕</div>
        </div>
    `;

    document.body.appendChild(bannerWrapper);
})();