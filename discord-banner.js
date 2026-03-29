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
            background: #05184d;
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
                    <p data-emojis>:discord:</p>
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