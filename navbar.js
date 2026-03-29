document.addEventListener('DOMContentLoaded', () => {
    const navbarHTML = `
        <style>
            .coc-nav-theme {
                background: linear-gradient(to bottom, #1e293b, #020617);
                border-bottom: 3px solid #f3c31b;
                box-shadow: 0 4px 15px rgba(0,0,0,0.8);
            }
            
            .coc-text-shadow {
                text-shadow: 2px 2px 0px rgba(0,0,0,0.9);
            }

            .coc-link {
                text-shadow: 1px 1px 0px rgba(0,0,0,0.8);
            }

            .coc-btn-gold {
                background: linear-gradient(to bottom, #f3c31b, #d4a017);
                box-shadow: 0 4px 0 #b0840a, inset 0 1px 2px rgba(255,255,255,0.4);
                border: 1px solid #8c6a08;
                color: white;
                text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
                transition: transform 0.1s, box-shadow 0.1s;
            }
            .coc-btn-gold:active {
                transform: translateY(4px);
                box-shadow: 0 0px 0 #b0840a, inset 0 1px 2px rgba(255,255,255,0.4);
            }

            .coc-btn-blue {
                background: linear-gradient(to bottom, #4a90e2, #2171c7);
                box-shadow: 0 4px 0 #154e8e, inset 0 1px 2px rgba(255,255,255,0.4);
                border: 1px solid #0f396b;
                color: white;
                text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
                transition: transform 0.1s, box-shadow 0.1s;
            }
            .coc-btn-blue:active {
                transform: translateY(4px);
                box-shadow: 0 0px 0 #154e8e, inset 0 1px 2px rgba(255,255,255,0.4);
            }

            .dropdown:hover .dropdown-menu {
                display: block;
            }

            .dropdown-menu {
                display: none;
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translateX(-50%);
                background: linear-gradient(to bottom, #1e293b, #0f172a);
                border: 2px solid #334155;
                border-radius: 8px;
                min-width: 170px;
                padding: 0.5rem 0;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.9);
                z-index: 70;
                margin-top: 10px;
            }
            
            .dropdown-menu::before {
                content: '';
                position: absolute;
                top: -8px;
                left: 50%;
                transform: translateX(-50%);
                border-width: 0 8px 8px 8px;
                border-style: solid;
                border-color: transparent transparent #334155 transparent;
            }

            .dropdown-menu::after {
                content: '';
                position: absolute;
                top: -15px;
                left: 0;
                width: 100%;
                height: 15px;
                background: transparent;
            }

            .dropdown-menu a {
                display: block;
                padding: 0.75rem 1.2rem;
                color: #f8fafc;
                text-decoration: none;
                font-size: 0.75rem;
                font-weight: 800;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                border-bottom: 1px solid #1e293b;
                transition: all 0.2s;
            }
            
            .dropdown-menu a:last-child {
                border-bottom: none;
            }

            .dropdown-menu a:hover {
                background: #020617;
                color: #f3c31b;
                padding-left: 1.5rem;
            }

            .hamburger-line {
                display: block;
                position: absolute;
                height: 3px;
                width: 100%;
                background: #f3c31b;
                border-radius: 3px;
                opacity: 1;
                left: 0;
                transform: rotate(0deg);
                transition: .25s ease-in-out;
                box-shadow: 0 1px 2px rgba(0,0,0,0.8);
            }
            
            .hamburger-line:nth-child(1) { top: 0px; }
            .hamburger-line:nth-child(2) { top: 8px; }
            .hamburger-line:nth-child(3) { top: 16px; }

            .menu-open .hamburger-line:nth-child(1) {
                top: 8px;
                transform: rotate(135deg);
                background: #ef4444;
            }
            .menu-open .hamburger-line:nth-child(2) {
                opacity: 0;
                left: -60px;
            }
            .menu-open .hamburger-line:nth-child(3) {
                top: 8px;
                transform: rotate(-135deg);
                background: #ef4444;
            }

            .coc-mobile-menu {
                background-color: #0f172a;
                background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
                background-blend-mode: overlay;
                border-left: 3px solid #f3c31b;
            }
        </style>

        <nav class="coc-nav-theme fixed w-full z-50 px-6 py-3 flex justify-between items-center">
            <div class="flex items-center gap-3 relative z-[60]">
                <img style="width:36px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.8));" src="assets/navicon.png" onerror="this.src='https://raw.githubusercontent.com/Supercell/clash-of-clans-assets/master/icons/favicon.png'">
                <a href="index.html"><span class="text-2xl md:text-3xl font-black tracking-tighter text-white uppercase coc-text-shadow">Grinderouz223</span></a>
            </div>
            
            <div class="hidden md:flex items-center gap-6 font-black text-white uppercase text-sm tracking-widest">
                <a href="#home" class="hover:text-yellow-400 transition py-1 coc-link">Home</a>
                <a href="#leadership" class="hover:text-yellow-400 transition coc-link">Leadership</a>
                
                <div class="relative dropdown group">
                    <button class="flex items-center gap-1 hover:text-yellow-400 transition py-1 uppercase coc-link">
                        Supercell
                        <svg class="w-4 h-4 transition-transform group-hover:rotate-180 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div class="dropdown-menu">
                        <a href="https://store.supercell.com/clashofclans">Supercell Store</a>
                        <a href="https://id.supercell.com/en/clashofclans/" target="_blank">Supercell ID</a>
                    </div>
                </div>

                <div class="relative dropdown group">
                    <button class="flex items-center gap-1 hover:text-yellow-400 transition py-1 uppercase coc-link">
                        Clan
                        <svg class="w-4 h-4 transition-transform group-hover:rotate-180 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div class="dropdown-menu">
                        <a href="#rules">Rules</a>
                        <a href="#stats">Stats</a>
                        <a href="#leadership">Leaders</a>
                        <a href="http://discord.gg/jEN9NNdA4v">Discord</a>
                    </div>
                </div>

                <div class="flex gap-3 ml-2">
                    <a href="#join" class="coc-btn-gold px-5 py-2 rounded-lg text-sm tracking-wider">Join Us</a>
                    <a href="https://play.google.com/pc-store/games/details?id=com.supercell.clashofclans&hl=en" class="coc-btn-blue px-5 py-2 rounded-lg text-sm tracking-wider flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        PC
                    </a>
                </div>
            </div>

            <button class="md:hidden text-white relative z-[60] p-2 focus:outline-none" id="mobile-menu-btn">
                <div id="hamburger-icon" class="relative w-6 h-5">
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                </div>
            </button>

            <div id="mobile-overlay" class="coc-mobile-menu fixed inset-0 translate-x-full transition-transform duration-300 ease-in-out z-[55] flex flex-col items-center justify-center gap-6 md:hidden shadow-2xl">
                <a href="index.html" class="text-3xl font-black text-white uppercase hover:text-yellow-400 coc-text-shadow">Home</a>
                
                <div class="flex flex-col items-center gap-3 border-y border-slate-700/50 py-6 w-3/4">
                    <span class="text-xs text-yellow-600 uppercase tracking-widest font-black">Supercell</span>
                    <a href="https://store.supercell.com/clashofclans" class="text-xl font-bold text-white uppercase hover:text-yellow-400">Store</a>
                    <a href="https://id.supercell.com/en/clashofclans/" class="text-xl font-bold text-white uppercase hover:text-yellow-400">SCID</a>
                </div>
                
                <div class="flex flex-col items-center gap-3 border-b border-slate-700/50 pb-6 w-3/4">
                    <span class="text-xs text-yellow-600 uppercase tracking-widest font-black">Grinderouz223</span>
                    <a href="#leadership" class="text-xl font-bold text-white uppercase hover:text-yellow-400">Leadership</a>
                    <a href="#rules" class="text-xl font-bold text-white uppercase hover:text-yellow-400">Rules</a>
                    <a href="#stats" class="text-xl font-bold text-white uppercase hover:text-yellow-400">Stats</a>
                </div>
                
                <div class="flex flex-col gap-4 mt-4 w-3/4">
                    <a href="index.html#join" class="coc-btn-gold w-full text-center py-4 rounded-xl font-black text-xl uppercase tracking-wider">Join Clan</a>
                    <a href="https://discord.gg/jEN9NNdA4v" class="coc-btn-blue w-full text-center py-4 rounded-xl font-black text-xl uppercase tracking-wider">Join Discord</a>
                </div>
            </div>
        </nav>
    `;

    const footerHTML = `
        <footer class="relative bg-[#020617] border-t-[3px] border-[#f3c31b] pt-12 md:pt-16 pb-6 md:pb-8 px-5 md:px-6 mt-10 md:mt-12 overflow-hidden shadow-[0_-5px_15px_rgba(0,0,0,0.5)]">
            <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none"></div>
            
            <div class="max-w-7xl mx-auto relative z-10">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-10 md:mb-12">
                    
                    <div class="flex flex-col items-center sm:col-span-2 lg:col-span-1 md:items-start text-center md:text-left">
                        <div class="flex items-center gap-3 mb-4">
                            <img style="width:44px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.8));" src="assets/navicon.png" onerror="this.src='https://raw.githubusercontent.com/Supercell/clash-of-clans-assets/master/icons/favicon.png'">
                            <span class="font-black tracking-widest text-white uppercase text-2xl coc-text-shadow">Grinderouz</span>
                        </div>
                    </div>

                    <div class="flex flex-col items-center md:items-start">
                        <h3 class="text-[#f3c31b] font-black uppercase tracking-widest text-sm mb-4 md:mb-5 coc-text-shadow">The Clan</h3>
                        <div class="flex flex-col gap-3">
                            <a href="#home" class="text-slate-300 hover:text-white hover:translate-x-1 transition-transform font-bold text-sm uppercase flex items-center gap-2"><span class="text-yellow-600">▪</span> Home</a>
                            <a href="#leadership" class="text-slate-300 hover:text-white hover:translate-x-1 transition-transform font-bold text-sm uppercase flex items-center gap-2"><span class="text-yellow-600">▪</span> Leadership</a>
                            <a href="#rules" class="text-slate-300 hover:text-white hover:translate-x-1 transition-transform font-bold text-sm uppercase flex items-center gap-2"><span class="text-yellow-600">▪</span> Clan Rules</a>
                            <a href="#stats" class="text-slate-300 hover:text-white hover:translate-x-1 transition-transform font-bold text-sm uppercase flex items-center gap-2"><span class="text-yellow-600">▪</span> Clan Stats</a>
                        </div>
                    </div>

                    <div class="flex flex-col items-center md:items-start">
                        <h3 class="text-[#f3c31b] font-black uppercase tracking-widest text-sm mb-4 md:mb-5 coc-text-shadow">Official Links</h3>
                        <div class="flex flex-col gap-3">
                            <a href="https://store.supercell.com/clashofclans" target="_blank" class="text-slate-300 hover:text-white hover:translate-x-1 transition-transform font-bold text-sm uppercase flex items-center gap-2"><span class="text-yellow-600">▪</span> Supercell Store</a>
                            <a href="https://supercell.com/en/games/clashofclans/" target="_blank" class="text-slate-300 hover:text-white hover:translate-x-1 transition-transform font-bold text-sm uppercase flex items-center gap-2"><span class="text-yellow-600">▪</span> Clash Of Clans</a>
                            <a href="https://id.supercell.com/en/clashofclans/" target="_blank" class="text-slate-300 hover:text-white hover:translate-x-1 transition-transform font-bold text-sm uppercase flex items-center gap-2"><span class="text-yellow-600">▪</span> Supercell ID</a>
                        </div>
                    </div>

                    <div class="flex flex-col items-center sm:col-span-2 lg:col-span-1 md:items-start">
                        <h3 class="text-[#f3c31b] font-black uppercase tracking-widest text-sm mb-4 md:mb-5 coc-text-shadow">Community</h3>
                        <p class="text-slate-400 text-sm font-semibold mb-5 text-center md:text-left max-w-sm md:max-w-none">
                            Join our Discord server for war plans, base links, announcements, and chat.
                        </p>
                        <a href="https://discord.gg/jEN9NNdA4v" target="_blank" class="coc-btn-blue px-6 py-3 rounded-lg text-sm tracking-wider font-bold w-full sm:w-auto md:w-full lg:w-auto flex items-center justify-center gap-2">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/></svg>
                            Join Discord
                        </a>
                    </div>
                </div>

                <div class="pt-6 md:pt-8 border-t border-slate-800/80 flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-6">
                    <p class="text-slate-500 text-xs font-semibold tracking-wider text-center lg:text-left">
                        © 2026 GRINDEROUZ223 CLAN. ALL RIGHTS RESERVED.
                    </p>
                    <p class="text-slate-600 text-[11px] md:text-xs font-semibold text-center lg:text-right max-w-2xl leading-relaxed">
                        This content is not affiliated with, endorsed, sponsored, or specifically approved by Supercell and Supercell is not responsible for it. For more information see Supercell's Fan Content Policy: <a href="https://supercell.com/en/fan-content-policy/" target="_blank" class="text-slate-400 hover:text-white transition-colors underline">www.supercell.com/fan-content-policy</a>.
                    </p>
                </div>
            </div>
        </footer>
    `;

    const navContainer = document.getElementById('navbar-container');
    const footerContainer = document.getElementById('footer-container');

    if (navContainer) navContainer.innerHTML = navbarHTML;
    if (footerContainer) footerContainer.innerHTML = footerHTML;

    const menuBtn = document.getElementById('mobile-menu-btn');
    const overlay = document.getElementById('mobile-overlay');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            overlay.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden'; 
            hamburgerIcon.classList.add('menu-open');
        } else {
            overlay.classList.add('translate-x-full');
            document.body.style.overflow = ''; 
            hamburgerIcon.classList.remove('menu-open');
        }
    }

    if (menuBtn) menuBtn.addEventListener('click', toggleMenu);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                if (isMenuOpen) toggleMenu();
                
                const target = document.querySelector(targetId);
                if (target) {
                    const navHeight = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});