document.addEventListener('DOMContentLoaded', () => {
    const navbarHTML = `
        <style>
            .dropdown:hover .dropdown-menu {
                display: block;
            }
            .dropdown-menu {
                display: none;
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translateX(-50%);
                background: #111;
                border: 2px solid #f3c31b;
                border-radius: 8px;
                min-width: 160px;
                padding: 0.5rem 0;
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
                z-index: 70;
            }
            .dropdown-menu a {
                display: block;
                padding: 0.75rem 1rem;
                color: white;
                text-decoration: none;
                font-size: 0.75rem;
                transition: background 0.2s;
            }
            .dropdown-menu a:hover {
                background: #222;
                color: #f3c31b;
            }
        </style>

        <nav class="navbar fixed w-full z-50 px-6 py-4 flex justify-between items-center bg-[#111] border-b-2 border-[#f3c31b]">
            <div class="flex items-center gap-2 relative z-[60]">
                <img style="width:30px;" src="assets/favicon.png" onerror="this.src='https://raw.githubusercontent.com/Supercell/clash-of-clans-assets/master/icons/favicon.png'">
                <span class="text-2xl font-black tracking-tight text-white uppercase">Grinderouz223</span>
            </div>
            
            <div class="hidden md:flex items-center gap-8 font-bold text-white uppercase text-sm tracking-widest">
                <a href="index.html" class="hover:text-yellow-500 transition py-1">Home</a>
                <a href="media.html" class="hover:text-yellow-500 transition py-1">Media</a>
                <a href="index.html#leadership" class="hover:text-yellow-400 transition">Leadership</a>
                
                <div class="relative dropdown group">
                    <button class="flex items-center gap-1 hover:text-yellow-500 transition py-1 uppercase">
                        Supercell
                        <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div class="dropdown-menu">
                        <a href="sc-store.html">Supercell Store</a>
                        <a href="https://id.supercell.com/en/clashofclans/" target="_blank">Supercell ID</a>
                    </div>
                </div>

                <div class="relative dropdown group">
                    <button class="flex items-center gap-1 hover:text-yellow-500 transition py-1 uppercase">
                        CLAN
                        <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div class="dropdown-menu">
                        <a href="index.html#rules" class="hover:text-yellow-500 transition py-1">Rules</a>
                        <a href="index.html#stats" class="hover:text-yellow-500 transition py-1">Stats</a>
                        <a href="index.html#leadership" class="hover:text-yellow-500 transition py-1">Leaders</a>
                    </div>
                    </div>

                <a href="index.html#join" class="hover:text-yellow-500 transition text-yellow-600 border-2 border-[black] hover:border-yellow-500 px-4 py-1 rounded-lg">Join Us</a>
                <a href="https://play.google.com/pc-store/games/details?id=com.supercell.clashofclans&hl=en" class="hover:text-[blue] bg-[white] transition text-[black] border-2 border-[black] hover:border-[blue] px-4 py-1 rounded-lg">Download For PC</a>
            </div>

            <button class="md:hidden text-white relative z-[60] p-2 focus:outline-none" id="mobile-menu-btn">
                <div id="hamburger-icon" class="relative w-6 h-5">
                    <span class="block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out top-0"></span>
                    <span class="block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out top-2"></span>
                    <span class="block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out top-4"></span>
                </div>
            </button>

            <div id="mobile-overlay" class="fixed inset-0 bg-[#111] translate-x-full transition-transform duration-300 ease-in-out z-[55] flex flex-col items-center justify-center gap-6 md:hidden">
                <a href="index.html" class="mobile-link text-2xl font-black text-white uppercase hover:text-yellow-500">Home</a>
                <a href="media.html" class="mobile-link text-2xl font-black text-white uppercase hover:text-yellow-500">Media</a>
                <div class="flex flex-col items-center gap-2 border-y border-slate-800 py-4 w-full">
                    <span class="text-xs text-slate-500 uppercase tracking-widest font-bold">Supercell</span>
                    <a href="sc-store.html" class="mobile-link text-xl font-bold text-white uppercase hover:text-yellow-500">Store</a>
                    <a href="https://id.supercell.com/en/clashofclans/" class="mobile-link text-xl font-bold text-white uppercase hover:text-yellow-500">SCID</a>
                </div>
                <div class="flex flex-col items-center gap-2 border-y border-slate-800 py-4 w-full">
                    <span class="text-xs text-slate-500 uppercase tracking-widest font-bold">GRINDEROUZ223</span>
                    <a href="index.html#leadership" class="mobile-link text-xl font-bold text-white uppercase hover:text-yellow-500">Leadership</a>
                    <a href="index.html#rules" class="mobile-link text-xl font-bold text-white uppercase hover:text-yellow-500">Rules</a>
                    <a href="index.html#stats" class="mobile-link text-xl font-bold text-white uppercase hover:text-yellow-500">Stats</a>
                </div>
                <a href="index.html#join" class="mobile-link text-2xl font-black text-yellow-500 uppercase border-2 border-yellow-500 px-8 py-3 rounded-2xl">Join Us</a>
            </div>
        </nav>
    `;

    const footerHTML = `
        <footer class="bg-[#111] border-t border-slate-700 py-12 px-6 text-center">
            <div class="max-w-6xl mx-auto">
                <div class="flex items-center justify-center gap-2 mb-6">
                    <img style="width:30px;" src="assets/favicon.png" onerror="this.style.display='none'">
                    <span class="font-black tracking-tight text-white uppercase">Grinderouz223</span>
                </div>
                <p class="text-slate-400 text-sm">© 2026 Grinderouz223 Clan. Not affiliated with Supercell.</p>
                <div class="mt-4 flex justify-center gap-6">
                    <a href="sc-store.html" class="text-slate-400 hover:text-yellow-500 font-bold uppercase text-xs">Supercell Store</a>
                    <a href="https://supercell.com/en/games/clashofclans/" class="text-slate-400 hover:text-yellow-500 font-bold uppercase text-xs">Clash Of Clans</a>
                    <a href="https://id.supercell.com/en/clashofclans/" class="text-slate-400 hover:text-yellow-500 font-bold uppercase text-xs">SCID</a>
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
    const hamburger = document.getElementById('hamburger-icon').children;
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            overlay.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden'; 
            hamburger[0].classList.add('rotate-45', 'top-2');
            hamburger[1].classList.add('opacity-0');
            hamburger[2].classList.add('-rotate-45', 'top-2');
        } else {
            overlay.classList.add('translate-x-full');
            document.body.style.overflow = ''; 
            hamburger[0].classList.remove('rotate-45', 'top-2');
            hamburger[1].classList.remove('opacity-0');
            hamburger[2].classList.remove('-rotate-45', 'top-2');
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