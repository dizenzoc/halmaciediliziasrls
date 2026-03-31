function initGallery() {
    const images = [
        // "foto1.webp",
        // "foto2.webp",
        "foto3.webp",
        "foto4.webp",
        // "foto5.webp",
        // "foto6.webp",
        // "foto7.webp",
        // "foto8.webp",
        // "foto9.webp",
        // "foto10.webp",
        // "foto11.webp",
        // "foto12.webp",
        // "foto13.webp",
        "foto14.webp",
        "foto15.webp",

        "video1.mp4",
        "video2.mp4",
        "video3.mp4",
        "video4.mp4",
        "video5.mp4",
        "video6.mp4",
        "video7.mp4"
    ];

    shuffle(images);

    let currentPage = 0;
    let currentImgIndex = -1;

    const PER_PAGE = 9;
    const IMG_PATH = "./assets/img/gallery/";
    const galleryImages = document.getElementById('galleryImages');
    const prevPage = document.getElementById('prevPage');
    const nextPage = document.getElementById('nextPage');
    const pageInfo = document.getElementById('pageInfo');
    const lightbox = document.getElementById('lightbox');
    const lightboxMedia = document.getElementById('lightboxMedia');
    const closeLightbox = document.getElementById('closeLightbox');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');

    function renderPage() {
        const start = currentPage * PER_PAGE;
        const end = start + PER_PAGE;
        const pageImages = images.slice(start, end);

        // MOSTRA LA FOTO O IL VIDEO IN BASE AL FILE
        galleryImages.innerHTML = pageImages.map((src, idx) => {
            const fullPath = IMG_PATH + src;
            const isVideo = src.endsWith(".mp4");

            return `
        <li class="img" data-index="${start + idx}">
            ${isVideo
                    ? `<video src="${fullPath}" muted loop playsinline preload="metadata" controlsList="nodownload"></video>`
                    : `<img src="${fullPath}" loading="lazy">`
                }
        </li>
    `;
        }).join('');

        pageInfo.textContent = `Pagina ${currentPage + 1} di ${Math.ceil(images.length / PER_PAGE)}`;
        prevPage.disabled = currentPage === 0;
        nextPage.disabled = end >= images.length;
    }

    prevPage.onclick = () => { currentPage--; renderPage(); };
    nextPage.onclick = () => { currentPage++; renderPage(); };

    function openLightbox(index) {
        currentImgIndex = index;

        const src = images[index];
        const fullPath = IMG_PATH + src;
        const isVideo = src.endsWith(".mp4");

        lightboxMedia.innerHTML = isVideo
            ? `<video src="${fullPath}" controls autoplay playsinline controlsList="nodownload"></video>`
            : `<img src="${fullPath}" alt="Dettaglio" loading="lazy">`;

        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeLightbox.onclick = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
        lightboxMedia.innerHTML = "";
    };

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    function updateLightbox() {
        const src = images[currentImgIndex];
        const fullPath = IMG_PATH + src;
        const isVideo = src.endsWith(".mp4");

        lightboxMedia.innerHTML = isVideo
            ? `<video src="${fullPath}" controls autoplay playsinline controlsList="nodownload"></video>`
            : `<img src="${fullPath}" alt="Dettaglio" loading="lazy">`;
    }

    lightboxPrev.onclick = () => {
        currentImgIndex = (currentImgIndex - 1 + images.length) % images.length;
        updateLightbox();
    };

    lightboxNext.onclick = () => {
        currentImgIndex = (currentImgIndex + 1) % images.length;
        updateLightbox();
    };

    galleryImages.addEventListener("click", (e) => {
        const li = e.target.closest("li");
        if (!li) return;

        const index = parseInt(li.dataset.index);
        openLightbox(index);
    });

    galleryImages.addEventListener("mouseover", e => {
        const video = e.target.closest("video");
        if (video) video.play();
    });

    galleryImages.addEventListener("mouseout", e => {
        const video = e.target.closest("video");
        if (video) video.pause();
    });

    // Init
    renderPage();

}

// FUNZIONE PER MISCHIARE L'ARRAY
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}