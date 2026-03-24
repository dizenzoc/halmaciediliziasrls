function initGallery() {
    const images = [
        "cantiere1.jpg",
        "bagno_ristrutturato.jpg",
        "cantiere1.jpg",
        "bagno_ristrutturato.jpg",
        "cantiere1.jpg",
        "bagno_ristrutturato.jpg",
        "cantiere1.jpg",
        "bagno_ristrutturato.jpg",
        "cantiere1.jpg",
        "bagno_ristrutturato.jpg",
        "cantiere1.jpg",
        "bagno_ristrutturato.jpg",
        "ragazzi.jpg",
        "cantiere1.jpg",
        "bagno_ristrutturato.jpg",
        "cantiere1.jpg",
        "bagno_ristrutturato.jpg",
        "cantiere1.jpg",
        "bagno_ristrutturato.jpg",
        "cantiere1.jpg",
        "bagno_ristrutturato.jpg",
        "cantiere1.jpg",
        "bagno_ristrutturato.jpg",
        "cantiere1.jpg",
    ];

    let currentPage = 0;
    let currentImgIndex = -1;

    const PER_PAGE = 9;
    const IMG_PATH = "./assets/img/gallery/";
    const galleryImages = document.getElementById('galleryImages');
    const prevPage = document.getElementById('prevPage');
    const nextPage = document.getElementById('nextPage');
    const pageInfo = document.getElementById('pageInfo');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeLightbox = document.getElementById('closeLightbox');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');

    function renderPage() {
        const start = currentPage * PER_PAGE;
        const end = start + PER_PAGE;
        const pageImages = images.slice(start, end);

        galleryImages.innerHTML = pageImages.map((src, idx) => `
        <li class="img" data-index="${start + idx}">
            <img src="${IMG_PATH + src}" alt="Progetto edilizio">
        </li>
    `).join('');

        pageInfo.textContent = `Pagina ${currentPage + 1} di ${Math.ceil(images.length / PER_PAGE)}`;
        prevPage.disabled = currentPage === 0;
        nextPage.disabled = end >= images.length;
    }

    prevPage.onclick = () => { currentPage--; renderPage(); };
    nextPage.onclick = () => { currentPage++; renderPage(); };

    function openLightbox(index) {
        currentImgIndex = index;
        lightboxImg.src = IMG_PATH + images[index];
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeLightbox.onclick = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    lightboxPrev.onclick = () => {
        currentImgIndex = (currentImgIndex - 1 + images.length) % images.length;
        lightboxImg.src = IMG_PATH + images[currentImgIndex];
    };

    lightboxNext.onclick = () => {
        currentImgIndex = (currentImgIndex + 1) % images.length;
        lightboxImg.src = IMG_PATH + images[currentImgIndex];
    };

    galleryImages.addEventListener("click", (e) => {
        const li = e.target.closest("li");
        if (!li) return;

        const index = parseInt(li.dataset.index);
        openLightbox(index);
    });

    // Init
    renderPage();

}