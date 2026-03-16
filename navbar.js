document.addEventListener('DOMContentLoaded', () => {
    const navbarHTML = `
        <nav class="navbar fixed w-full z-50 px-6 py-4 flex justify-between items-center bg-[#111] border-b-2 border-[#f3c31b]">
            <div class="flex items-center gap-2 relative z-[60]">
                <img style="width:30px;" src="assets/favicon.png" onerror="this.src='https://raw.githubusercontent.com/Supercell/clash-of-clans-assets/master/icons/favicon.png'">
                <span class="text-2xl font-black tracking-tight text-white uppercase">Grinderouz223</span>
            </div>
            
            <div class="hidden md:flex items-center gap-8 font-bold text-white uppercase text-sm tracking-widest">
                <a href="#home" class="hover:text-yellow-500 transition py-1">Home</a>
                <a href="#stats" class="hover:text-yellow-500 transition py-1">Stats</a>
                <a href="#rules" class="hover:text-yellow-500 transition py-1">Rules</a>
                <a href="sc-store.html" class="hover:text-yellow-500 transition py-1">Store</a>
                <a href="https://id.supercell.com/en/clashofclans/" class="hover:text-yellow-500 transition py-1">SCID</a>
                <a href="#join" class="hover:text-yellow-500 transition text-yellow-600 border-2 border-[black] hover:border-yellow-500 px-4 py-1 rounded-lg">Join Us</a>
                <a href="https://play.google.com/pc-store/games/details?id=com.supercell.clashofclans&hl=en" class="hover:text-[blue] bg-[white] transition text-[black] border-2 border-[black] hover:border-[blue] px-4 py-1 rounded-lg">Download For PC</a>
            </div>

            <button class="md:hidden text-white relative z-[60] p-2 focus:outline-none" id="mobile-menu-btn">
                <div id="hamburger-icon" class="relative w-6 h-5">
                    <span class="block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out top-0"></span>
                    <span class="block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out top-2"></span>
                    <span class="block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out top-4"></span>
                </div>
            </button>

            <div id="mobile-overlay" class="fixed inset-0 bg-[#111] translate-x-full transition-transform duration-300 ease-in-out z-[55] flex flex-col items-center justify-center gap-8 md:hidden">
                <a href="#home" class="mobile-link text-3xl font-black text-white uppercase hover:text-yellow-500">Home</a>
                <a href="#stats" class="mobile-link text-3xl font-black text-white uppercase hover:text-yellow-500">Stats</a>
                <a href="#rules" class="mobile-link text-3xl font-black text-white uppercase hover:text-yellow-500">Rules</a>
                <a href="https://id.supercell.com/en/clashofclans/" class="mobile-link text-3xl font-black text-white uppercase hover:text-yellow-500">SCID</a>
                <a href="sc-store.html" class="mobile-link text-3xl font-black text-white uppercase hover:text-yellow-500">SC Store</a>
                <a href="#join" class="mobile-link text-3xl font-black text-yellow-500 uppercase border-2 border-[#111] hover:border-yellow-500 px-8 py-3 rounded-2xl">Join Us</a>
                <a href="https://supercell.com/en/games/clashofclans/" class="mobile-link text-3xl font-black text-yellow-500 uppercase border-2 border-yellow-500 px-8 py-3 rounded-2xl">Download COC</a>
            </div>
        </nav>
    `;

    const footerHTML = `
        <footer class="bg-[#222] border-t border-slate-700 py-12 px-6 text-center">
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

    // Mobile Menu Logic
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

    // Smooth scroll and auto-close menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            if (isMenuOpen) toggleMenu();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
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
        });
    });
});