document.addEventListener('DOMContentLoaded', () => {
    const navbarHTML = `
        <style>
            /* Clash of Clans Theme Styles */
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

            /* Invisible bridge to prevent hover gap issues */
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
                background: #ef4444; /* Turns red when open to act as close button */
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
                <img style="width:36px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.8));" src="assets/favicon.png" onerror="this.src='https://raw.githubusercontent.com/Supercell/clash-of-clans-assets/master/icons/favicon.png'">
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
        <footer class="bg-[#020617] border-t-4 border-slate-800 py-12 px-6 text-center">
            <div class="max-w-6xl mx-auto">
                <div class="flex items-center justify-center gap-3 mb-6">
                    <img style="width:36px; filter: grayscale(100%) opacity(0.5);" src="assets/favicon.png" onerror="this.style.display='none'">
                    <span class="font-black tracking-widest text-slate-500 uppercase text-xl">Grinderouz223</span>
                </div>
                <p class="text-slate-600 text-sm font-semibold mb-6">© 2026 Grinderouz223 Clan. Not affiliated with Supercell.</p>
                <div class="mt-4 flex flex-wrap justify-center gap-x-8 gap-y-4">
                    <a href="https://store.supercell.com/clashofclans" class="text-slate-400 hover:text-yellow-500 font-bold uppercase text-xs tracking-wider transition">Supercell Store</a>
                    <a href="https://supercell.com/en/games/clashofclans/" class="text-slate-400 hover:text-yellow-500 font-bold uppercase text-xs tracking-wider transition">Clash Of Clans</a>
                    <a href="https://id.supercell.com/en/clashofclans/" class="text-slate-400 hover:text-yellow-500 font-bold uppercase text-xs tracking-wider transition">SCID</a>
                    <a href="https://discord.gg/jEN9NNdA4v" class="text-slate-400 hover:text-[#5865F2] font-bold uppercase text-xs tracking-wider transition">Discord</a>
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