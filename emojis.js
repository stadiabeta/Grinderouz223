const EmojiSystem = (() => {
    const EMOJI_DATA = {
        "404": "assets/emojis/404.png",
        "builder": "assets/emojis/builder.png",
        "wizard": "assets/emojis/wizard.png",
        "clan": "assets/emojis/clan.gif",
        "member": "assets/emojis/member.png",
        "troopdonations": "assets/emojis/troopsdonation.png",
        "elixir": "assets/emojis/elixir.png",
        "gold": "assets/emojis/gold.png",
        "dark-elixir": "assets/emojis/dark-elixir.png",
        "gem": "assets/emojis/gem.png",
        "warleag": "assets/emojis/war-league.png",
    };

    const DEFAULT_SIZE = "1.375rem";

    const getEmojiStyle = (size = DEFAULT_SIZE) => `
        display: inline-block;
        width: ${size};
        height: ${size};
        vertical-align: bottom;
        margin: 0 0.1rem;
        object-fit: contain;
    `;

    const replaceText = (text, size) => {
        const style = getEmojiStyle(size);
        return text.replace(/:([a-z0-9_]+):/gi, (match, p1) => {
            const emojiPath = EMOJI_DATA[p1.toLowerCase()];
            if (emojiPath) {
                return `<img src="${emojiPath}" alt="${p1}" title=":${p1}:" style="${style}" class="custom-emoji">`;
            }
            return match; 
        });
    };

    const parse = (selector) => {
        const elements = typeof selector === 'string' 
            ? document.querySelectorAll(selector) 
            : [selector];

        elements.forEach(el => {
            if (el) {
                const customSize = el.getAttribute('data-emoji-size') || DEFAULT_SIZE;
                el.innerHTML = replaceText(el.innerHTML, customSize);
            }
        });
    };

    window.addEventListener('DOMContentLoaded', () => {
        parse('[data-emojis]');
    });

    return {
        data: EMOJI_DATA,
        parse: parse,
        replaceText: replaceText
    };
})();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = EmojiSystem;
}