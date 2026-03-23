fetch('/components/navbar.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
        collapseNavbarWhenClick();
        animationReveal();
    });

fetch('/components/footer.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
        animationReveal();
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
        animationReveal();
    });

fetch('/components/aboutUs.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('about-us').innerHTML = data;
        animationReveal();
    });

fetch('/components/contact.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('contact-us').innerHTML = data;
        animationReveal();
        initSwitchForms();
    });

fetch('/components/userReviews.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('user-reviews').innerHTML = data;
        animationReveal();
    });