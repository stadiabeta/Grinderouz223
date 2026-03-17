class ZoomGallery {
    constructor() {
        this.scale = 1;
        this.panning = false;
        this.pointX = 0;
        this.pointY = 0;
        this.start = { x: 0, y: 0 };
        
        this.lightbox = document.getElementById('lightbox');
        this.content = document.getElementById('lightbox-content');
        this.closeBtn = document.getElementById('close-lightbox');
        
        this.init();
    }

    init() {
        if (!this.lightbox || !this.content) return;

        this.lightbox.style.zIndex = '2000';

        this.content.style.overflow = 'hidden';
        this.content.style.cursor = 'grab';
        this.content.style.position = 'relative';
        this.content.style.width = '100%';
        this.content.style.height = '100%';
        this.content.style.display = 'flex';
        this.content.style.alignItems = 'center';
        this.content.style.justifyContent = 'center';
        this.content.style.zIndex = '100';

        const style = document.createElement('style');
        style.textContent = `
            #lightbox-content img {
                transition: transform 0.1s ease-out;
                user-select: none;
                -webkit-user-drag: none;
                max-width: 90%;
                max-height: 85vh;
                object-fit: contain;
            }
            
            #close-lightbox {
                position: fixed !important;
                top: 20px !important;
                right: 20px !important;
                z-index: 2100 !important; /* Higher than everything else */
                background: rgba(0, 0, 0, 0.6);
                border: 2px solid #f3c31b;
                border-radius: 50%;
                width: 44px;
                height: 44px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                color: white;
                font-size: 24px;
                pointer-events: auto !important;
                transition: transform 0.2s, background 0.2s;
            }

            #close-lightbox:hover {
                background: #f3c31b;
                color: black;
                transform: scale(1.1);
            }

            @media (max-width: 768px) {
                #close-lightbox {
                    top: 15px !important;
                    right: 15px !important;
                    width: 40px;
                    height: 40px;
                }
            }
        `;
        document.head.appendChild(style);

        this.content.onmousedown = (e) => {
            if (this.scale <= 1) return;
            this.panning = true;
            this.content.style.cursor = 'grabbing';
            this.start = { x: e.clientX - this.pointX, y: e.clientY - this.pointY };
        };

        window.onmousemove = (e) => {
            if (!this.panning) return;
            e.preventDefault();
            this.pointX = (e.clientX - this.start.x);
            this.pointY = (e.clientY - this.start.y);
            this.updateTransform(this.content.querySelector('img'));
        };

        window.onmouseup = () => {
            this.panning = false;
            this.content.style.cursor = 'grab';
        };

        this.content.onwheel = (e) => {
            e.preventDefault();
            const img = this.content.querySelector('img');
            if (!img) return;

            const xs = (e.clientX - this.pointX) / this.scale;
            const ys = (e.clientY - this.pointY) / this.scale;
            const delta = -e.deltaY;

            if (delta > 0) {
                this.scale = Math.min(this.scale * 1.2, 8);
            } else {
                this.scale = Math.max(this.scale / 1.2, 1);
            }

            this.pointX = e.clientX - xs * this.scale;
            this.pointY = e.clientY - ys * this.scale;

            this.updateTransform(img);
        };

        let lastDist = 0;
        this.content.ontouchstart = (e) => {
            if (e.touches.length === 1) {
                this.panning = true;
                this.start = { x: e.touches[0].clientX - this.pointX, y: e.touches[0].clientY - this.pointY };
            } else if (e.touches.length === 2) {
                lastDist = Math.hypot(
                    e.touches[0].pageX - e.touches[1].pageX,
                    e.touches[0].pageY - e.touches[1].pageY
                );
            }
        };

        this.content.ontouchmove = (e) => {
            const img = this.content.querySelector('img');
            if (!img) return;

            if (e.touches.length === 1 && this.panning) {
                if (this.scale <= 1) return;
                this.pointX = (e.touches[0].clientX - this.start.x);
                this.pointY = (e.touches[0].clientY - this.start.y);
                this.updateTransform(img);
            } else if (e.touches.length === 2) {
                e.preventDefault();
                const dist = Math.hypot(
                    e.touches[0].pageX - e.touches[1].pageX,
                    e.touches[0].pageY - e.touches[1].pageY
                );
                const zoom = dist / lastDist;
                this.scale = Math.min(Math.max(1, this.scale * zoom), 8);
                lastDist = dist;
                this.updateTransform(img);
            }
        };

        this.content.ontouchend = () => {
            this.panning = false;
        };
    }

    reset() {
        this.scale = 1;
        this.pointX = 0;
        this.pointY = 0;
        const img = this.content.querySelector('img');
        if (img) this.updateTransform(img);
    }

    updateTransform(img) {
        if (!img) return;
        if (this.scale <= 1) {
            this.pointX = 0;
            this.pointY = 0;
            img.style.transform = `translate(0, 0) scale(1)`;
        } else {
            img.style.transform = `translate(${this.pointX}px, ${this.pointY}px) scale(${this.scale})`;
        }
    }
}

window.zoomGallery = new ZoomGallery();