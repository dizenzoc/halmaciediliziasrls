fetch('/components/navbar.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
        collapseNavbarWhenClick();
    });

fetch('/components/footer.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });

fetch('/components/hero.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('home').innerHTML = data;
        animationReveal();
    });

fetch('/components/services.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('services').innerHTML = data;
    });

fetch('/components/aboutUs.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('about-us').innerHTML = data;
    });

fetch('/components/contact.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('contact-us').innerHTML = data;
        initSwitchForms();
        initContactUsForm();
        initWorkWithUsForm();
    });

fetch('/components/userReviews.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('user-reviews').innerHTML = data;
    });

fetch('/components/gallery.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('gallery').innerHTML = data;
        initGallery();
    });