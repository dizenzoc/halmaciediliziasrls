fetch('/components/navbar.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    });

fetch('/components/footer.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });

fetch('/components/hero.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('hero').innerHTML = data;
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

fetch('/components/workWithUs.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('work-with-us').innerHTML = data;

        initWorkWithUsForm();
    });

fetch('/components/userReviews.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('user-reviews').innerHTML = data;

        initWorkWithUsForm();
    });