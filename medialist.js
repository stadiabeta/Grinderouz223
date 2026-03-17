const mediaItems = [
    {
        id: 1,
        title: "Your Video here",
        type: "video",
        category: "all",
        thumbnail: "#",
        url: "#", 
        description: ""
    },
    {
        id: 2,
        title: "TH9 Mayoo",
        type: "image",
        category: "base",
        url: "assets/bases/IMG_2903.PNG",
        description: ""
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const mediaGrid = document.getElementById('media-grid');
    const filters = document.querySelectorAll('.category-pill');
    const emptyState = document.getElementById('empty-state');
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.getElementById('lightbox-content');
    const closeLightbox = document.getElementById('close-lightbox');

    function renderMedia(category = 'all') {
        mediaGrid.innerHTML = '';
        
        const filtered = category === 'all' 
            ? mediaItems 
            : mediaItems.filter(item => item.category === category);

        if (filtered.length === 0) {
            emptyState.classList.remove('hidden');
        } else {
            emptyState.classList.add('hidden');
            filtered.forEach(item => {
                const card = document.createElement('div');
                card.className = 'media-card bg-white rounded-2xl overflow-hidden cursor-pointer group';
                
                // Play icon for videos
                const videoOverlay = item.type === 'video' 
                    ? `<div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition">
                         <div class="bg-yellow-500 p-4 rounded-full text-black shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                         </div>
                       </div>` 
                    : '';

                card.innerHTML = `
                    <div class="relative h-64 overflow-hidden">
                        <img src="${item.type === 'video' ? item.thumbnail : item.url}" 
                             alt="${item.title}" 
                             class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                        ${videoOverlay}
                        <div class="absolute top-4 left-4">
                            <span class="bg-black/60 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-tighter backdrop-blur-md">
                                ${item.category}
                            </span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="font-black text-slate-800 uppercase text-lg mb-2">${item.title}</h3>
                        <p class="text-slate-500 text-sm leading-relaxed">${item.description}</p>
                    </div>
                `;

                card.onclick = () => openMedia(item);
                mediaGrid.appendChild(card);
            });
        }
    }

    function openMedia(item) {
        lightboxContent.innerHTML = '';
        if (item.type === 'video') {
            lightboxContent.innerHTML = `
                <div class="aspect-video w-full">
                    <iframe src="${item.url}" class="w-full h-full rounded-xl" frameborder="0" allowfullscreen></iframe>
                </div>
                <h2 class="text-white text-2xl font-black mt-6 uppercase">${item.title}</h2>
                <p class="text-slate-400 mt-2">${item.description}</p>
            `;
        } else {
            lightboxContent.innerHTML = `
                <img src="${item.url}" class="max-h-[80vh] w-auto rounded-xl shadow-2xl">
                <h2 class="text-white text-2xl font-black mt-6 uppercase">${item.title}</h2>
                <p class="text-slate-400 mt-2">${item.description}</p>
            `;
        }
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    // Close Lightbox
    closeLightbox.onclick = () => {
        lightbox.style.display = 'none';
        lightboxContent.innerHTML = ''; // Stop video playback
        document.body.style.overflow = '';
    };

    lightbox.onclick = (e) => {
        if (e.target === lightbox) closeLightbox.onclick();
    };

    // Filter Logic
    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            filters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMedia(btn.dataset.category);
        });
    });

    // Initial Render
    renderMedia();
});